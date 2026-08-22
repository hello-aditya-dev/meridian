import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Meridian — The operating layer for modern enterprise";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#09090b",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
          }}
        >
          <svg width="88" height="88" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="7" fill="#27272a" />
            <g fill="none" stroke="#a5b4fc" strokeWidth="1.6">
              <circle cx="16" cy="16" r="8.5" />
              <ellipse cx="16" cy="16" rx="3.6" ry="8.5" />
              <path d="M7.5 16h17" />
            </g>
          </svg>
          <span style={{ fontSize: 84, fontWeight: 700, color: "#fafafa", letterSpacing: "-0.03em" }}>
            Meridian
          </span>
        </div>
        <p style={{ marginTop: 28, fontSize: 34, color: "#a1a1aa" }}>
          The operating layer for modern enterprise
        </p>
        <div
          style={{
            marginTop: 44,
            display: "flex",
            gap: 16,
            color: "#d4d4d8",
            fontSize: 22,
          }}
        >
          <span>SOC 2 Type II</span>
          <span style={{ color: "#3f3f46" }}>·</span>
          <span>99.99% uptime SLA</span>
          <span style={{ color: "#3f3f46" }}>·</span>
          <span>$2.4B processed annually</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
