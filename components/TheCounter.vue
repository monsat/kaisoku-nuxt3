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
    <button
      class="py-1 px-4 rounded-lg border-4 hover:border-red-300 active:border-red-500 bg-red-500 hover:bg-red-600 active:bg-red-800 text-gray-100 active:text-white"
      @click="increment"
    >Increment</button>
    <hr>
    by Component
  </div>
</template>