import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const s = fs.readFileSync(path.join(root, "src/content/home-body.html"), "utf8");
const start = s.indexOf('<section class="section_footer');
const end = s.indexOf("</section><section", start + 1);
console.log("start", start, "end", end);
if (start >= 0 && end > start) {
  const slice = s.slice(start, end + "</section>".length);
  fs.writeFileSync(path.join(root, "src/components/home/_footer-snippet.html"), slice);
  console.log("wrote", slice.length);
}
