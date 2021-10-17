<script setup lang="ts">
import { StudyEvent } from '@/types'

interface Props {
  startJp: StudyEvent['startJp']
}

const props = defineProps<Props>()

const { mm, dd, dayJp } = props.startJp
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
