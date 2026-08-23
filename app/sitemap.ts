import type { MetadataRoute } from "next";
import { portraits } from "../data/portraits";

const siteUrl = "https://enfants-deportes-1939-1945.fdhrddsveg.chatgpt.site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: siteUrl + "/galerie",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...portraits.map((portrait) => ({
      url: siteUrl + "/portraits/" + portrait.slug,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
