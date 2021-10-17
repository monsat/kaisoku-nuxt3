<script setup lang="ts">
import StudyCard from '@/components/StudyCard.vue'
import { usePrefetched } from '@/composables/usePrefetched'
import { useStudyEvent } from '@/composables/useStudyEvent'
import UseFetch from '~/components/Doc/UseFetch.vue'
import H1 from '~/components/The/H1.vue'

const router = useRouter()

usePrefetched()

const {
  events,
  fetched,
  fetchEvents,
} = useStudyEvent()

const onError = () => router.push('/')
await fetchEvents(onError)
</script>

<template>
  <div>
    <div v-if="events.length > 0">
      <div>
        <TheH1 icon="📆">
          勉強会カレンダー
        </TheH1>
        <p>
          <BaseLink href="https://connpass.com/">connpass API</BaseLink>
          の勉強会情報を Nuxt 3 の <DocUseFetch> `useFetch()` </DocUseFetch> で取得しています。
        </p>
        <p>
          API 取得日時 :
          <client-only>{{ fetched }}</client-only>
        </p>
      </div>
      <LineDivide/>
      <StudyCard :events="events" />
    </div>
  </div>
</template>