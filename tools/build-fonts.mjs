// Copies the self-hosted web fonts (OFL) from npm into assets/fonts.
// The CSP only allows fonts from our own origin, so nothing is loaded from Google.
//   npm run build:fonts
import { copyFileSync, mkdirSync } from "node:fs";

const FONTS = [
  // UI and display: Roboto Flex (variable weight/width), the Material 3 Expressive face.
  ["roboto-flex", "roboto-flex-latin-standard-normal.woff2", "roboto-flex-latin.woff2"],
  ["roboto-flex", "roboto-flex-latin-ext-standard-normal.woff2", "roboto-flex-latin-ext.woff2"],
  // The Mirrored Realms: Cinzel for titles (engraved capitals), EB Garamond for prose.
  ["cinzel", "cinzel-latin-wght-normal.woff2", "cinzel-latin.woff2"],
  ["cinzel", "cinzel-latin-ext-wght-normal.woff2", "cinzel-latin-ext.woff2"],
  ["eb-garamond", "eb-garamond-latin-wght-normal.woff2", "eb-garamond-latin.woff2"],
  ["eb-garamond", "eb-garamond-latin-ext-wght-normal.woff2", "eb-garamond-latin-ext.woff2"],
  ["eb-garamond", "eb-garamond-latin-wght-italic.woff2", "eb-garamond-italic-latin.woff2"],
  ["eb-garamond", "eb-garamond-latin-ext-wght-italic.woff2", "eb-garamond-italic-latin-ext.woff2"],
];

const out = new URL("../assets/fonts/", import.meta.url);
mkdirSync(out, { recursive: true });
for (const [family, source, target] of FONTS) {
  copyFileSync(new URL(`../node_modules/@fontsource-variable/${family}/files/${source}`, import.meta.url), new URL(target, out));
}
console.log(`${FONTS.length} font files copied to assets/fonts.`);
