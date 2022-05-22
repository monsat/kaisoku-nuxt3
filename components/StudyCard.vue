<script setup lang="ts">
import { Ref } from 'vue'
import { StudyEvent } from '@/types'

interface StudyReturn {
  events: StudyEvent[]
}

const { fetchEvents } = useStudyEvent()

const onError = () => navigateTo('/')
const data = (await fetchEvents(onError)) as Ref<StudyReturn>
</script>

<template>
  <section>
    <TheH2 icon="👩‍💻"> 勉強会一覧［JavaScript OR TypeScript］</TheH2>
    <div class="mx-auto py-4">
      <div class="flex flex-wrap -m-4">
        <StudyCardItem
          v-for="event in data.events"
          :key="event.event_id"
          :event_id="event.event_id"
          :title="event.title"
          :catch="event.catch"
          :event_url="event.event_url"
          :started_at="event.started_at"
          :ended_at="event.ended_at"
          :description="event.description"
          :limit="event.limit"
          :accepted="event.accepted"
        />
      </div>
    </div>
  </section>
</template>
