<template>
  <div class="min-h-screen bg-gray-100">

    <div class="max-w-6xl mx-auto grid grid-cols-12 gap-6 mt-6 px-4">
      <!-- Left -->
      <div class="col-span-8 space-y-4 bg-white px-6 mt-6">
        <WritePost />
        <Tabs v-model:activeTab="activeTab" />

        <!-- Conditionally show stuff -->
        <div v-if="activeTab === 'For you'">
          <PostCard v-for="i in 2" :key="'foryou-' + i" />
        </div>
        <div v-else-if="activeTab === 'Following'">
          <p class="text-gray-500">No posts from people you follow yet.</p>
        </div>
        <div v-else-if="activeTab === 'New'">
          <PostCard v-for="i in 2" :key="'new-' + i" />
        </div>
        <div v-else-if="activeTab === 'Trending'">
          <PostCard v-for="i in 3" :key="'trending-' + i" />
        </div>
      </div>

      <!-- Right -->
      <div class="col-span-4 space-y-4">
        <Feeds />
        <RecommendedTopics />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Feeds from "~/components/feeds.vue";
const activeTab = ref("Trending");
</script>
