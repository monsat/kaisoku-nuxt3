<script setup lang="ts">
import StudyCard from '@/components/StudyCard.vue'
import { usePrefetched } from '@/composables/usePrefetched'
import { useStudyEvent } from '@/composables/useStudyEvent'
import UseFetch from '~/components/Doc/UseFetch.vue'

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
        <h1 class="-mx-8 mb-4 px-8 sm:mb-8 border-b-2 border-b-nuxt-lighter text-nuxt-dark sm:text-xl font-bold">
          <BaseIcon>📆</BaseIcon>
          勉強会カレンダー
        </h1>
        <h3>
          <BaseLink href="https://connpass.com/">connpass API</BaseLink>
          の勉強会情報を Nuxt 3 の <DocUseFetch> `useFetch()` </DocUseFetch> で取得しています。
        </h3>
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