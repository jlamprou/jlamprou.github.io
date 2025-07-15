import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"

// https://astro.build/config
export default defineConfig({
  site: "https://jlamprou.github.io",
  integrations: [
    mdx(), 
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      entryLimit: 10000,
      // Custom entries for specific pages
      customPages: [
        'https://jlamprou.github.io/',
        'https://jlamprou.github.io/work/',
        'https://jlamprou.github.io/projects/',
        'https://jlamprou.github.io/search/',
      ],
      // Custom function to determine priority and changefreq for different page types
      serialize(item) {
        if (item.url === 'https://jlamprou.github.io/') {
          return {
            ...item,
            changefreq: 'monthly',
            priority: 1.0,
            lastmod: new Date()
          }
        }
        if (item.url.includes('/projects/')) {
          return {
            ...item,
            changefreq: 'yearly',
            priority: 0.9,
            lastmod: new Date()
          }
        }
        if (item.url.includes('/work/')) {
          return {
            ...item,
            changefreq: 'yearly',
            priority: 0.8,
            lastmod: new Date()
          }
        }
        return item
      }
    }), 
    solidJs(), 
    tailwind({ applyBaseStyles: false })
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true
    }
  }
})