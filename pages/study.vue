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
        <BaseInfo class="my-8">
          <template #head>
            後日修正
          </template>
          <ul class="list-disc list-inside">
            <li><BaseCode>&lt;client-only&gt;</BaseCode> Component がうまくいかない</li>
            <li>一部 Hydrate に失敗する</li>
          </ul>
        </BaseInfo>
      </div>
      <LineDivide/>
      <StudyCard />
    </div>
  </div>
</template>