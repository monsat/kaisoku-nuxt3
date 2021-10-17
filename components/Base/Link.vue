<script setup lang="ts">
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
    <slot/>
  </a>
</template>
