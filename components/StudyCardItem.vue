<script setup lang="ts">
import { StudyEvent } from '@/types'
import startOfDay from 'date-fns/startOfDay'

interface Props {
  event_id: StudyEvent['event_id']
  title: StudyEvent['title']
  catch: StudyEvent['catch']
  event_url: StudyEvent['event_url']
  started_at: StudyEvent['started_at']
  ended_at: StudyEvent['ended_at']
  description: StudyEvent['description']
  limit: StudyEvent['limit']
  accepted: StudyEvent['accepted']
}

const nuxtApp = useNuxtApp()
const { $format } = nuxtApp
const props = defineProps<Props>()

const isPast = computed(() => startOfDay(new Date) > new Date(props.ended_at))
const startEnd = computed(() => $format(props.started_at, 'HH:mm') + $format(props.ended_at, '〜HH:mm'))

const moveTo = () => {
  window.open(props.event_url, '_blank')
}
</script>

<template>
  <div
    v-if="!isPast"
    class="p-4 md:w-1/2 lg:w-1/3"
  >
    <div
      class="h-full p-4 rounded-xl bg-white shadow hover:(bg-sky-100 shadow-lg cursor-pointer)"
      @click="moveTo"
    >
      <div class="bg-opacity-75 pb-4 overflow-hidden relative">
        <div class="md:flex">
          <StudyCardItemDate :started_at="props.started_at" />
          <h1 class="flex-initial title-font sm:text-xl font-medium mb-3">
            {{ props.title }}
          </h1>
        </div>
        <div>
          <p class="font-bold">
            {{ props.catch }}<br>
          </p>
          <p class="leading-relaxed">
            {{ $stripTags(props.description) }}
          </p>
          <p class="text-right">
            <BaseIcon>🧑‍💻</BaseIcon>
            {{ props.accepted ?? '--' }} / {{ props.limit ?? '--' }}
          </p>
          <p class="text-right">
            <BaseIcon>⏰</BaseIcon>
            {{ startEnd }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
