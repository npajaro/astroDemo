// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export const BASE_URL = '/astroDemo';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://npajaro.github.io', 
  base: '/astroDemo', 
});