import { ImageResponse } from "next/og";

export const alt = "ZenSys Solutions software for shops and garages";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", alignItems: "center", justifyContent: "space-between", padding: "76px", background: "#10283B", color: "#F6F9FA", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", maxWidth: "760px", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "44px", color: "#12B8C7", fontSize: "25px", fontWeight: 700 }}>
          <div style={{ display: "flex", width: "40px", height: "40px", alignItems: "center", justifyContent: "center", border: "6px solid #12B8C7", borderRadius: "50%" }} />
          ZenSys Solutions
        </div>
        <div style={{ fontFamily: "Georgia, serif", fontSize: "64px", lineHeight: 1.05 }}>Software for shops and garages.</div>
        <div style={{ marginTop: "28px", color: "#C6D7DE", fontSize: "24px" }}>POS and garage management, designed around daily work.</div>
      </div>
      <div style={{ display: "flex", width: "170px", height: "170px", alignItems: "center", justifyContent: "center", border: "2px solid #385263", borderRadius: "50%" }}>
        <div style={{ display: "flex", width: "104px", height: "104px", border: "14px solid #12B8C7", borderRadius: "50%" }} />
      </div>
    </div>,
    size,
  );
}
