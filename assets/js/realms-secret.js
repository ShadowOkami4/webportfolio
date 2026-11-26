// The Mirrored Realms: a secret in the hero mirror.
// "A mirror is a door pretending to be furniture." Knock on it three times
// (click, tap, or Enter/Space when focused) and the glass cracks. Behind the
// crack the Professor left a note in mirror writing, and a way to step
// through to the other side of the page. The glass remembers being broken.
(() => {
    'use strict';
    const portal = document.querySelector('.mirror-portal');
    const secret = document.querySelector('.mirror-secret');
    if (!portal || !secret) return;

    const STORE = 'realms-mirror-knocked';
    const remembered = () => { try { return localStorage.getItem(STORE) === '1'; } catch { return false; } };
    if (remembered()) portal.classList.add('remembers');

    let knocks = 0;
    let reset = 0;

    const open = () => {
        portal.classList.remove('remembers');
        portal.classList.add('is-cracked');
        secret.hidden = false;
        requestAnimationFrame(() => requestAnimationFrame(() => secret.classList.add('is-open')));
        try { localStorage.setItem(STORE, '1'); } catch { /* private mode: the glass forgets */ }
    };

    const knock = () => {
        if (portal.classList.contains('is-cracked')) return;
        knocks += 1;
        window.clearTimeout(reset);
        reset = window.setTimeout(() => { knocks = 0; }, 2400);
        // Restart the shudder for every knock.
        portal.classList.remove('is-knocked');
        void portal.offsetWidth;
        portal.classList.add('is-knocked');
        if (knocks >= 3) open();
    };

    portal.addEventListener('click', knock);
    portal.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            knock();
        }
    });

    // Step through: the page becomes its own reflection. Escape steps back.
    const through = secret.querySelector('.mirror-through');
    const setThrough = (on) => {
        document.documentElement.classList.toggle('is-through', on);
        if (through) through.setAttribute('aria-pressed', String(on));
    };
    if (through) through.addEventListener('click', () => setThrough(!document.documentElement.classList.contains('is-through')));
    // A way back that stays in reach wherever you scroll on the other side.
    const back = document.querySelector('.mirror-return');
    if (back) back.addEventListener('click', () => setThrough(false));
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && document.documentElement.classList.contains('is-through')) setThrough(false);
    });
})();
