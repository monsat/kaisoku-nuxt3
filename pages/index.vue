<script setup>
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
    <h1>Hello Nuxt 3</h1>
    PV: {{ pv }} fetched by Direct API calls using
    <a href="https://github.com/unjs/ohmyfetch" target="_blank">$fetch</a><br>
    サーバー側生成時刻 : {{ generated }}
    <hr>
    <TheCounter />
    <hr>
    <nuxt-link to="study" :prefetch="true">一覧</nuxt-link>
  </div>
</template>
