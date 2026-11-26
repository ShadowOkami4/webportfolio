// The Mirrored Realms: a secret in the hero mirror.
// Move over the glass and a faint reflection follows you, mirrored. Hold
// still long enough and it stops following: it keeps moving on its own,
// comes to the middle of the glass and breaks it from the inside.
// Touch: press and hold the glass. Keyboard: focus the mirror and press
// Enter. The glass remembers being broken.
(() => {
    'use strict';
    const portal = document.querySelector('.mirror-portal');
    const glass = portal && portal.querySelector('.mirror-surface');
    const ghost = portal && portal.querySelector('.mirror-reflection');
    if (!portal || !glass || !ghost) return;

    const STORE = 'realms-mirror-met';
    const remembered = () => { try { return localStorage.getItem(STORE) === '1'; } catch { return false; } };
    if (remembered()) portal.classList.add('remembers');

    const STILL_MS = 2600;
    let stillTimer = 0;
    let awake = false;

    const place = (x, y) => {
        ghost.style.setProperty('--rx', `${x}%`);
        ghost.style.setProperty('--ry', `${y}%`);
    };

    const breakGlass = () => {
        if (awake) return;
        awake = true;
        window.clearTimeout(stillTimer);
        // The reflection takes over: it drifts to the centre, then breaks out.
        portal.classList.add('is-watched', 'is-waking');
        place(58, 34);
        window.setTimeout(() => {
            portal.classList.remove('remembers', 'is-waking');
            portal.classList.add('is-cracked');
            try { localStorage.setItem(STORE, '1'); } catch { /* private mode: the glass forgets */ }
        }, 1400);
    };

    const waitForStillness = () => {
        window.clearTimeout(stillTimer);
        if (!awake) stillTimer = window.setTimeout(breakGlass, STILL_MS);
    };

    // Browsers send move events when the animated glass shifts under a resting
    // cursor, so only a real move of a few pixels counts as moving.
    let lastX = -99;
    let lastY = -99;
    glass.addEventListener('pointermove', (event) => {
        if (awake || event.pointerType !== 'mouse') return;
        if (Math.hypot(event.clientX - lastX, event.clientY - lastY) < 4) return;
        lastX = event.clientX;
        lastY = event.clientY;
        const box = glass.getBoundingClientRect();
        const x = ((event.clientX - box.left) / box.width) * 100;
        const y = ((event.clientY - box.top) / box.height) * 100;
        // A mirror swaps left and right.
        place(100 - x, y);
        portal.classList.add('is-watched');
        waitForStillness();
    });
    glass.addEventListener('pointerleave', () => {
        if (awake) return;
        lastX = -99;
        portal.classList.remove('is-watched');
        window.clearTimeout(stillTimer);
    });

    // Touch: press and hold the glass.
    let holdTimer = 0;
    glass.addEventListener('pointerdown', (event) => {
        if (awake || event.pointerType === 'mouse') return;
        portal.classList.add('is-watched');
        holdTimer = window.setTimeout(breakGlass, 1400);
    });
    ['pointerup', 'pointercancel'].forEach((type) => glass.addEventListener(type, () => {
        window.clearTimeout(holdTimer);
        if (!awake) portal.classList.remove('is-watched');
    }));

    portal.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            breakGlass();
        }
    });
})();
