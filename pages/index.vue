<script setup lang="ts">
import { usePrefetched } from '@/composables/usePrefetched'

usePrefetched()
</script>

<template>
  <div>
    <h1 class="pl-8 sm:pl-14 text-xl sm:text-5xl font-bold sm:font-extrabold">
      快速 Nuxt 3
    </h1>
    <h2 class="mb-4 sm:mb-8 text-gray-500 sm:text-xl font-bold">
      すばやく Nuxt 3 を理解したいエンジニアのサイト（を作成中）
    </h2>
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

<style scoped>
h1 {
  background-image: url('@/assets/images/nuxt-colored-logo.png');
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
}
</style>