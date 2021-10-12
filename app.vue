<script setup>
  const { data } = await useAsyncData('count', () => $fetch('/api/count'))
</script>

<template>
  <div>
    Page visits: {{ data }}
  </div>
</template>
