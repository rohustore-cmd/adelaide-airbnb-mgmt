import { ImageResponse } from "next/og";

export const size = { width: 48, height: 48 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 48,
          height: 48,
          background: "#1B2B4B",
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Roof */}
        <div
          style={{
            position: "absolute",
            top: 7,
            left: 5,
            width: 38,
            height: 16,
            background: "#C9A84C",
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
        />
        {/* House body */}
        <div
          style={{
            position: "absolute",
            top: 21,
            left: 9,
            width: 30,
            height: 16,
            background: "#C9A84C",
            borderRadius: 2,
          }}
        />
        {/* Door */}
        <div
          style={{
            position: "absolute",
            top: 27,
            left: 19,
            width: 10,
            height: 10,
            background: "#1B2B4B",
            borderRadius: "3px 3px 0 0",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
