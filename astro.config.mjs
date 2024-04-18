import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@assets/styles/_mixins.scss";
            @import "@assets/styles/_variables.scss";
            @import "@assets/styles/main.scss";
          `
        }
      }
    }
  }
});
