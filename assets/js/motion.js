// Material 3 Expressive motion: ripples, the travelling navigation indicator,
// staggered list entrances, the wavy progress line and the rollable d20.
// Pure decoration – the site works the same without this file.
(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const german = () => document.documentElement.lang === 'de';

    // ─── Ripple ──────────────────────────────────────────────────────────
    const RIPPLE_TARGETS = [
        '.button', '.round-link', '.button-ghost', '.site-nav a', '.language-option',
        '.menu-toggle', '.contact-channel', '.contact-primary', '.project-open',
        '.footer-links a', '.footer-actions a', '.site-footer > a:last-child', '.copy-code', '.detail-breadcrumb'
    ].join(',');

    document.addEventListener('pointerdown', (event) => {
        if (reducedMotion.matches || event.button !== 0) return;
        const host = event.target.closest(RIPPLE_TARGETS);
        if (!host) return;

        if (!host.classList.contains('has-ripple')) {
            host.classList.add('has-ripple');
            if (getComputedStyle(host).position === 'static') host.style.position = 'relative';
        }

        const rect = host.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        // Large enough to reach the farthest corner from the touch point.
        const size = 2 * Math.hypot(Math.max(x, rect.width - x), Math.max(y, rect.height - y));
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.setAttribute('aria-hidden', 'true');
        ripple.style.setProperty('--ripple-x', `${x}px`);
        ripple.style.setProperty('--ripple-y', `${y}px`);
        ripple.style.setProperty('--ripple-size', `${size}px`);
        host.append(ripple);

        const release = () => {
            ripple.classList.add('is-released');
            window.setTimeout(() => ripple.remove(), 400);
            window.removeEventListener('pointerup', release);
            window.removeEventListener('pointercancel', release);
        };
        window.addEventListener('pointerup', release);
        window.addEventListener('pointercancel', release);
    });

    // ─── Staggered lists ─────────────────────────────────────────────────
    const STAGGER_LISTS = [
        '.hero-actions', '.tag-list', '.detail-tags', '.vault-index', '.process-steps', '.contact-channels',
        '.detail-actions', '.detail-stats', '.check-list', '.install-list', '.vault-steps', '.deletion-steps'
    ].join(',');

    document.querySelectorAll(STAGGER_LISTS).forEach((list) => {
        const items = [...list.children];
        // Lists whose items reveal themselves are staggered by the reveal observer instead.
        if (!list.closest('.reveal') || items.some((item) => item.classList.contains('reveal'))) return;
        list.dataset.stagger = '';
        items.forEach((item, index) => item.style.setProperty('--i', String(index)));
    });

    // ─── Navigation indicator ────────────────────────────────────────────
    const nav = document.querySelector('.site-nav');
    const sectionLinks = nav ? [...nav.querySelectorAll('a[href^="#"]')] : [];

    if (nav && sectionLinks.length) {
        const indicator = document.createElement('span');
        indicator.className = 'nav-indicator';
        indicator.setAttribute('aria-hidden', 'true');
        nav.prepend(indicator);
        nav.classList.add('has-indicator');

        let current = null;
        let stretchTimer = 0;

        const place = (x, width) => {
            indicator.style.setProperty('--indicator-x', `${x}px`);
            indicator.style.setProperty('--indicator-width', `${width}px`);
        };

        const moveTo = (link, animate = true) => {
            window.clearTimeout(stretchTimer);
            if (!link) {
                indicator.classList.remove('is-shown');
                current = null;
                return;
            }

            const target = { x: link.offsetLeft, width: link.offsetWidth };
            if (!current || !animate || reducedMotion.matches) {
                indicator.style.transition = 'none';
                place(target.x, target.width);
                indicator.getBoundingClientRect();
                indicator.style.transition = '';
            } else if (current !== link) {
                // Stretch over both items, then let the far edge spring in behind.
                const from = { x: current.offsetLeft, width: current.offsetWidth };
                const left = Math.min(from.x, target.x);
                const right = Math.max(from.x + from.width, target.x + target.width);
                indicator.classList.add('is-stretching');
                place(left, right - left);
                stretchTimer = window.setTimeout(() => {
                    indicator.classList.remove('is-stretching');
                    place(target.x, target.width);
                }, 150);
            } else {
                place(target.x, target.width);
            }

            indicator.classList.add('is-shown');
            current = link;
        };

        const sync = (animate) => moveTo(sectionLinks.find((link) => link.classList.contains('active')), animate);

        // script.js marks the active section link; follow it.
        // Only the links are watched – the indicator's own class changes must not feed back.
        const activeObserver = new MutationObserver(() => sync(true));
        sectionLinks.forEach((link) => activeObserver.observe(link, { attributes: true, attributeFilter: ['class'] }));
        window.addEventListener('resize', () => sync(false));
        window.addEventListener('site-language-change', () => window.requestAnimationFrame(() => sync(false)));
        document.fonts?.ready.then(() => sync(false)).catch(() => {});
    }

    // ─── Wavy progress: travel only while scrolling ──────────────────────
    const header = document.querySelector('.site-header');
    if (header) {
        let idleTimer = 0;
        window.addEventListener('scroll', () => {
            header.classList.add('is-scrolling');
            window.clearTimeout(idleTimer);
            idleTimer = window.setTimeout(() => header.classList.remove('is-scrolling'), 220);
        }, { passive: true });
    }

    // ─── The Mirrored Realms: roll the d20 ───────────────────────────────
    const dice = document.querySelectorAll('.mirrorgate-page .realm-d20');
    if (!dice.length) return;

    const announcer = document.createElement('p');
    announcer.className = 'd20-result';
    announcer.setAttribute('aria-live', 'polite');
    document.body.append(announcer);

    const label = () => (german() ? 'W20 würfeln' : 'Roll the d20');
    const resultText = (value) => {
        if (value === 20) return german() ? 'Natürliche 20! Kritischer Erfolg.' : 'Natural 20! Critical success.';
        if (value === 1) return german() ? 'Natürliche 1. Kritischer Fehlschlag.' : 'Natural 1. Critical failure.';
        return german() ? `Du hast eine ${value} gewürfelt.` : `You rolled ${[8, 11, 18].includes(value) ? 'an' : 'a'} ${value}.`;
    };

    dice.forEach((die) => {
        const face = die.querySelector('text');
        if (!face) return;

        // Everything inside the SVG tumbles together; the SVG keeps its idle float.
        const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        group.setAttribute('class', 'd20-roll');
        group.append(...die.childNodes);
        die.append(group);

        die.removeAttribute('aria-hidden');
        die.setAttribute('role', 'button');
        die.setAttribute('tabindex', '0');
        die.setAttribute('aria-label', label());
        die.removeAttribute('focusable');

        let rolling = false;
        const roll = () => {
            if (rolling) return;
            rolling = true;
            die.classList.remove('is-crit', 'is-fumble');
            die.closest('.mirrorgate-visual')?.classList.remove('is-crit');

            const result = 1 + Math.floor(Math.random() * 20);
            const duration = reducedMotion.matches ? 0 : 900;
            die.classList.add('is-rolling');

            // Faces flicker past while the die tumbles.
            const flicker = window.setInterval(() => { face.textContent = String(1 + Math.floor(Math.random() * 20)); }, 70);

            window.setTimeout(() => {
                window.clearInterval(flicker);
                face.textContent = String(result);
                die.classList.remove('is-rolling');

                if (result === 20) {
                    die.classList.add('is-crit');
                    die.closest('.mirrorgate-visual')?.classList.add('is-crit');
                    if (!reducedMotion.matches) {
                        const burst = document.createElement('span');
                        burst.className = 'd20-burst';
                        burst.setAttribute('aria-hidden', 'true');
                        const box = die.getBoundingClientRect();
                        const parent = die.parentElement;
                        const origin = parent.getBoundingClientRect();
                        if (getComputedStyle(parent).position === 'static') parent.style.position = 'relative';
                        burst.style.left = `${box.left - origin.left + box.width / 2}px`;
                        burst.style.top = `${box.top - origin.top + box.height / 2}px`;
                        parent.append(burst);
                        burst.addEventListener('animationend', () => burst.remove());
                    }
                } else if (result === 1) {
                    die.classList.add('is-fumble');
                }

                announcer.textContent = resultText(result);
                rolling = false;
            }, duration);
        };

        die.addEventListener('click', roll);
        die.addEventListener('keydown', (event) => {
            if (event.key !== 'Enter' && event.key !== ' ') return;
            event.preventDefault();
            roll();
        });
        window.addEventListener('site-language-change', () => die.setAttribute('aria-label', label()));
    });
})();
