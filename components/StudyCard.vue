<script setup lang="ts">
import { StudyEvent } from '@/types'
import StudyCardItem from '@/components/StudyCardItem.vue'

interface Props {
  events: StudyEvent[]
}

const props = defineProps<Props>()

</script>

<template>
  <section>
    <h3 class="sm:text-xl text-nuxt-header font-bold"><BaseIcon>👩‍💻</BaseIcon> 勉強会一覧［JavaScript OR TypeScript］</h3>
    <div class="mx-auto py-4">
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
