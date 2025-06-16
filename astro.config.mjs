import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import staticAdapter from '@astrojs/adapter-static';
// https://astro.build/config
export default defineConfig({

  site: 'https://ckxzxc.github.io',
  base: '/measure-by-measure',


  adapter: staticAdapter(),
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['../../sanity.config.ts'],
    },
  },

  integrations: [
    sanity({
      projectId: 'n13ym9gs',
      dataset: 'production',
      // Set useCdn to false if you're building statically.
      useCdn: false,
      studioBasePath: '/admin',

    }), 
    react()
  ]
});