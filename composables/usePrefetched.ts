import { Ref } from "vue"

export interface Prefetched {
  url: string
}

const prefetched = ref<Prefetched[]>([])
export const pushPrefetched = (prefetchedPages: Ref<Prefetched[]>) => (page: string) => {
  if (!prefetched.value.some(p => p.url === page)) {
    console.log(page, ':', prefetched.value.map(p => p.url).join(' & '))
    prefetched.value.push({ url: page })
  }
}

export const usePrefetched = () => {
  const add = pushPrefetched(prefetched)
  
  onMounted(() => {
    const route = useRoute()
    add(route.path)
  })

  return {
    prefetched: readonly(prefetched),
    add,
  }
}
