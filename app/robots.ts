import type { MetadataRoute } from "next";

const siteUrl = "https://enfants-deportes-1939-1945.fdhrddsveg.chatgpt.site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: siteUrl + "/sitemap.xml",
    host: siteUrl,
  };
}
