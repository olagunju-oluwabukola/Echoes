<template>
  <div class="flex space-x-6  mt-8">
    <button
      v-for="tab in tabs"
      :key="tab"
      :class="['pb-2', activeTab === tab ? 'border-b-2 border-black font-medium' : 'text-gray-500']"
      @click="$emit('update:activeTab', tab)"
    >
      {{ tab }}
    </button>
  </div>
</template>

<script setup>
const tabs = ["For you", "Following", "New", "Trending"];
defineProps({
  activeTab: String
});
</script>
