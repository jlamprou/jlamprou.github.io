import type { APIRoute } from "astro"

const robotsTxt = `
User-agent: *
Allow: /

# Preferred domain (for SEO tools)
Host: https://jlamprou.github.io

# Sitemaps
Sitemap: ${new URL("sitemap-index.xml", import.meta.env.SITE).href}

# Humans
# More about this site and researcher
# https://jlamprou.github.io/humans.txt
`.trim()

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}