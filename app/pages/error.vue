<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center px-4">
    <div class="text-center">
      <div class="mb-8">
        <h1 class="text-6xl font-bold text-gray-900 mb-2">404</h1>
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">Post Not Found</h2>
        <p class="text-gray-600 mb-8">
          Sorry, the post you're looking for doesn't exist or has been removed.
        </p>
      </div>

      <div class="space-y-4">
        <button
          @click="$router.go(-1)"
          class="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft class="w-4 h-4" />
          <span>Go Back</span>
        </button>

        <div>
          <NuxtLink
            to="/"
            class="inline-flex items-center space-x-2 px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors ml-4"
          >
            <Home class="w-4 h-4" />
            <span>Home</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowLeft, Home } from 'lucide-vue-next'

defineProps({
  error: Object
})
</script>