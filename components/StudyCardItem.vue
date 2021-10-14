<script setup lang="ts">

interface Props {
  title: string
  catch: string
  event_url: string
  started_at: string
  ended_at: string
  description: string
  hash_tag: string
}

const props = defineProps<Props>()

const desc = computed(() => {
  return props.description.replaceAll(/<.+?>/g, '')
})
</script>

<template>
  <div class="p-4 lg:w-1/3">
    <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
        {{ props.hash_tag }}
      </h2>
      <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
        {{ props.title }}
      </h1>
      <p class="leading-relaxed mb-3">
        {{ props.catch }}<br>
        {{ desc.slice(0, 30) }}
      </p>
      <a
        :href="props.event_url"
        target="_blank"
        class="text-indigo-500 inline-flex items-center"
      >詳細ページ ≫</a>
    </div>
  </div>
</template>
