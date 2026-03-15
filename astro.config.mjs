import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://cesaralvizo.github.io',
  base: '/qr-code-component/',
  integrations: [tailwind()]
});