import { $fetch } from 'ohmyfetch'
import { Ref } from "vue"
import { StudyEvent, StudyEventKeys, StudyResult } from '@/types'

const events = ref<StudyEvent[]>([])
const fetchedOn = ref<number | null>(null)
const pickedKeys: Array<Partial<StudyEventKeys>> = [
  'title',
  'event_url',
  'started_at',
  'ended_at',
]

const fetchEvents = (fetchedOn: Ref<number | null>, events: Ref<StudyEvent[]>) => async () => {
  if (fetchedOn.value) {
    console.log('has been fetched')
    return
  }

  const results = await useFetch('/api/study', {
    transform: (res) => {},
    pick: pickedKeys,
  })
  console.log(results)

  // const results = await $fetch<StudyResult>('/api/study')
  //   .catch(err => { throw new Error('API 取得エラー' + err.message) })
  // console.log(results)
  // console.log(results.events.length, results.events[0])
  // events.value = results.events || []
  // fetchedOn.value = results.fetchedOn
}

export const useStudyEvent = () => {
  fetchEvents(fetchedOn, events)

  return {
    events: readonly(events),
    fetchedOn: readonly(fetchedOn),
    fetchEvents: fetchEvents(fetchedOn, events),
  }
}
