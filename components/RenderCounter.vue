<script setup lang="ts">
const { generated, fetchViews } = useViews()
const views = await fetchViews()
</script>

<template>
  <div>
    <TheH2>サーバーサイドのカウンター</TheH2>
    <p>
      Views Count: {{ views.counter }} fetched by <DocDirectApiCalls/> using <DocUseFetch/>
    </p>
    <p>
      サーバー側生成時刻 : {{ generated }}
    </p>
    <BaseInfo>
      このコードは公式ドキュメントのコードをもとに作成しています。<br>
      もっとも簡単にサーバー側のデータを取得する実装例です。
    </BaseInfo>
  </div>
</template>
