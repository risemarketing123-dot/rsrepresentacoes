import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://rsrepresentacoes.vercel.app";

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
            { path: "/catalogo", priority: "0.8" },
            { path: "/sobre", priority: "0.7" },
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
