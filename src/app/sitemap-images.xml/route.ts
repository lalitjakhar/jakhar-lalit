import { SITE_UPDATED } from "@/data/seo";
import {
  SITE_URL,
  getAllIndexableImages,
  toAbsoluteImageUrl,
} from "@/data/siteImages";

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function GET() {
  const images = getAllIndexableImages();
  const lastModified = SITE_UPDATED;

  const imageEntries = images
    .map(
      (image) => `
    <image:image>
      <image:loc>${escapeXml(toAbsoluteImageUrl(image.src))}</image:loc>
      <image:title>${escapeXml(image.title)}</image:title>
      <image:caption>${escapeXml(image.caption)}</image:caption>
    </image:image>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${escapeXml(SITE_URL)}</loc>
    <lastmod>${lastModified}</lastmod>${imageEntries}
  </url>
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
