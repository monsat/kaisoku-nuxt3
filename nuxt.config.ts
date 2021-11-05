import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  build: {
    transpile: [
      'canvas',
      'date-fns',
      '@vueuse/core',
    ],
  },
  buildModules: [
    '@vueuse/core/nuxt',
    'nuxt-windicss',
    '@pinia/nuxt',
  ],
  windicss: {
    analyze: true
  },

  publicRuntimeConfig: {
    site: {
      name: '快速 Nuxt 3',
    },
    develop: {
      url: `http://localhost:${ process.env.PORT || 3000 }`,
    },
    production: {
      url: 'https://kaisoku-nuxt3.netlify.app',
    },
  },
})
