<script setup lang="ts">
usePrefetched().add()

const title = 'Nuxt 3 の useFetch で connpass の勉強会情報を取得する'
const { url: ogpImageUrl } = useOgpImage(title)
</script>

<template>
  <div>
    <Head>
      <Title>{{ title }} - {{ $config.site.name }}</Title>
      <Meta hid="og:title" property="og:title" :content="title" />
      <Meta hid="og:image" property="og:image" :content="ogpImageUrl" />
    </Head>
    <div>
      <div>
        <TheH1 icon="📆">
          勉強会カレンダー
        </TheH1>
        <p>
          <BaseLink href="https://connpass.com/">connpass API</BaseLink>
          の勉強会情報を Nuxt 3 の <DocUseFetch> `useFetch()` </DocUseFetch> で取得しています。
        </p>
        <BaseInfo class="my-8">
          <template #head>
            後日修正
          </template>
          <ul class="list-disc list-inside">
            <li>直接このページにアクセスするとデータ取得がうまくいかない（このページをリロードすると 500 エラーになります）</li>
            <li>一回目の取得時に <BaseCode :quote="false">null</BaseCode> のまま画面描画が行われるので <BaseCode>refresh()</BaseCode> して回避している</li>
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