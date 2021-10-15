<script setup lang="ts">
import { useViews } from '@/composables/useViews'

const { views, generated } = useViews()
</script>

<template>
  <div>
    PV: {{ views }} fetched by Direct API calls using
    <a href="https://github.com/unjs/ohmyfetch" target="_blank">$fetch</a><br>
    サーバー側生成時刻 : {{ generated }}
  </div>
</template>
