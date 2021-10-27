import { Ref } from 'vue'

const generated = (renderedByServer: Ref<string>) => () => {
  const nuxtApp = useNuxtApp()
  return renderedByServer.value.length ? nuxtApp.$format(renderedByServer.value, 'yyyy-MM-dd HH:mm:SS') : ''
}

const fetchViews = (renderedByServer: Ref<string>) => async () => {
  const { data } = await useFetch('/api/count', {})

  const { renderedOn } = data.value
  renderedByServer.value = (new Date(renderedOn)).toLocaleDateString()

  return data
}

export const useViews = () => {
  const renderedByServer = ref('')

  onMounted(() => fetchViews(renderedByServer)())

  return {
    generated: computed(generated(renderedByServer)),
    fetchViews: fetchViews(renderedByServer),
  }
}
