import { defineNuxtPlugin, useState } from '#app'
import { useViews } from '@/composables/useViews'

export default defineNuxtPlugin((nuxt) => {
  useState('useViews', () => useViews())
})
