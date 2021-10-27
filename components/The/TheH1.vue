<script setup lang="ts">
interface Props {
  icon?: string
}

const props = withDefaults(defineProps<Props>(), {
  icon: ''
})
</script>

<template>
  <h1 class="-mx-8 mb-4 px-8 sm:mb-8 border-b-2 border-b-nuxt-lighter text-nuxt-dark sm:text-xl font-bold">
    <BaseIcon v-if="props.icon.length !== 0" v-text="props.icon" />
    <slot/>
  </h1>
</template>
