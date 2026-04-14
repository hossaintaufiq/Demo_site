import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Tab / PWA icon — Get Hyped mark (replaces default Vercel triangle in dev when this app serves the page). */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#faf4ec",
          fontSize: 13,
          fontWeight: 800,
          letterSpacing: "-0.05em",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
        }}
      >
        GH
      </div>
    ),
    {
      ...size,
    },
  );
}
