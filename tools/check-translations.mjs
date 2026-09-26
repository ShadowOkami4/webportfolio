// Lists (and with --write removes) German translations whose English source
// text no longer appears on any page. Keeps the dictionary free of leftovers
// from earlier designs.
//   node tools/check-translations.mjs [--write]
import { readFileSync, writeFileSync } from "node:fs";

const PAGES = ["index.html", "404.html", "pages/voidline.html", "pages/lunaecho.html", "pages/lunaecho-terms.html", "pages/lunaecho-privacy.html", "pages/mirrorgate.html"];
// Keys looked up from JavaScript rather than from page text.
const USED_IN_CODE = ["Copy", "Copied", "Select text"];
const DICTIONARY = new URL("../assets/js/translations.js", import.meta.url);

const entities = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", rsquo: "’", lsquo: "‘", ldquo: "“", rdquo: "”", ndash: "–", mdash: "—", hellip: "…", rarr: "→", larr: "←", uarr: "↑", darr: "↓" };
const decode = (text) => text
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
    .replace(/&([a-z]+);/gi, (match, name) => entities[name.toLowerCase()] ?? match);

const used = new Set(USED_IN_CODE);
for (const page of PAGES) {
    const html = readFileSync(new URL(`../${page}`, import.meta.url), "utf8")
        .replace(/<!--[\s\S]*?-->/g, "")
        .replace(/<(script|style)\b[\s\S]*?<\/\1>/gi, (match) => (match.startsWith("<script") && match.includes("src=") ? "" : ""));
    // Text between tags (the translation works on whole, trimmed text nodes).
    for (const part of html.split(/<[^>]+>/)) {
        const text = decode(part).trim();
        if (text) used.add(text);
    }
    // Translated attributes and the document title.
    for (const [, value] of html.matchAll(/\s(?:aria-label|alt|title|content)="([^"]*)"/g)) used.add(decode(value).trim());
}

const source = readFileSync(DICTIONARY, "utf8");
const entry = /^\s*'((?:[^'\\]|\\.)*)':\s*'(?:[^'\\]|\\.)*',?\s*$/;
const unused = [];
// Only the page dictionaries are pruned; the route table and code below them stay untouched.
const end = source.indexOf("const pageTranslations");
let offset = 0;
const kept = source.split("\n").filter((line) => {
    const inDictionaries = offset < end;
    offset += line.length + 1;
    const match = inDictionaries && line.match(entry);
    if (!match) return true;
    const key = match[1].replace(/\\'/g, "'");
    if (used.has(key)) return true;
    unused.push(key);
    return false;
});

console.log(`${unused.length} unused translation${unused.length === 1 ? "" : "s"}.`);
for (const key of unused) console.log(`  - ${key.length > 110 ? `${key.slice(0, 107)}…` : key}`);
if (process.argv.includes("--write") && unused.length) {
    // A removed last entry would leave a trailing comma; that is valid JavaScript in object literals.
    writeFileSync(DICTIONARY, kept.join("\n"));
    console.log("translations.js updated.");
}
