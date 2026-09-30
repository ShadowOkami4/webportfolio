// Renders tools/og-card.html to assets/images/og-<card>.png (1200×630), the
// images chat apps and social sites show when a link to the site is shared.
// Needs Edge or Chrome installed; set BROWSER to point at another binary.
//   node tools/build-og.mjs [card ...]     (no argument: all cards)
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

// Must match the CARDS object in og-card.html.
const CARDS = ["okami", "voidline", "lunaecho", "realms"];

const candidates = [
    process.env.BROWSER,
    "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
    "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "/usr/bin/chromium",
    "/usr/bin/google-chrome",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
].filter(Boolean);
const browser = candidates.find((path) => existsSync(path));
if (!browser) {
    console.error("No Edge/Chrome found. Set BROWSER to the path of a Chromium-based browser.");
    process.exit(1);
}

const template = pathToFileURL(fileURLToPath(new URL("./og-card.html", import.meta.url))).href;
const wanted = process.argv.slice(2);
const unknown = wanted.filter((name) => !CARDS.includes(name));
if (unknown.length) {
    console.error(`Unknown card: ${unknown.join(", ")}. Available: ${CARDS.join(", ")}.`);
    process.exit(1);
}

for (const name of wanted.length ? wanted : CARDS) {
    const output = fileURLToPath(new URL(`../assets/images/og-${name}.png`, import.meta.url));
    // A private profile, so the run does not hand over to a browser that is already open.
    const profile = mkdtempSync(join(tmpdir(), "okami-og-"));
    rmSync(output, { force: true });

    execFileSync(browser, [
        "--headless=new",
        `--user-data-dir=${profile}`,
        "--no-first-run",
        "--disable-gpu",
        "--hide-scrollbars",
        "--force-device-scale-factor=1",
        "--window-size=1200,630",
        // Give the web fonts time to load before the screenshot is taken.
        "--virtual-time-budget=4000",
        `--screenshot=${output}`,
        `${template}?card=${name}`
    ], { stdio: "ignore" });

    // The launcher can return before the screenshot is on disk; wait for it.
    for (let tries = 0; tries < 60 && !existsSync(output); tries += 1) {
        await new Promise((resolve) => setTimeout(resolve, 250));
    }
    try {
        rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
    } catch {
        // A still-closing browser may hold the temporary profile; the OS cleans it up later.
    }

    if (!existsSync(output)) {
        console.error(`The browser did not produce a screenshot for "${name}".`);
        process.exit(1);
    }
    console.log(`Wrote ${output}`);
}
