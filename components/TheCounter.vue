<script setup>
const {
  state: counter,
  dbl,
  increment,
} = useComposableCounter()
</script>

<template>
  <div>
    <TheH2>
      Composition Function を使用したカウンター
    </TheH2>
    <p>
      Composable Counter: {{ counter }}（x 2 = {{ dbl }}）<br>
    </p>
    <button
      class="py-1 px-4 rounded-lg border-4 bg-red-500 text-gray-100 hover:(border-red-300 bg-red-600) active:(border-red-500 bg-red-800 text-white)"
      @click="increment"
    >Increment</button>
  </div>
</template>