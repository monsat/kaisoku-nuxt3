<script setup lang="ts">
import { StudyEvent } from '@/types'
import { format, startOfDay } from 'date-fns'
import ja from 'date-fns/locale/ja/index.js'

interface Props {
  title: string
  catch: string
  event_url: string
  started_at: string
  ended_at: string
  description: string
  hash_tag: string
  startJp: StudyEvent['startJp']
  startEnd: StudyEvent['startEnd']
}

const props = defineProps<Props>()

const desc = computed((maxLen = 64) => {
  const result = `${props.description}`.replace(/(<([^>]+)>)/gi, '').slice(0, maxLen + 1)
  return result.length > maxLen ? `${result.slice(0, maxLen)}…` : result
})

const isPast = computed(() => startOfDay(new Date) > new Date(props.ended_at))
</script>

<template>
  <div
    v-if="!isPast"
    class="p-4 md:w-1/2 lg:w-1/3"
  >
    <div class="h-full p-4 rounded-xl bg-white shadow">
      <div class="bg-opacity-75 pb-4 overflow-hidden relative">
        <div class="md:flex">
          <StudyCardItemDate :startJp="props.startJp" />
          <h1 class="flex-initial title-font text-xl font-medium text-gray-900 mb-3">
            {{ props.title }}
          </h1>
        </div>
        <div>
          <p class="leading-relaxed">
            {{ props.catch }}<br>
            {{ desc }}
          </p>
          <p>
            {{ props.startEnd }}
          </p>
          <p class="text-right">
            <a
              :href="props.event_url"
              target="_blank"
              class="text-indigo-500 inline-flex items-center"
            >詳細ページ ≫</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
