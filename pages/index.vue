<script setup lang="ts">
import { $fetch } from 'ohmyfetch'
import { format } from 'date-fns'
import { usePrefetched } from '@/composables/usePrefetched'
import { RenderCounterReturn } from '@/types'

usePrefetched()

const pv = ref(0)
const generated = ref('')
const {
  counter,
  renderedOn,
} = await $fetch<RenderCounterReturn>('/api/count')
pv.value = counter
generated.value = format(new Date(renderedOn), 'yyyy-MM-dd HH:mm:SS')
</script>

<template>
  <div>
    <h1 class="text-5xl">
      Hello Nuxt 3
    </h1>
    <h2 class="mb-8 text-gray-500 text-xl">
      すばやく Nuxt 3 を理解したいエンジニアのサイト（を作成中）
    </h2>
    <client-only>
      <RenderCounter/>
    </client-only>
    <hr>
    <TheCounter />
    <hr>
    <nuxt-link
      to="study"
      class="text-blue-600 active:text-blue-800 hover:opacity-75 hover:underline"
      :prefetch="true"
    >一覧</nuxt-link>
  </div>
</template>
