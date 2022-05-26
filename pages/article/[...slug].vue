<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <TheH1>
        {{ doc.title }}
      </TheH1>
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </main>
</template>