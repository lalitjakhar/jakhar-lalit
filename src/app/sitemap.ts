import type { MetadataRoute } from "next";
import { SITE_UPDATED } from "@/data/seo";
import {
  SITE_URL,
  getAllIndexableImages,
  toAbsoluteImageUrl,
} from "@/data/siteImages";

export default function sitemap(): MetadataRoute.Sitemap {
  const images = getAllIndexableImages().map((image) =>
    toAbsoluteImageUrl(image.src)
  );

  return [
    {
      url: SITE_URL,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 1,
      images,
    },
  ];
}
