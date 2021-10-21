<script setup lang="ts">
useMeta({
  htmlAttr: {
    lang: 'ja',
    prefix: 'og: http://ogp.me/ns#',
  },
  title: '快速 Nuxt 3',
  meta: [
    { hid: 'description', name: 'description', content: 'すばやく Nuxt 3 を理解したいエンジニアのサイト' },
    { hid: 'og:site_name', property: 'og:site_name', content: '快速 Nuxt 3' },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:url', property: 'og:url', content: 'https://kaisoku-nuxt3.netlify.app/' },
    { hid: 'og:title', property: 'og:title', content: '快速 Nuxt 3' },
    { hid: 'og:description', property: 'og:description', content: '共通ディスクリプション' },
    { hid: 'og:image', property: 'og:image', content: 'http://localhost:3333/api/ogp/' }, // @TODO: 変更
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
})
</script>

<template>
  <div>
    <NuxtPage/>
  </div>
</template>
