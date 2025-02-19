import { ImageResponse } from "next/og"

export const runtime = "edge"

export const size = {
    width: 180,
    height: 180,
}

export default async function Icon() {
    return new ImageResponse(
        <div
            style={{
                fontSize: "120px",
                background: `linear-gradient(45deg, #3D608E, #153B47)`,
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "40px",
                color: "#fff",
                fontWeight: 700,
                fontFamily: "system-ui",
            }}
        >
            RMM
        </div>,
        {
            ...size,
        },
    )
}