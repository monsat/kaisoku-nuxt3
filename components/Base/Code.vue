<script setup lang="ts">
interface Props {
  quote?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  quote: true
})
const { quote } = props
</script>

<template>
  <span
    class="base-style p-1 bg-gray-700 text-sky-300 font-mono"
    :class="{ quote }"
  >
    <slot/>
  </span>
</template>

<style scoped>
.base-style {
  font-size: 90%;
  white-space: nowrap;
}
.quote::before,
.quote::after {
  content: '`';
}
</style>