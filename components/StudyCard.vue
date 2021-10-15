<script setup lang="ts">
import { StudyEvent } from '@/types'
import StudyCardItem from '@/components/StudyCardItem.vue'

interface Props {
  events: StudyEvent[]
}

const props = defineProps<Props>()

</script>

<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <StudyCardItem
          v-for="(event, i) in props.events"
          :key="i"
          v-bind="event"
        />
      </div>
    </div>
  </section>
</template>
