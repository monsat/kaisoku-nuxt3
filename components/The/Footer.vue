<template>
  <footer>
    <div>
      <slot>
        <nuxt-link
          to="/"
          class="text-sky-600 active:text-sky-800 hover:(opacity-75 underline)"
          :prefetch="true"
        >
          TOPページ
        </nuxt-link>
      </slot>
    </div>
    <div class="text-center">
      <BaseLink href="https://twitter.com/ktanaka">@ktanaka</BaseLink>
      ／
      <BaseLink href="https://www.coworking.tokyo.jp/">コワーキングスペース茅場町 Co-Edo</BaseLink>
    </div>
  </footer>
</template>