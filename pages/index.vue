<script setup>
// import { useFetch } from "#app"

const pv = ref(0)
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
    PV: {{ pv }} does not work ...
    <hr>
    <TheCounter />
  </div>
</template>
