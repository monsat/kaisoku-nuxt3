import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],

  // linkPrefetchedClass: 'nuxt-link-prefetched',
  router: {
    prefetchLinks: true,
  },
})
