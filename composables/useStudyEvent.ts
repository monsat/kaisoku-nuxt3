import { Ref } from "vue"
import { StudyEvent, StudyResult } from '@/types'
import { format } from 'date-fns'
import ja from 'date-fns/locale/ja/index.js'

const events = ref<StudyEvent[]>([])
const fetchedOn = ref<number | null>(null)

const fetched = (fetchedOn: Ref<number | null>) => () => fetchedOn.value && format(fetchedOn.value, 'yyyy-MM-dd HH:mm:SS', { locale: ja })

const fetchEvents = (fetchedOn: Ref<number | null>, events: Ref<StudyEvent[]>) => async (onError: () => {}) => {
  if (fetchedOn.value) {
    console.log('has been fetched')
    return
  }

  const { data, refresh } = await useFetch('/api/study')

  const study = data as unknown as Ref<StudyResult>

  if (!study?.value) {
    // await refresh()
    if (!study?.value) {
      return onError()
    }
  }

  fetchedOn.value = study.value.fetchedOn
  events.value = study.value.events
}

export const useStudyEvent = () => {
  fetchEvents(fetchedOn, events)

  return {
    events: readonly(events),
    fetchedOn: readonly(fetchedOn),
    fetched: computed(fetched(fetchedOn)),
    fetchEvents: fetchEvents(fetchedOn, events),
  }
}
