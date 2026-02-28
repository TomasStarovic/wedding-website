import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'sk',
    locales: ['en', 'sk'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
