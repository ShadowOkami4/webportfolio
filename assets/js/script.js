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
            // Elements entering together (a row of cards) arrive one after another.
            entries.filter((entry) => entry.isIntersecting).forEach((entry, index) => {
                observer.unobserve(entry.target);
                window.setTimeout(() => entry.target.classList.add('is-visible'), Math.min(index, 6) * 80);
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

    document.querySelectorAll('[data-realm-map]').forEach((map) => {
        const frame = map.querySelector('.realm-map-frame');
        const options = map.querySelectorAll('.realm-map-option');
        options.forEach((option) => option.addEventListener('click', () => {
            const view = option.dataset.map;
            options.forEach((other) => other.setAttribute('aria-pressed', String(other === option)));
            map.querySelectorAll('.realm-map-image').forEach((image) => {
                const shown = image.dataset.map === view;
                image.classList.toggle('is-shown', shown);
                if (shown && frame) frame.href = image.getAttribute('src');
            });
        }));
    });

    // Contact: the current time in Germany and whether Okami is likely to answer now.
    // Texts are written here in both languages; the clock's nodes are skipped by translations.js.
    document.querySelectorAll('[data-clock]').forEach((clock) => {
        const from = Number(clock.dataset.replyFrom ?? 10);
        const until = Number(clock.dataset.replyUntil ?? 22);
        const timeOutput = clock.querySelector('[data-clock-time]');
        const stateOutput = clock.querySelector('[data-clock-state]');
        const noteOutput = clock.querySelector('[data-clock-note]');
        const pad = (hour) => `${String(hour).padStart(2, '0')}:00`;
        const berlinParts = new Intl.DateTimeFormat('en-GB', {
            timeZone: 'Europe/Berlin', hourCycle: 'h23',
            year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'
        });

        const render = () => {
            const now = new Date();
            const part = Object.fromEntries(berlinParts.formatToParts(now).map(({ type, value }) => [type, Number(value)]));
            const de = document.documentElement.lang === 'de';
            const available = part.hour >= from && part.hour < until;

            timeOutput.textContent = `${String(part.hour).padStart(2, '0')}:${String(part.minute).padStart(2, '0')}`;
            clock.classList.toggle('is-available', available);

            if (available) {
                stateOutput.textContent = de ? 'Gerade bin ich meistens erreichbar.' : 'I’m usually around right now.';
            } else if (part.hour < from) {
                stateOutput.textContent = de ? 'In Deutschland ist gerade Nacht.' : 'It’s night-time in Germany.';
            } else {
                stateOutput.textContent = de ? 'Für heute bin ich wahrscheinlich offline.' : 'I’m probably offline for today.';
            }

            // Reply hours in German time, plus the visitor's own time when their clock differs.
            const berlinOffset = Date.UTC(part.year, part.month - 1, part.day, part.hour, part.minute) - Math.floor(now.getTime() / 60000) * 60000;
            const local = (hour) => new Date(Date.UTC(part.year, part.month - 1, part.day, hour) - berlinOffset)
                .toLocaleTimeString(de ? 'de-DE' : 'en-GB', { hour: '2-digit', minute: '2-digit' });
            const sameClock = Math.abs(berlinOffset + now.getTimezoneOffset() * 60000) < 60000;
            noteOutput.textContent = de
                ? `Ich antworte meist zwischen ${pad(from)} und ${pad(until)} Uhr deutscher Zeit${sameClock ? '' : ` (bei dir ${local(from)}–${local(until)})`}.`
                : `I usually answer between ${pad(from)} and ${pad(until)} German time${sameClock ? '' : ` (${local(from)}–${local(until)} for you)`}.`;
        };

        render();
        // Re-render on the next full minute, then every minute.
        window.setTimeout(() => {
            render();
            window.setInterval(render, 60000);
        }, 60000 - (Date.now() % 60000) + 50);
        window.addEventListener('site-language-change', render);
    });

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
