import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@assets/styles/main.scss";
          `,
        },
      },
    },
  },
})
