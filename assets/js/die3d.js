// The Mirrored Realms easter egg: a real 3D d20.
// A true icosahedron drawn on a canvas – twenty numbered faces (opposite faces
// add up to 21, as on a real die), lit from the upper left. It turns slowly on
// its own; press it and it tumbles and lands with the rolled face towards you.
// No library: the solid is small enough to project and shade by hand.
(() => {
    const placeholder = document.querySelector('svg[data-die3d]');
    const probe = document.createElement('canvas');
    if (!placeholder || !probe.getContext || !probe.getContext('2d')) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const shared = window.realmDice || {};

    // ─── Vector and matrix helpers (3×3, row-major) ─────────────────────────
    const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
    const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
    const normalize = (a) => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
    const apply = (m, v) => [
        m[0] * v[0] + m[1] * v[1] + m[2] * v[2],
        m[3] * v[0] + m[4] * v[1] + m[5] * v[2],
        m[6] * v[0] + m[7] * v[1] + m[8] * v[2]
    ];
    const multiply = (a, b) => {
        const out = new Array(9);
        for (let r = 0; r < 3; r += 1) {
            for (let c = 0; c < 3; c += 1) {
                out[r * 3 + c] = a[r * 3] * b[c] + a[r * 3 + 1] * b[3 + c] + a[r * 3 + 2] * b[6 + c];
            }
        }
        return out;
    };
    const transpose = (m) => [m[0], m[3], m[6], m[1], m[4], m[7], m[2], m[5], m[8]];
    // Rotation about a unit axis (Rodrigues' formula).
    const rotation = (axis, angle) => {
        const [x, y, z] = axis;
        const c = Math.cos(angle);
        const s = Math.sin(angle);
        const t = 1 - c;
        return [
            t * x * x + c, t * x * y - s * z, t * x * z + s * y,
            t * x * y + s * z, t * y * y + c, t * y * z - s * x,
            t * x * z - s * y, t * y * z + s * x, t * z * z + c
        ];
    };
    // The axis and angle (0…π) of a rotation matrix.
    const axisAngle = (m) => {
        const angle = Math.acos(Math.max(-1, Math.min(1, (m[0] + m[4] + m[8] - 1) / 2)));
        if (angle < 1e-4) return { axis: [0, 1, 0], angle: 0 };
        if (Math.PI - angle < 1e-3) {
            const x = Math.sqrt(Math.max(0, (m[0] + 1) / 2));
            const y = Math.sqrt(Math.max(0, (m[4] + 1) / 2)) * (m[1] < 0 ? -1 : 1);
            const z = Math.sqrt(Math.max(0, (m[8] + 1) / 2)) * (m[2] < 0 ? -1 : 1);
            return { axis: normalize([x, y, z]), angle };
        }
        return { axis: normalize([m[7] - m[5], m[2] - m[6], m[3] - m[1]]), angle };
    };

    // ─── The icosahedron ────────────────────────────────────────────────────
    const PHI = (1 + Math.sqrt(5)) / 2;
    const vertices = [];
    for (const a of [-1, 1]) {
        for (const b of [-PHI, PHI]) {
            vertices.push(normalize([0, a, b]), normalize([a, b, 0]), normalize([b, 0, a]));
        }
    }
    const edge = 2 / Math.hypot(1, PHI);
    const isEdge = (i, j) => Math.abs(Math.hypot(...sub(vertices[i], vertices[j])) - edge) < 1e-6;

    const faces = [];
    for (let i = 0; i < 12; i += 1) {
        for (let j = i + 1; j < 12; j += 1) {
            for (let k = j + 1; k < 12; k += 1) {
                if (!isEdge(i, j) || !isEdge(j, k) || !isEdge(i, k)) continue;
                const centre = [0, 1, 2].map((axis) => (vertices[i][axis] + vertices[j][axis] + vertices[k][axis]) / 3);
                const normal = normalize(centre);
                // The number stands upright towards one corner of its triangle.
                const up = normalize(sub(vertices[i], centre));
                faces.push({ corners: [i, j, k], centre, normal, up, right: cross(up, normal), value: 0 });
            }
        }
    }
    // Number the faces so that opposite faces add up to 21.
    let next = 1;
    faces.forEach((face) => {
        if (face.value) return;
        const opposite = faces.find((other) => dot(other.normal, face.normal) < -0.999);
        face.value = next;
        opposite.value = 21 - next;
        next += 1;
    });
    // The orientation that turns a face towards the viewer with its number upright.
    const facing = (value) => {
        const face = faces.find((candidate) => candidate.value === value);
        return [...face.right, ...face.up, ...face.normal];
    };

    // ─── Canvas ─────────────────────────────────────────────────────────────
    const canvas = document.createElement('canvas');
    canvas.className = 'realm-die3d';
    canvas.setAttribute('role', 'button');
    canvas.setAttribute('tabindex', '0');
    const setLabel = () => canvas.setAttribute('aria-label', shared.label ? shared.label() : 'Roll the d20');
    setLabel();
    placeholder.replaceWith(canvas);
    const context = canvas.getContext('2d');

    const GOLD = [232, 193, 115];
    const DARK = [22, 17, 10];
    const EMBER = [196, 83, 58];
    const BRIGHT = [255, 243, 207];
    const LIGHT = normalize([-0.45, 0.62, 0.66]);
    const CAMERA = 5.2; // Distance of the eye, in die radii: a gentle perspective.
    const mix = (from, to, amount) => from.map((channel, index) => Math.round(channel + (to[index] - channel) * amount));
    const rgb = (colour, alpha = 1) => `rgb(${colour[0]} ${colour[1]} ${colour[2]} / ${alpha})`;

    let size = 0;
    let ratio = 1;
    const resize = () => {
        ratio = Math.min(window.devicePixelRatio || 1, 2.5);
        size = canvas.clientWidth || 150;
        canvas.width = Math.round(size * ratio);
        canvas.height = Math.round(size * ratio);
    };

    // mood: 0 normal, 1 natural 20 (bright), -1 natural 1 (ember).
    const draw = (orientation, lift = 0, mood = 0) => {
        const width = canvas.width;
        const radius = width * 0.37;
        const centreX = width / 2;
        const centreY = width / 2 + width * 0.04 - lift * ratio;
        const tint = mood < 0 ? EMBER : mood > 0 ? BRIGHT : GOLD;
        const project = (point) => {
            const depth = CAMERA / (CAMERA - point[2]);
            return [centreX + point[0] * depth * radius, centreY - point[1] * depth * radius];
        };

        context.setTransform(1, 0, 0, 1, 0, 0);
        context.clearRect(0, 0, width, width);
        const turned = vertices.map((vertex) => apply(orientation, vertex));

        faces.forEach((face) => {
            const normal = apply(orientation, face.normal);
            // Back faces are hidden by the solid itself.
            if (normal[2] <= 0.02) return;
            const corners = face.corners.map((index) => project(turned[index]));
            const lit = Math.max(0, dot(normal, LIGHT));

            context.beginPath();
            context.moveTo(corners[0][0], corners[0][1]);
            context.lineTo(corners[1][0], corners[1][1]);
            context.lineTo(corners[2][0], corners[2][1]);
            context.closePath();
            // Faces stay gold on a natural 20 (only brighter); edges and numbers take the tint.
            context.fillStyle = rgb(mix(DARK, mood < 0 ? EMBER : GOLD, 0.1 + 0.46 * lit ** 1.3 + (mood > 0 ? 0.2 : 0)));
            context.fill();
            context.lineJoin = 'round';
            context.lineWidth = 1.3 * ratio;
            context.strokeStyle = rgb(tint, 0.92);
            context.stroke();

            // The number lies in the plane of its face, so it foreshortens with it.
            const visible = Math.min(1, Math.max(0, (normal[2] - 0.12) / 0.45));
            if (!visible) return;
            const centre = project(apply(orientation, face.centre));
            const right = apply(orientation, face.right);
            const up = apply(orientation, face.up);
            const unit = radius / 100;
            context.setTransform(right[0] * unit, -right[1] * unit, -up[0] * unit, up[1] * unit, centre[0], centre[1]);
            context.font = '800 27px Cinzel, Georgia, serif';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillStyle = rgb(mood < 0 ? EMBER : BRIGHT, visible);
            context.fillText(String(face.value), 0, 3);
            // 6 and 9 are underlined, as on a real die.
            if (face.value === 6 || face.value === 9) context.fillRect(-8, 17, 16, 2.4);
            context.setTransform(1, 0, 0, 1, 0, 0);
        });
    };

    // ─── Motion ─────────────────────────────────────────────────────────────
    const IDLE_AXIS = normalize([0.32, 1, 0.14]);
    const IDLE_SPEED = (Math.PI * 2) / 36000; // One turn in 36 seconds.
    const ROLL_TIME = 1700;
    const REST_TIME = 8000;

    let base = multiply(rotation(normalize([1, 0.4, 0]), 0.5), facing(20));
    let idleAngle = 0;
    let mood = 0;
    let roll = null;
    let restUntil = 0;
    let onScreen = false;
    let frame = 0;
    let previous = 0;

    const orientationNow = () => multiply(rotation(IDLE_AXIS, idleAngle), base);

    const finish = (value) => {
        mood = value === 20 ? 1 : value === 1 ? -1 : 0;
        canvas.classList.toggle('is-crit', value === 20);
        canvas.classList.toggle('is-fumble', value === 1);
        if (value === 20 && shared.burst) shared.burst(canvas);
        if (shared.announce) shared.announce(value);
    };

    const tick = (now) => {
        frame = 0;
        const delta = Math.min(64, now - (previous || now));
        previous = now;

        if (roll) {
            const progress = Math.min(1, (now - roll.start) / ROLL_TIME);
            // Two rotations at once – the long spin winds down, the second adds the tumble.
            const spin = rotation(roll.axis, roll.angle * (1 - progress) ** 3);
            const tumble = rotation(roll.tumbleAxis, Math.PI * 2 * (1 - (1 - progress) ** 2));
            // The die hops and settles in ever smaller bounces.
            const lift = Math.abs(Math.sin(Math.PI * 3 * progress)) * (1 - progress) ** 2 * size * 0.16;
            draw(multiply(tumble, multiply(spin, roll.target)), lift, 0);
            if (progress === 1) {
                base = roll.target;
                idleAngle = 0;
                restUntil = now + REST_TIME;
                const value = roll.value;
                roll = null;
                finish(value);
                draw(base, 0, mood);
            }
        } else if (now >= restUntil && !reducedMotion.matches) {
            idleAngle += delta * IDLE_SPEED;
            draw(orientationNow(), 0, mood);
        }

        if (roll || (onScreen && !reducedMotion.matches)) schedule();
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(tick); };

    const throwDie = () => {
        if (roll) return;
        const value = 1 + Math.floor(Math.random() * 20);
        const target = facing(value);
        mood = 0;
        canvas.classList.remove('is-crit', 'is-fumble');

        if (reducedMotion.matches) {
            base = target;
            idleAngle = 0;
            finish(value);
            draw(base, 0, mood);
            return;
        }

        // Start exactly where the die is now, then add whole extra turns about the same axis.
        const difference = axisAngle(multiply(orientationNow(), transpose(target)));
        const tumbleAxis = normalize(cross(difference.axis, [0.3, 0.2, 1]));
        roll = { start: performance.now(), value, target, axis: difference.axis, angle: difference.angle + Math.PI * 4, tumbleAxis };
        previous = 0;
        schedule();
    };

    canvas.addEventListener('click', throwDie);
    canvas.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        throwDie();
    });
    window.addEventListener('site-language-change', setLabel);

    const redraw = () => { resize(); draw(orientationNow(), 0, mood); };
    window.addEventListener('resize', redraw);
    redraw();
    // The numbers use the page's display font; draw again once it has loaded.
    document.fonts?.ready.then(redraw).catch(() => {});

    // Only turn while the die is actually on screen.
    if ('IntersectionObserver' in window) {
        new IntersectionObserver((entries) => {
            onScreen = entries.some((entry) => entry.isIntersecting);
            previous = 0;
            if (onScreen) schedule();
        }, { rootMargin: '80px' }).observe(canvas);
    } else {
        onScreen = true;
        schedule();
    }
})();
