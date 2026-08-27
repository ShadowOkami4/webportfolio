(() => {
    const isHomePage = document.body.classList.contains('home-page');
    const isLegalPage = document.body.classList.contains('legal-page');

    if (isHomePage || isLegalPage) {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        // Keep entry pages at the top while preserving intentional legal-document anchors.
        const resetInitialScroll = () => {
            if (isHomePage && window.location.hash) {
                history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
            }

            if (isLegalPage && window.location.hash) return;

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

        const alignInitialLegalAnchor = () => {
            if (!isLegalPage || !window.location.hash) return;

            const target = document.getElementById(window.location.hash.slice(1));
            if (!target) return;

            const root = document.documentElement;
            const previousScrollBehavior = root.style.scrollBehavior;
            const headerHeight = document.querySelector('.site-header')?.getBoundingClientRect().height ?? 0;
            const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 18;

            root.style.scrollBehavior = 'auto';
            window.scrollTo(0, Math.max(0, targetTop));
            window.requestAnimationFrame(() => {
                root.style.scrollBehavior = previousScrollBehavior;
            });
        };

        const settleInitialPosition = () => {
            resetInitialScroll();
            alignInitialLegalAnchor();
            window.requestAnimationFrame(() => window.requestAnimationFrame(() => {
                resetInitialScroll();
                alignInitialLegalAnchor();
            }));
        };

        settleInitialPosition();
        window.addEventListener('load', () => {
            settleInitialPosition();
            window.setTimeout(alignInitialLegalAnchor, 300);
        }, { once: true });
        window.addEventListener('pageshow', settleInitialPosition);

        if (isLegalPage && document.fonts?.ready) {
            document.fonts.ready.then(alignInitialLegalAnchor).catch(() => {});
        }
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

    const root = document.documentElement;
    const header = document.querySelector('.site-header');
    let scrollFrame = 0;

    const updateScrollState = () => {
        scrollFrame = 0;
        const scrollRange = Math.max(1, root.scrollHeight - window.innerHeight);
        root.style.setProperty('--scroll-progress', String(Math.min(1, window.scrollY / scrollRange)));
        header?.classList.toggle('is-scrolled', window.scrollY > 40);
    };

    window.addEventListener('scroll', () => {
        if (scrollFrame) return;
        scrollFrame = window.requestAnimationFrame(updateScrollState);
    }, { passive: true });
    updateScrollState();

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
                button.dataset.copyState = 'copied';
                window.siteLanguage?.updateDynamicControls();
                window.setTimeout(() => {
                    button.dataset.copyState = 'copy';
                    window.siteLanguage?.updateDynamicControls();
                }, 1400);
            } catch {
                button.dataset.copyState = 'select';
                window.siteLanguage?.updateDynamicControls();
            }
        });
    });
})();
