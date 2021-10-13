<script setup>
import { useCounter } from '~/composables/useCounter'

const { data } = await useFetch('/api/count')

console.log(data)

const {
  state: counter,
  dbl,
  increment,
} = useCounter()
</script>

<template>
  <div>
    PV: {{ data.pv }}
    <hr>
    Composable Counter: {{ counter }}（x 2 = {{ dbl }}）<br>
    <button @click="increment">Increment</button>
  </div>
</template>
