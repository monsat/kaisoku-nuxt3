<script setup>
import { usePrefetched } from '@/composables/usePrefetched'
import { useStudyEvent } from '@/composables/useStudyEvent'

usePrefetched()

const { events } = useStudyEvent()
</script>

<template>
  <div>
    <div>{{ events }}</div>
    <nuxt-link
      to="/"
      class="text-blue-600 active:text-blue-800 hover:opacity-75 hover:underline"
      :prefetch="true"
    >TOPページ</nuxt-link>
  </div>
</template>