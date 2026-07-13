(() => {
    const isHomePage = document.body.classList.contains('home-page');

    if (isHomePage) {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        // Prevent saved hashes and browser restoration from opening the homepage mid-page.
        const resetHomeScroll = () => {
            if (window.location.hash) {
                history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
            }

            const root = document.documentElement;
            const previousScrollBehavior = root.style.scrollBehavior;
            root.style.scrollBehavior = 'auto';
            window.scrollTo(0, 0);
            root.scrollTop = 0;
            document.body.scrollTop = 0;

            window.requestAnimationFrame(() => {
                root.style.scrollBehavior = previousScrollBehavior;
            });
        };

        resetHomeScroll();
        window.addEventListener('load', resetHomeScroll, { once: true });
        window.addEventListener('pageshow', (event) => {
            if (event.persisted) resetHomeScroll();
        });
    }

    const menuButton = document.querySelector('.menu-toggle');
    const siteNav = document.querySelector('.site-nav');

    const closeMenu = () => {
        if (!menuButton || !siteNav) return;
        menuButton.setAttribute('aria-expanded', 'false');
        siteNav.classList.remove('open');
    };

    if (menuButton && siteNav) {
        menuButton.addEventListener('click', () => {
            const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
            menuButton.setAttribute('aria-expanded', String(!isOpen));
            siteNav.classList.toggle('open', !isOpen);
        });

        siteNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') closeMenu();
        });
    }

    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            });
        }, { rootMargin: '0px 0px -7% 0px', threshold: 0.08 });

        reveals.forEach((element) => revealObserver.observe(element));
    } else {
        reveals.forEach((element) => element.classList.add('is-visible'));
    }

    const sectionLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
    const linkedSections = sectionLinks
        .map((link) => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    if ('IntersectionObserver' in window && linkedSections.length) {
        const sectionObserver = new IntersectionObserver((entries) => {
            const visible = entries.find((entry) => entry.isIntersecting);
            if (!visible) return;
            sectionLinks.forEach((link) => {
                link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`);
            });
        }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

        linkedSections.forEach((section) => sectionObserver.observe(section));
    }

    const canTrackPointer = window.matchMedia('(pointer: fine)').matches;
    if (canTrackPointer) {
        window.addEventListener('pointermove', (event) => {
            document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
            document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
        }, { passive: true });
    }

    document.querySelectorAll('[data-year]').forEach((element) => {
        element.textContent = new Date().getFullYear();
    });

    document.querySelectorAll('.copy-code').forEach((button) => {
        button.addEventListener('click', async () => {
            const code = button.closest('.code-box')?.querySelector('code')?.textContent;
            if (!code || !navigator.clipboard) return;

            try {
                await navigator.clipboard.writeText(code.trim());
                const original = button.textContent;
                button.textContent = 'Copied';
                window.setTimeout(() => { button.textContent = original; }, 1400);
            } catch {
                button.textContent = 'Select text';
            }
        });
    });
})();
