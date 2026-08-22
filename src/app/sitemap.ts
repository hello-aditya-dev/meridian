import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { caseStudies } from "@/lib/stories";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/platform",
    "/solutions",
    "/industries",
    "/features",
    "/integrations",
    "/security",
    "/customers",
    "/pricing",
    "/resources",
    "/blog",
    "/about",
    "/contact",
    "/legal/terms",
    "/legal/privacy",
  ];

  const now = new Date();

  return [
    ...routes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...caseStudies.map((cs) => ({
      url: `${siteUrl}/customers/${cs.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
