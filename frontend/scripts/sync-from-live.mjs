/**
 * Re-downloads www.gethyped.nl HTML and regenerates:
 * - ../src/styles/embed-from-site.css (inline <style> blocks)
 * - ../src/generated/webflow-external-scripts.json
 * - ../src/generated/webflow-inline-scripts.json
 * - ../src/content/home-body.html (body markup, scripts/styles stripped)
 *
 * Run from repo root: curl first, or from frontend: npm run sync:webflow
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const frontendRoot = path.join(__dirname, "..");
const repoRoot = path.join(frontendRoot, "..");
const fetchedPath = path.join(repoRoot, "_gethyped-fetched.html");

execSync(
  `curl.exe -sL "https://www.gethyped.nl/" -o "${fetchedPath.replace(/\\/g, "\\\\")}"`,
  { stdio: "inherit" },
);

const html = fs.readFileSync(fetchedPath, "utf8");

/* embed CSS */
const styles = [];
let i = 0;
while (true) {
  const a = html.indexOf("<style", i);
  if (a < 0) break;
  const gt = html.indexOf(">", a);
  const end = html.indexOf("</style>", gt);
  if (end < 0) break;
  styles.push(html.slice(gt + 1, end));
  i = end + 8;
}
fs.mkdirSync(path.join(frontendRoot, "src/styles"), { recursive: true });
fs.writeFileSync(
  path.join(frontendRoot, "src/styles/embed-from-site.css"),
  styles.join("\n\n"),
);

/* body inner */
const bodyStart = html.indexOf("<body");
const bodyOpen = html.indexOf(">", bodyStart);
const bodyEnd = html.lastIndexOf("</body>");
let body = html.slice(bodyOpen + 1, bodyEnd);
body = body.replace(/<script\b[\s\S]*?<\/script>/gi, "");
body = body.replace(/<style\b[\s\S]*?<\/style>/gi, "");
fs.mkdirSync(path.join(frontendRoot, "src/content"), { recursive: true });
fs.writeFileSync(path.join(frontendRoot, "src/content/home-body.html"), body);

/* script lists */
function extractBodyScripts() {
  const bodyStart = html.indexOf("<body");
  const bodyOpen = html.indexOf(">", bodyStart);
  const bodyEnd = html.lastIndexOf("</body>");
  const bodyHtml = html.slice(bodyOpen + 1, bodyEnd);
  const external = [];
  const inline = [];
  const re = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(bodyHtml))) {
    const attrs = m[1];
    const content = m[2];
    const srcMatch = /src\s*=\s*["']([^"']+)["']/i.exec(attrs);
    if (srcMatch) external.push(srcMatch[1]);
    else if (content.trim()) inline.push(content.trim());
  }
  return { external, inline };
}

const { external, inline } = extractBodyScripts();
fs.mkdirSync(path.join(frontendRoot, "src/generated"), { recursive: true });
fs.writeFileSync(
  path.join(frontendRoot, "src/generated/webflow-external-scripts.json"),
  JSON.stringify(external, null, 2),
);
fs.writeFileSync(
  path.join(frontendRoot, "src/generated/webflow-inline-scripts.json"),
  JSON.stringify(inline, null, 2),
);

console.log(
  "OK: embed",
  styles.join("").length,
  "chars, body",
  body.length,
  "external",
  external.length,
  "inline",
  inline.length,
);
