import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 22,
          background: "#000",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          borderRadius: "50%", // Optional circle shape
          fontWeight: 600,
          fontFamily: "sans-serif",
        }}
      >
        G
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
