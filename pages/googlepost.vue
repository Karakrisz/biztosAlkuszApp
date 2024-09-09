<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Post {
  id: number
  title: string
  body: string
  image: string
}

const itemsPost = ref<Post[] | null>(null)
const error = ref<string | null>(null)
const loading = ref(false)

async function fetchPosts() {
  loading.value = true
  try {
    const response = await fetch('https://alkuszom.info/api/public/json-posts')
    if (!response.ok) throw new Error('Failed to fetch posts')
    const data = await response.json()
    itemsPost.value = data
  } catch (e) {
    error.value = (e as Error).message
    console.error('Error fetching posts:', (e as Error).message)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchPosts()
})
</script>

<template>
  <section>
    <div class="google-hide-blog d-flex">
      <div v-for="post in itemsPost" :key="post.id">
        <h3 class="blog-box__text__h3 text-transform-uppercase">
          {{ post.title }}
        </h3>
        <p class="blog-box__text__p" v-html="post.body" />
      </div>
    </div>
  </section>
</template>
