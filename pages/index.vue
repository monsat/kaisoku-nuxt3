<script setup lang="ts">
import { usePrefetched } from '@/composables/usePrefetched'

usePrefetched()
</script>

<template>
  <div>
    <RenderCounter/>
    <LineDivide/>
    <TheCounter />
    <LineDivide/>
    <nuxt-link
      to="study"
      class="text-blue-600 active:text-blue-800 hover:opacity-75 hover:underline"
      :prefetch="true"
    >一覧</nuxt-link>
  </div>
</template>
