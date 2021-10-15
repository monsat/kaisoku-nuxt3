import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  buildModules: [
    'nuxt-windicss',
  ],
  windicss: {
    analyze: true
  },

  // linkPrefetchedClass: 'nuxt-link-prefetched',
  router: {
    prefetchLinks: true,
  },
})
