import { ImageResponse } from "next/og";

export const alt =
  "Dalitso Kamphani — I build digital products that solve real problems.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: "#f7f5ee",
          color: "#171713",
          fontFamily: "Arial, Helvetica, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 470,
            height: 470,
            borderRadius: "50%",
            backgroundColor: "#d8ff54",
            right: -100,
            top: -135,
            display: "flex",
            opacity: 0.8,
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 320,
            height: 320,
            borderRadius: "50%",
            border: "2px solid #e7a18d",
            right: 85,
            bottom: -180,
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <div style={{ display: "flex", fontSize: 34, fontWeight: 800 }}>
            dalitso<span style={{ color: "#a5d900" }}>.</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 17,
              letterSpacing: "3px",
              fontWeight: 700,
            }}
          >
            INDEPENDENT DEVELOPER · MALAWI
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            maxWidth: 900,
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 68,
              lineHeight: 1.08,
              fontWeight: 800,
              letterSpacing: "-3px",
            }}
          >
            I build digital products that solve real problems.
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 780,
              fontSize: 25,
              lineHeight: 1.45,
              color: "#55554d",
            }}
          >
            Data platforms, geospatial intelligence, and modern web applications.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #d8d6cd",
            paddingTop: 22,
            fontSize: 18,
            fontWeight: 600,
            zIndex: 1,
          }}
        >
          <div style={{ display: "flex" }}>
            Built in Malawi. Connected to the world.
          </div>
          <div style={{ display: "flex", color: "#55554d" }}>
            DEVELOPMENT · DATA & GIS · AI
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
