<script setup>
import { usePrefetched } from '@/composables/usePrefetched'

usePrefetched()

</script>

<template>
  <div>
    <nuxt-link
      to="/"
      class="text-blue-600 active:text-blue-800 hover:opacity-75 hover:underline"
      :prefetch="true"
    >TOPページ</nuxt-link>
  </div>
</template>