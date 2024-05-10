import { defineConfig } from 'astro/config'

import vue from '@astrojs/vue'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/styles/main.scss";
          `,
        },
      },
    },
  },
  integrations: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['swiper-container', 'swiper-slide'].includes(tag),
        },
      },
    }),
  ],
})
