<template>
  <div>
    <TheH2>
      Nuxt 3 について
    </TheH2>
    <p>
      <BaseLink href="https://nuxtjs.org/">Nuxt</BaseLink> は <BaseLink href="https://v3.ja.vuejs.org/">Vue.js</BaseLink> をベースに開発された、フロントエンド開発者・ Web アプリケーションの開発者が高速で高機能な Web サイトの構築を可能にするフレームワークです。
    </p>
    <p>
      CoC（設定より規約）の考え方にもとづき、最小限の設定のみで、多数のベストプラクティスな実装による機能により、豊かな開発体験が得られます。
    </p>
    <p class="mb-8">
      Vue.js 単体での開発では少なからず時間の要する、 SSR や ルーティングといったアプリケーション開発に欠かせない機能を、網羅的に提供しているのが Nuxt です。
    </p>
    <TheH2>
      Nuxt 3 の特徴
    </TheH2>
    <ContentList path="/article" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <FeatureCard class="mt-4">
          {{article.title}}
        </FeatureCard>
      </div>
    </ContentList>
  </div>
</template>