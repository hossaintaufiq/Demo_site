import fs from "fs";
import path from "path";
import { WebflowRuntime } from "@/components/WebflowRuntime";

export default function Home() {
  const html = fs.readFileSync(
    path.join(process.cwd(), "src/content/home-body.html"),
    "utf8",
  );

  return (
    <>
      <div id="webflow-export-root" dangerouslySetInnerHTML={{ __html: html }} />
      <WebflowRuntime />
    </>
  );
}
