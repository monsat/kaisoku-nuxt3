<script setup lang="ts">
import { useViews } from '@/composables/useViews'

const { views, generated } = useViews()
</script>

<template>
  <div>
    PV: {{ views }} fetched by Direct API calls using
    `useFetch()`<br>
    サーバー側生成時刻 : {{ generated }}
  </div>
</template>
