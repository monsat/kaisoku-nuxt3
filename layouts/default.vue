<template>
  <div class="h-screen p-8 bg-nuxt-lighter">
    <div class="container mx-auto h-full box-border p-8 rounded-lg bg-gray-100 text-gray-700">
      <slot />
    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
