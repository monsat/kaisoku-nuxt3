<template>
  <footer>
    <div>
      <slot>
        <BaseNuxtLink/>
      </slot>
    </div>
    <div class="mt-4 text-center">
      <BaseLink href="https://twitter.com/ktanaka">@ktanaka</BaseLink>
      ／
      <BaseLink href="https://www.coworking.tokyo.jp/">コワーキングスペース茅場町 Co-Edo</BaseLink>
    </div>
    <div class="text-right">
      Webサイト最終更新日 : 2021-10-23
    </div>
  </footer>
</template>