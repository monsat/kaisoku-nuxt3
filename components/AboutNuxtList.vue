<script setup>
const contentQuery = await queryContent('article').find()
</script>

<template>
  <div>
    <div v-for="article in contentQuery" :key="article._path">
      <NuxtLink :to="article._path">
        <FeatureCard class="mt-4">
          {{article.title}}
        </FeatureCard>
      </NuxtLink>
    </div>
  </div>
</template>