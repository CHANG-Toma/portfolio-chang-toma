import { chromium } from "playwright";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE = process.env.BASE_URL || "http://localhost:3000";
const OUT = path.join(__dirname, "../public/images/showcase");

const demos = [
  { slug: "maison-lune", url: "/demo/gastro" },
  { slug: "aria-coach", url: "/demo/vitrine" },
  { slug: "atelier-seve", url: "/demo/coiffure" },
];

async function main() {
  fs.mkdirSync(OUT, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });

  for (const demo of demos) {
    const target = `${BASE}${demo.url}`;
    console.log(`Capturing ${target}…`);
    await page.goto(target, { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForTimeout(1400);

    await page.evaluate(() => {
      document.body.style.overflow = "hidden";

      for (const a of document.querySelectorAll("a")) {
        if (!(a.textContent || "").includes("Retour CodeByToma")) continue;
        let el = a.parentElement;
        for (let i = 0; i < 5 && el; i++) {
          const style = getComputedStyle(el);
          const tall = el.getBoundingClientRect().height;
          if (
            tall > 0 &&
            tall < 70 &&
            (el.className.includes("border-b") ||
              style.borderBottomWidth !== "0px" ||
              style.backdropFilter !== "none")
          ) {
            el.style.display = "none";
            break;
          }
          el = el.parentElement;
        }
      }
    });

    await page.waitForTimeout(200);

    const file = path.join(OUT, `${demo.slug}.jpg`);
    await page.screenshot({
      path: file,
      type: "jpeg",
      quality: 90,
      clip: { x: 0, y: 0, width: 1440, height: 900 },
    });
    console.log(`Saved ${file}`);
  }

  await browser.close();
  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
