<script setup lang="ts">
import { StudyEvent } from '@/types'
import { format } from 'date-fns'
import ja from 'date-fns/locale/ja/index.js'

interface Props {
  started_at: StudyEvent['started_at']
}

const props = defineProps<Props>()
const dateStart: Date = new Date(props.started_at)

const mm = computed(() => format(dateStart, 'MM月', { locale: ja }))
const dd = computed(() => format(dateStart, 'dd', { locale: ja }))
const dayJp = computed(() => format(dateStart, '（E）', {locale: ja}))
</script>

<template>
  <div class="flex-none block rounded-t overflow-hidden text-center w-16 mr-2 mb-3 md:mb-0">
    <div class="bg-red-400 text-white py-1">
      {{ mm }}
    </div>
    <div class="pt-1 border-l border-r bg-white">
      <span class="text-xl font-bold">{{ dd }}</span>
    </div>
    <div class="pb-1 px-2 border-l border-r border-b rounded-b bg-white">
      <span class="text-xs font-bold">{{ dayJp }}</span>
    </div>
  </div>
</template>
