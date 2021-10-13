import { $fetch } from 'ohmyfetch'
import { Ref } from "vue"
import { StudyEvent, StudyResult } from '@/types'

const events = ref<StudyEvent[]>([])
const fetchedOn = ref<number | null>(null)

const fetchEvents = (fetchedOn: Ref<number | null>, events: Ref<StudyEvent[]>) => async () => {
  if (fetchedOn.value) {
    console.log('has been fetched')
    return
  }

  const results = await $fetch<StudyResult>('/api/study')
    .catch(err => { throw new Error('API 取得エラー' + err.message) })
  console.log(results)
  console.log(results.events.length, results.events[0])
  events.value = results.events || []
  fetchedOn.value = results.fetchedOn
}

export const useStudyEvent = () => {
  onBeforeMount(fetchEvents(fetchedOn, events))

  return {
    events: readonly(events),
    fetchedOn: readonly(fetchedOn),
    fetchEvents: fetchEvents(fetchedOn, events),
  }
}
