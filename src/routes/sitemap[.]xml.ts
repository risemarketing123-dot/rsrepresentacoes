import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...[
            { path: "/", priority: "1.0" },
            { path: "/produtos", priority: "0.9" },
            { path: "/contato", priority: "0.8" },
          ].flatMap((u) => [
            `  <url>`,
            `    <loc>${BASE_URL}${u.path}</loc>`,
            `    <changefreq>monthly</changefreq>`,
            `    <priority>${u.priority}</priority>`,
            `  </url>`,
          ]),
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
