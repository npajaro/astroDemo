import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";


// la url de acceso a mi repo es https://npajaro.github.io/astroDemo/
// por lo tanto, la base es /astroDemo

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  site: 'https://npajaro.github.io',
  base: '/astroDemo',
});