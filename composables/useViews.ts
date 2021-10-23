import { Ref, ComputedRef } from 'vue'
import { RenderCounterReturn } from '@/types'

export interface Views {
  views: Ref<number>
  generated: ComputedRef<string>
}

const generated = (renderedByServer: Ref<string>) => () => {
  const nuxtApp = useNuxtApp()
  renderedByServer.value.length && nuxtApp.$format(renderedByServer.value, 'yyyy-MM-dd HH:mm:SS')
}

const fetchViews = (views: Ref<number>, renderedByServer: Ref<string>) => async () => {
  const { data, refresh, pending } = await useFetch('/api/count', {})
  // const { data } = await useAsyncData('/api/count', () => $fetch('/api/count'), {})
  if (data.value == null) {
    // リロード時など何故か null になる
    await refresh()
  }
  if (data.value != null) {
    // (property) Ref<Pick<unknown, never>>.value: Pick<unknown, never>
    const { counter, renderedOn } = data.value as RenderCounterReturn
    views.value = counter
    renderedByServer.value = renderedOn
  }
}

export const useViews = (): Views => {
  const views = ref(0)
  const renderedByServer = ref('')

  fetchViews(views, renderedByServer)()

  return {
    views: readonly(views),
    generated: computed(generated(renderedByServer)),
  }
}
