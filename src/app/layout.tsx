import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StructuredData from "@/components/StructuredData";
import { buildSiteMetadata } from "@/data/seo";
import { profileImages } from "@/data/siteImages";
import "../styles/globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = buildSiteMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#11182b",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lcpImage = profileImages[0];

  return (
    <html lang="en-IN" className={manrope.variable}>
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
