import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Rikki Mae Martinez - Frontend Developer"
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = "image/png"

export default async function Image() {
    return new ImageResponse(
        <div
            style={{
                background: `linear-gradient(45deg, #3D608E, #153B47)`,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "system-ui",
                padding: "40px",
            }}
        >
            <div
                style={{
                    fontSize: "80px",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "20px",
                    textAlign: "center",
                }}
            >
                RIKKI MAE
                <br />
                MARTINEZ
            </div>
            <div
                style={{
                    fontSize: "40px",
                    color: "rgba(255, 255, 255, 0.8)",
                    textAlign: "center",
                }}
            >
                Frontend Developer
            </div>
        </div>,
        {
            ...size,
        },
    )
}