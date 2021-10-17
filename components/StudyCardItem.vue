<script setup lang="ts">
import { StudyEvent } from '@/types'
import { format, startOfDay } from 'date-fns'
import ja from 'date-fns/locale/ja'

interface Props {
  title: string
  catch: string
  event_url: string
  started_at: string
  ended_at: string
  description: string
  hash_tag: string
}

const props = defineProps<Props>()

const desc = computed((maxLen = 64) => {
  const div = document.createElement('div')
  div.innerHTML = `${props.description}`
  const result = div.innerText.slice(0, maxLen + 1)
  return result.length > maxLen ? `${result.slice(0, maxLen)}…` : result
})

const isPast = computed(() => startOfDay(new Date) > new Date(props.ended_at))
const startEnd = computed(() => `${format(new Date(props.started_at), 'HH:mm')}〜${format(new Date(props.ended_at), 'HH:mm')}`)
</script>

<template>
  <div
    v-if="!isPast"
    class="p-4 md:w-1/2 lg:w-1/3"
  >
    <div class="h-full p-4 rounded-xl bg-white shadow">
      <div class="bg-opacity-75 pb-4 rounded-lg overflow-hidden relative">
        <div class="md:flex">
          <StudyCardItemDate :started_at="props.started_at" />
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
            {{ startEnd }}
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
