import { Ref } from "vue"
import { createSharedComposable } from '@vueuse/core'

export interface Prefetched {
  path: string
}

export const add = (prefetched: Ref<Prefetched[]>) => () => {
  const { path } = useRoute()
  if (!prefetched.value.some(p => p.path === path)) {
    prefetched.value.push({ path })
    console.log(path, ':', prefetched.value.map(p => p.path).join(' & '))
  }
}

export const useSharedPrefetched = () => {
  const prefetched = ref<Prefetched[]>([])

  return {
    prefetched: readonly(prefetched),
    add: add(prefetched),
  }
}

export const usePrefetched = createSharedComposable(useSharedPrefetched)
