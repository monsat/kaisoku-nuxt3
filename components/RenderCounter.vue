<script setup lang="ts">
const { views, generated } = useViews()
</script>

<template>
  <div>
    <TheH2>サーバーサイドのカウンター</TheH2>
    <p>
      Views Count: {{ views }} fetched by <DocDirectApiCalls/> using <DocUseFetch/>
    </p>
    <p>
      サーバー側生成時刻 : {{ generated }}
    </p>
    <BaseInfo>
      このコードはドキュメントのコードをほとんどそのまま利用しています（WIP）
    </BaseInfo>
  </div>
</template>
