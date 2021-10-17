<script setup lang="ts">
import { usePrefetched } from '@/composables/usePrefetched'
import AboutNuxt from '~/components/AboutNuxt.vue';

usePrefetched()
</script>

<template>
  <div>
    <TheH1> Nuxt 3 パブリック Beta リリース 🎉</TheH1>
    <p>
      2021年10月12日（火）の23:00（日本時間）に、待望の
      <BaseLink href="https://nuxtjs.org/announcements/nuxt3-beta/">Nuxt 3 public beta（Nuxt.js 3.0.0-beta）がリリース</BaseLink>
      されました。
    </p>
    <p>
      このサイトは、いち早く Nuxt 3 を理解したい方のために Nuxt 3 を使用して構築したサイトです。
    </p>
    <p>
      Nuxt 3 を使ってどんなことができるか知りたい方は、ぜひゆっくりしていってくださいね🍵
    </p>
    <BaseInfo class="my-8">
      <template #head>当サイトのソースコードは GitHub で確認いただけます</template>
      <p>
        Nuxt 3 は、日々いくつもの修正が行われています。
        このサイトのリポジトリより
        <BaseCode>npm install</BaseCode>
        しても Nuxt 3 の細かいバージョンの違いにより別の動作をする可能性があることをご確認くださいませ。
      </p>
      <p>
        <BaseLink href="https://github.com/monsat/kaisoku-nuxt3" />
      </p>
      <p>
        バグを見つけたという方、よりよいコードを知っているという方は、ぜひともお知らせくださいませ。
      </p>
    </BaseInfo>
    <LineDivide/>
    <AboutNuxt/>
    <LineDivide/>
    <div>
      <TheH2 icon="📆">
        勉強会カレンダー
      </TheH2>
      <p>
        <BaseLink href="https://connpass.com/">connpass API</BaseLink>
        を使用し JavaScript と TypeScript の勉強会情報を取得しています。
      </p>
      <FeatureCard class="my-4 text-center" @click="$router.push('study')">
        勉強会カレンダーのページを表示
      </FeatureCard>
    </div>
    <LineDivide/>
    <RenderCounter/>
    <LineDivide/>
    <TheCounter />
    <LineDivide/>
    <TheFooter>
      <BaseNuxtLink to="study">勉強会一覧</BaseNuxtLink>
    </TheFooter>
  </div>
</template>
