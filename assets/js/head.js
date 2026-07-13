'use strict';

document.documentElement.classList.add('js');

if (document.documentElement.hasAttribute('data-home')) {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

    if (window.location.hash) {
        history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    }

    window.scrollTo(0, 0);
}
