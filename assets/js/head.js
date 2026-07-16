'use strict';

document.documentElement.classList.add('js');

try {
    const savedLanguage = window.localStorage.getItem('okami-language');
    document.documentElement.dataset.language = savedLanguage === 'de' ? 'de' : 'en';
    document.documentElement.lang = document.documentElement.dataset.language;
} catch {
    document.documentElement.dataset.language = 'en';
}

if (document.documentElement.hasAttribute('data-home')) {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

    if (window.location.hash) {
        history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    }

    window.scrollTo(0, 0);
}
