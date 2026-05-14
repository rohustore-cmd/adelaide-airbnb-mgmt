import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/privacy-policy"],
      },
    ],
    sitemap: "https://www.adelaidebnb.au/sitemap.xml",
  };
}
