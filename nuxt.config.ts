import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  buildModules: [
    'nuxt-windicss',
  ],
  windicss: {
    analyze: true
  },

  components: true,
  // linkPrefetchedClass: 'nuxt-link-prefetched',
  router: {
    prefetchLinks: true,
  },
})
