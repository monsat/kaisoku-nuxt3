import { Ref } from 'vue'
import { PublicRuntimeConfig } from '@/types'

const url = ref('')

const setOgpImageUrl = (title: string, maxLen: number) => {
  const { $config } = useNuxtApp() as unknown as { $config: PublicRuntimeConfig }
  const origin = process.dev ? $config.develop.url : $config.production.url
  const path = '/api/ogp/'
  const filename = encodeURIComponent(title.slice(0, maxLen))
  url.value = `${origin}${path}${filename}.png`
  return url.value
}

export const useOgpImage = (title: string, maxLen = 39) => {
  setOgpImageUrl(title, maxLen)

  return {
    url: readonly(url),
  }
}
