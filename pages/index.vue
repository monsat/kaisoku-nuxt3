<script setup>
import { usePrefetched } from '@/composables/usePrefetched'

usePrefetched()

const pv = ref(0)
pv.value = await $fetch('/api/count')

// useFetch('/api/count').then(res => {
//   pv.value = res.data
//   console.log(res.data)
// })

// const { data } = await useFetch('/api/count')

// console.log(data)

</script>

<template>
  <div>
    <h1>Hello Nuxt 3</h1>
    PV: {{ pv }} fetched by Direct API calls using <a href="https://github.com/unjs/ohmyfetch" target="_blank">$fetch</a>
    <hr>
    <TheCounter />
    <hr>
    <nuxt-link to="study" :prefetch="true">一覧</nuxt-link>
  </div>
</template>
