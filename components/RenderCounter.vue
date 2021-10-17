<script setup lang="ts">
import { useViews } from '@/composables/useViews'
import UseFetch from './Doc/UseFetch.vue';
import DirectApiCalls from './Doc/DirectApiCalls.vue';

const { views, generated } = useViews()
</script>

<template>
  <div>
    <TheH2>サーバーサイドのカウンター</TheH2>
    <p>
    Views Count: {{ views }} fetched by <DirectApiCalls/> using <UseFetch/>
    </p>
    <p>
    サーバー側生成時刻 : {{ generated }}
    </p>
    <BaseInfo>
      このコードはドキュメントのコードをほとんどそのまま利用しています（WIP）
    </BaseInfo>
  </div>
</template>
