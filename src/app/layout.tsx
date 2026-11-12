import type { Metadata, Viewport } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StructuredData from "@/components/StructuredData";
import { buildSiteMetadata } from "@/data/seo";
import { profileImages } from "@/data/siteImages";
import "../styles/globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = buildSiteMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#211619",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lcpImage = profileImages[0];

  return (
    <html lang="en-IN" className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href={lcpImage.src}
          fetchPriority="high"
        />
        <StructuredData />
      </head>
      <body className="bg-paper font-sans text-ink antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
