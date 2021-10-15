<script setup lang="ts">
import StudyCard from '@/components/StudyCard.vue'
import { usePrefetched } from '@/composables/usePrefetched'
import { useStudyEvent } from '@/composables/useStudyEvent'

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
    <div v-if="events">
      <div>{{ fetched }}</div>
      <LineDivide/>
      <StudyCard :events="events" />
    </div>
    <nuxt-link
      to="/"
      class="text-blue-600 active:text-blue-800 hover:opacity-75 hover:underline"
      :prefetch="true"
    >TOPページ</nuxt-link>
  </div>
</template>