<script setup lang="ts">
import { $fetch } from 'ohmyfetch'
import { format } from 'date-fns'
import { RenderCounterReturn } from '@/types'

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
    PV: {{ pv }} fetched by Direct API calls using
    <a href="https://github.com/unjs/ohmyfetch" target="_blank">$fetch</a><br>
    サーバー側生成時刻 : {{ generated }}
  </div>
</template>
