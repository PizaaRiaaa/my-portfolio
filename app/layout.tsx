import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Rikki Mae Martinez | Frontend Developer",
    template: "%s | Rikki Mae Martinez",
  },
  description: "Frontend Developer specializing in React, Next.js, and modern web technologies",
  keywords: [
    "Rikki Mae Martinez",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "UI Developer",
  ],
  authors: [{ name: "Rikki Mae Martinez" }],
  creator: "Rikki Mae Martinez",
  metadataBase: new URL("https://your-website.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-website.com",
    title: "Rikki Mae Martinez | Frontend Developer",
    description: "Frontend Developer specializing in React, Next.js, and modern web technologies",
    siteName: "Rikki Mae Martinez Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rikki Mae Martinez | Frontend Developer",
    description: "Frontend Developer specializing in React, Next.js, and modern web technologies",
    creator: "@yourtwitterhandle",
  },
  icons: {
    icon: [
      { url: "/icon.png" },
      { url: "/icon.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#090F13] text-gray-100`}>{children}</body>
    </html>
  )
}