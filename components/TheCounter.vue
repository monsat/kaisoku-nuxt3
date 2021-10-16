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
      class="py-1 px-4 rounded-lg border-4 bg-red-500 text-gray-100 hover:(border-red-300 bg-red-600) active:(border-red-500 bg-red-800 text-white)"
      @click="increment"
    >Increment</button>
  </div>
</template>