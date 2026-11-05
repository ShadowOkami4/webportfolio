// LunaEcho Custom price estimate. The rates come from the rate table on the page, so the table
// and the calculator can never disagree. Members are priced in graduated steps of 1,000 across
// all of the customer's bots, the first step free; each bot adds the base price.
(() => {
    const table = document.querySelector('[data-pricing]');
    const calculator = document.querySelector('[data-calculator]');
    if (!table || !calculator) return;

    const base = Number(table.dataset.base);
    const tiers = [...table.querySelectorAll('tr[data-rate]')].map((row) => ({
        from: Number(row.dataset.from),
        to: row.dataset.to === '' ? Infinity : Number(row.dataset.to),
        rate: Number(row.dataset.rate)
    }));

    const botsInput = calculator.querySelector('[data-bots]');
    const membersInput = calculator.querySelector('[data-members]');
    const lineBots = calculator.querySelector('[data-line-bots]');
    const lineMembers = calculator.querySelector('[data-line-members]');
    const total = calculator.querySelector('[data-total]');

    const clamp = (value, min, max) => Math.min(Math.max(Number.isFinite(value) ? value : min, min), max);

    // Whole thousands, rounded up, at least one: the same rule as the billing service.
    const memberPrice = (members) => {
        const units = Math.max(1, Math.ceil(members / 1000));
        return tiers.reduce((sum, tier) => {
            const inTier = Math.max(0, Math.min(units, tier.to) - tier.from + 1);
            return sum + inTier * tier.rate;
        }, 0);
    };

    const format = (value) => new Intl.NumberFormat(
        document.documentElement.dataset.language === 'de' ? 'de-DE' : 'en-IE',
        { currency: 'EUR', style: 'currency' }
    ).format(value);

    const update = () => {
        const bots = Math.round(clamp(Number(botsInput.value), 1, 10));
        const members = clamp(Number(membersInput.value), 0, 10000000);
        const forBots = bots * base;
        const forMembers = memberPrice(members);
        lineBots.textContent = format(forBots);
        lineMembers.textContent = format(forMembers);
        total.textContent = format(forBots + forMembers);
    };

    botsInput.addEventListener('input', update);
    membersInput.addEventListener('input', update);
    // The language switch changes number formatting (3.30 € vs €3.30).
    new MutationObserver(update).observe(document.documentElement, { attributeFilter: ['data-language'] });
    update();
})();
