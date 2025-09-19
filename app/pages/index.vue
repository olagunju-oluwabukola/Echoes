<template>
  <div class="min-h-screen  bg-gray-100">
    <div class="md:max-w-6xl mx-auto grid md:grid-cols-12 gap-6 mt-6 px-4">
      <!-- Left -->
      <div class="col-span-12 md:col-span-8 space-y-4 bg-white px-6 mt-6">
        <WritePost />
        <Tabs v-model:activeTab="activeTab" />

        <!-- Conditionally show posts -->
        <div v-if="activeTab === 'For you'">
          <PostCard
            v-for="post in getPostsByTab('For you')"
            :key="'foryou-' + post.id"
            :post="post"
          />
        </div>
        <div v-else-if="activeTab === 'Following'">
          <p class="text-gray-500 text-center py-8">No posts from people you follow yet.</p>
        </div>
        <div v-else-if="activeTab === 'New'">
          <PostCard
            v-for="post in getPostsByTab('New')"
            :key="'new-' + post.id"
            :post="post"
          />
        </div>
        <div v-else-if="activeTab === 'Trending'">
          <PostCard
            v-for="post in getPostsByTab('Trending')"
            :key="'trending-' + post.id"
            :post="post"
          />
        </div>
      </div>

      <!-- Right -->
      <div class="col-span-12 md:col-span-4 ">
        <Feeds />
        <RecommendedTopics />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import Feeds from "~/components/feeds.vue"
import { usePosts } from "../composables/usePost"

const activeTab = ref("Trending")
const { getPostsByTab } = usePosts()
</script>
