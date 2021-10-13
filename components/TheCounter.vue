<script setup>
import { useCounter } from '@/composables/useCounter'

const {
  state: counter,
  dbl,
  increment,
} = useCounter()
</script>

<template>
  <div>
    Composable Counter: {{ counter }}（x 2 = {{ dbl }}）<br>
    <button @click="increment">Increment</button>
    <hr>
    by Component
  </div>
</template>