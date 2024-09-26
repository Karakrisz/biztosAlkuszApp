<script setup lang="ts">
import { useAsyncData, useRoute, useRuntimeConfig } from '#app'

interface Post {
  id: number
  title: string
  slug: string
  body: string
  image: string
}

const config = useRuntimeConfig()

const route = useRoute()

const { data: post, error } = await useAsyncData<Post>('post', () =>
  $fetch(`${config.public.apiBaseUrl}/json-posts/${route.params.slug}`)
)
</script>

<template>
  <div class="subpage-blog-content position-relative">
    <div v-if="error">Hiba történt: {{ error.message }}</div>
    <div v-else-if="!post">Betöltés...</div>
    <div v-else>
      <h2 class="slug-blog__h2">{{ post.title }}</h2>
      <img
        class="slug-blog__img"
        :src="`${config.public.apiBaseUrl}/storage/${post.image}`"
        :alt="post.title"
      />
      <div v-html="post.body"></div>
    </div>
    <NuxtLink to="/" class="go-back-button">
      <span class="go-back-button__icon">&#8592;</span>
      <span class="go-back-button__text">Vissza a főoldalra</span>
    </NuxtLink>
  </div>
</template>
