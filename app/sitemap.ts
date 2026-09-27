import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://emberandfig.example";
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/menu`, lastModified: new Date() },
    { url: `${base}/reservations`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
  ];
}
