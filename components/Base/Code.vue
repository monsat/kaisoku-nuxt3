<script setup lang="ts">
interface Props {
  quote: boolean
}

const props = withDefaults(defineProps<Props>(), {
  quote: true
})
const { quote } = props
</script>

<template>
  <span
    class="p-1 bg-gray-700 text-sky-300 font-mono"
    :class="{ quote }"
  >
    <slot/>
  </span>
</template>

<style scoped>
.quote::before,
.quote::after {
  content: '`'
}
</style>