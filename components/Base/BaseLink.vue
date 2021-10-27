<script setup lang="ts">import { useSlots } from 'vue';

interface Props {
  href: string
}

const props = defineProps<Props>()
</script>

<template>
  <a
    :href="props.href"
    target="_blank"
    class="text-sky-600 hover:(bg-nuxt-lighter text-sky-800)"
  >
    <slot>{{ props.href }}</slot>
  </a>
</template>
