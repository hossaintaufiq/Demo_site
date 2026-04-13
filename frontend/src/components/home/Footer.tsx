"use client";

import { FOOTER_HTML } from "./footer-static";

export function Footer() {
  return <div className="footer" dangerouslySetInnerHTML={{ __html: FOOTER_HTML }} />;
}
