<script setup lang="ts">
interface Props {
  icon?: string
}

const props = withDefaults(defineProps<Props>(), {
  icon: ''
})
</script>

<template>
  <h2 class="sm:text-xl text-nuxt-header font-bold">
    <BaseIcon v-if="props.icon.length !== 0" v-text="props.icon" />
    <slot/>
  </h2>
</template>
