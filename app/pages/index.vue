<script setup lang="ts">
const { data: page } = await useAsyncData('home', () => queryContent('/').findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page"
  />
</template>
