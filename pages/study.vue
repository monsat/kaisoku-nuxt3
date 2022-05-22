<script setup lang="ts">
usePrefetched().add()

const title = 'Nuxt 3 の useFetch で connpass の勉強会情報を取得する'
</script>

<template>
  <div>
    <Head>
      <Title>{{ title }} - {{ $config.site.name }}</Title>
      <Meta hid="og:title" property="og:title" :content="title" />
    </Head>
    <div>
      <div>
        <TheH1 icon="📆">
          勉強会カレンダー
        </TheH1>
        <p>
          <BaseLink href="https://connpass.com/">connpass API</BaseLink>
          の勉強会情報を Nuxt 3 の <DocUseFetch/> で取得しています。
        </p>
      </div>
      <LineDivide/>
      <StudyCard />
    </div>
  </div>
</template>