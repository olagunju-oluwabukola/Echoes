<!-- <template>
  <div class="max-w-6xl mx-auto px-4 py-10">
    <h1 class="text-4xl font-bold mb-8 text-center">Latest Posts</h1>
    <div v-if="loading" class="text-center text-gray-500">Loading posts...</div>
    <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div v-for="post in posts" :key="post.id" class="bg-white shadow rounded-lg p-5 hover:shadow-lg transition">
        <h2 class="text-xl font-semibold mb-2">{{ post.title }}</h2>
        <p class="text-gray-600 mb-4">{{ post.excerpt }}</p>
        <NuxtLink :to="`/post/${post.id}`" class="text-blue-500 hover:underline">Read More →</NuxtLink>
      </div>
    </div>

    <div v-if="!loading && posts.length === 0" class="text-center text-gray-500 mt-8">
      No posts yet. Check back soon!
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../plugins/firebase.client";

const posts = ref<any[]>([]);
const loading = ref(true);

onMounted(async () => {
  try {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"), limit(6));
    const snapshot = await getDocs(q);
    posts.value = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error loading posts:", error);
  } finally {
    loading.value = false;
  }
});
</script> -->


<template>
  <h1 class="text-white">Index page is working 🎉</h1>
</template>
