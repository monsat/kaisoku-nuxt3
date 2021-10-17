<script setup lang="ts">
interface Props {
  to?: string
}

const props = withDefaults(defineProps<Props>(), {
  to: '/'
})
const { to } = props
</script>

<template>
  <NuxtLink
    :to="to"
    class="text-nuxt-dark active:text-nuxt-dark hover:(opacity-75 underline)"
  >
    <slot>快速 Nuxt 3 の TOPページ</slot>
  </NuxtLink>
</template>