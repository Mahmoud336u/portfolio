import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const configuredSite = process.env.SITE_URL?.trim();
let site;
if (configuredSite) {
  const url = new URL(configuredSite);
  if (url.protocol !== 'https:' || url.username || url.password || url.pathname !== '/' || url.search || url.hash) {
    throw new Error('SITE_URL must be a public HTTPS origin without credentials, a path, query, or fragment.');
  }
  if (/^(localhost|127\.0\.0\.1)$|(^|\.)example\.(com|org|net)$|\.(invalid|test|localhost)$/.test(url.hostname)) {
    throw new Error('SITE_URL must be the real deployment origin, not a placeholder.');
  }
  site = url.origin;
}

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  integrations: site ? [sitemap()] : [],
  vite: { plugins: [tailwindcss()] },
});
