import { Ref } from 'vue'
import { format } from 'date-fns'
import { RenderCounterReturn } from '@/types'

const generated = (renderedByServer: Ref<string>) => () => renderedByServer.value.length && format(new Date(renderedByServer.value), 'yyyy-MM-dd HH:mm:SS')

const fetchViews = (views: Ref<number>, renderedByServer: Ref<string>) => async () => {
  console.log(views.value)
  const {
    counter,
    renderedOn,
  } = await $fetch<RenderCounterReturn>('/api/count')
  console.log(counter)
  views.value = counter
  renderedByServer.value = renderedOn
}

export const useViews = () => {
  const views = ref(0)
  const renderedByServer = ref('')

  fetchViews(views, renderedByServer)()

  return {
    views: readonly(views),
    generated: computed(generated(renderedByServer)),
  }
}
