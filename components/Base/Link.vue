<script setup lang="ts">import { useSlots } from 'vue';

interface Props {
  href: string
}

const props = defineProps<Props>()
const { href } = props
</script>

<template>
  <a
    :href="href"
    target="_blank"
    class="text-sky-600 hover:(bg-nuxt-lighter text-sky-800)"
  >
    <slot>{{ href }}</slot>
  </a>
</template>
