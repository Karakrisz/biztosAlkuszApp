<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const post = ref(null)
const error = ref(null)
const loading = ref(false)

async function fetchPost() {
  loading.value = true
  try {
    const response = await fetch(
      `https://alkuszom.info/api/public/json-posts/${route.params.id}`
    )
    if (!response.ok) throw new Error('Failed to fetch post')
    const data = await response.json()
    post.value = data
  } catch (e) {
    error.value = e.message
    console.error('Error fetching post:', e.message)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchPost()
})
</script>

<template>
  <div class="subpage-blog-content position-relative">
    <div v-if="loading"><h2 class="supage-content__h2 text-transform-uppercase f-500">Loading...</h2></div>
    <div v-else-if="error">
      <h2 class="subpage-blog-content__h2 text-transform-uppercase f-500">{{ error }}</h2>
    </div>
    <div v-else-if="post">
      <h2 class="subpage-blog-content__h2 text-color text-transform-uppercase f-500">{{ post.title }}</h2>
      <NuxtImg
        class="subpage-blog-content__img"
        :src="`https://alkuszom.info/api/public/storage/${post.image}`"
        :alt="post.title"
      />
      <p class="subpage-blog-content__p text-color f-400" v-html="post.body"></p>
    </div>
    <div v-else><h2 class="subpage-blog-content__h2 f-400">No post available.</h2></div>
    <div class="subpage-blog-content__link-box">
      <NuxtLink class="subpage-blog-content__link-box__NuxtLink text-color-w f-600" to="/"
        >Kezdőlap</NuxtLink
      >
    </div>
  </div>
</template>
