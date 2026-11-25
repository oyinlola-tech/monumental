// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://monumental-rouge.vercel.app',
  build: { inlineStylesheets: 'always' },
  integrations: [icon(), sitemap()],
});
