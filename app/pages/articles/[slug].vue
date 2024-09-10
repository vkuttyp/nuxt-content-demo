<script setup lang="ts">
import type { Article } from '~/types'

const route = useRoute()

const { data: article } = await useAsyncData(route.path, () => queryContent<Article>(route.path).findOne())
if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found', fatal: true })
}
</script>

<template>
  <UContainer>
    <UPageHeader
      :title="article.title"
      :description="article.description"
    >
      <template #headline>
        <time class="text-gray-500 dark:text-gray-400">{{ new Date(article.date).toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' }) }}</time>
      </template>
    </UPageHeader>

    <UPage>
      <UPageBody prose>
        <ContentRenderer
          v-if="article && article.body"
          :value="article"
        />
      </UPageBody>

      <template #right>
        <UContentToc
          v-if="article.body && article.body.toc"
          :links="article.body.toc.links"
        />
      </template>
    </UPage>
  </UContainer>
</template>
