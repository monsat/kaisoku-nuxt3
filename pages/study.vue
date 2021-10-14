<script setup lang="ts">
import { Ref } from "vue"
import StudyCard from '@/components/StudyCard.vue'
import { usePrefetched } from '@/composables/usePrefetched'
// import { useStudyEvent } from '@/composables/useStudyEvent'
import { StudyEvent, StudyEventKeys, StudyResult } from '@/types'
import { format } from 'date-fns'

usePrefetched()

// const { events } = useStudyEvent()

const results = await useFetch('/api/study')

const study = results.data as unknown as Ref<StudyResult>

const fetched = computed(() => study?.value && format(study.value.fetchedOn, 'yyyy-MM-dd HH:mm:SS'))
console.log(fetched.value)
console.dir({ ...study.value.events[0] })

</script>

<template>
  <div>
    <div v-if="study">
      <div>{{ fetched }}</div>
      <LineDivide/>
      <StudyCard :events="study.events" />
    </div>
    <nuxt-link
      to="/"
      class="text-blue-600 active:text-blue-800 hover:opacity-75 hover:underline"
      :prefetch="true"
    >TOPページ</nuxt-link>
  </div>
</template>