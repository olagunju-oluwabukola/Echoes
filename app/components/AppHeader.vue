<template>
  <div>
    <!-- Header -->
    <header class="flex items-center justify-between  px-4 md:px-20 py-4 bg-white">
      <!-- Logo -->
      <div class="text-3xl font-bold">Echoes</div>

      <!-- Search -->
      <div class="flex-1 max-w-md mx-6">
        <div class="relative w-full">
          <!-- Search Icon -->
          <button
            type="button"
            @click="handleSearch"
            class="absolute left-3 top-1/2 -translate-y-1/2 "
          >
            <Search class="w-5 h-5" />
          </button>

          <!-- Input -->
          <input
            ref="searchInput"
            v-model="searchQuery"
            type="text"
            placeholder="Search"
            class="w-full pl-10 pr-3 md:py-2 py-1 border rounded-3xl focus:outline-none focus:ring"
            @keyup.enter="handleSearch"
          />
        </div>
      </div>

      <!-- Icons -->
      <div class="flex space-x-4">
        <button><Bell class="w-6 h-6" /></button>
        <button><User class="w-6 h-6" /></button>
      </div>
    </header>

    <!-- Search Result -->
    <div v-if="searchResult !== null" class="px-20 py-6">
      <div
        v-if="searchResult"
        class="p-4 bg-green-100 text-green-700 rounded-lg"
      >
        ✅ Result found for <span class="font-semibold">{{ lastSearch }}</span>
      </div>
      <div
        v-else
        class="p-4 bg-red-100 text-red-700 rounded-lg"
      >
        ❌ No result found for <span class="font-semibold">{{ lastSearch }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Bell, User, Search } from "lucide-vue-next";

const searchQuery = ref("");
const lastSearch = ref("");
const searchResult = ref(null); // null = nothing yet, true/false = found/not found

const fakeDatabase = ["art", "music", "painting", "echoes", "vue"]; // mock data

const handleSearch = () => {
  const query = searchQuery.value.trim();
  if (!query) {
    searchResult.value = null;
    return;
  }

  lastSearch.value = query;

  // Mock search logic
  if (fakeDatabase.includes(query.toLowerCase())) {
    searchResult.value = true;
  } else {
    searchResult.value = false;
  }

  // Clear input
  searchQuery.value = "";
};
</script>
