import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
  const baseUrl = 'https://is-my-regex-safe.zininalx.com';
  const currentDate = new Date().toISOString().split('T')[0];

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}/</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>${baseUrl}/check</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
    </urlset>
  `;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=3600', // Cache for 1 hour
    },
  });
};
