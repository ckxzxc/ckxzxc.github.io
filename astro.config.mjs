import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({

  site: 'https://ckxzxc.github.io',
  base: '/measure-by-measure',

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
    },
  },
});