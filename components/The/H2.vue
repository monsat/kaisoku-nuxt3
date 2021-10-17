<script setup lang="ts">
interface Props {
  icon?: string
}

const props = withDefaults(defineProps<Props>(), {
  icon: ''
})
const { icon } = props
</script>

<template>
  <h2 class="sm:text-xl text-nuxt-header font-bold">
    <BaseIcon v-if="icon.length !== 0" v-text="icon" />
    <slot/>
  </h2>
</template>
