import { ImageResponse } from "next/og"

export const runtime = "edge"

export const size = {
    width: 32,
    height: 32,
}

export default async function Icon() {
    return new ImageResponse(
        <div
            style={{
                fontSize: 24,
                background: "#153B47",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                color: "#fff",
                fontWeight: 600,
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