<script setup>
import { useCounterByPinia } from '@/stores/counterByPinia'

const counter = useCounterByPinia()

const increment = async () => {
  await counter.increment()
  console.log('Pinia updates count')
}
</script>

<template>
  <div>
    <TheH2>
      Pinia を使用したカウンター
    </TheH2>
    <p>
      Pinia Counter: {{ counter.n }}（x 2 = {{ counter.doubled }}）<br>
    </p>
    <button
      class="py-1 px-4 rounded-lg border-4 bg-red-500 text-gray-100 hover:(border-red-300 bg-red-600) active:(border-red-500 bg-red-800 text-white)"
      @click="increment"
    >Increment</button>
  </div>
</template>