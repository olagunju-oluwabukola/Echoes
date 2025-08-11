<script setup>
import { reactive } from 'vue'
import logo from '~/assets/images/Logo.svg'
const navItems = [
  { name: 'Home', to: '/' },
  { name: 'News', to: '/news' },
  { name: 'Podcasts', to: '/podcasts' },
  { name: 'Resources', to: '/resources' }
]

const state = reactive({
  isMenuOpen: false
})
</script>

<template>
  <header class=" bg-[#1E1E1E] text-white py-4 px-4 md:px-16 border-b border-gray-900">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
     
      <NuxtLink to="/" class="flex items-center space-x-2">
        <img :src='logo' alt="FutureTech Logo" class="w-8 h-8" /> 
        <span class="text-xl font-bold">FutureTech</span>
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-8 text-gray-300">
        <NuxtLink
          v-for="(item, i) in navItems"
          :key="i"
          :to="item.to"
          class="hover:text-yellow-400 transition"
        >
          {{ item.name }}
        </NuxtLink>
      </nav>

      <NuxtLink
        to="/contact"
        class="hidden md:inline-block ml-4 bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-300 transition"
      >
        Contact Us
      </NuxtLink>

      <button @click="state.isMenuOpen = !state.isMenuOpen" class="md:hidden text-yellow-400">
        <NuxtIcon :name="state.isMenuOpen ? 'x' : 'menu'" class="w-6 h-6" />
      </button>
    </div>
 
    <div v-if="state.isMenuOpen" class="md:hidden bg-gray-900 border-t border-gray-800">
      <nav class="flex flex-col space-y-2 p-4">
        <NuxtLink
          v-for="(item, i) in navItems"
          :key="i"
          :to="item.to"
          class="text-gray-300 hover:text-yellow-400 transition"
          @click="state.isMenuOpen = false"
        >
          {{ item.name }}
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="bg-yellow-400 text-black text-center font-semibold px-4 py-2 rounded hover:bg-yellow-300 transition"
          @click="state.isMenuOpen = false"
        >
          Contact Us
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>






  