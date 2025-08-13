<!-- <template>
  <div class="max-w-sm mx-auto mt-20 p-4 border rounded-lg">
    <h1 class="text-2xl font-bold mb-4">Login</h1>
    <input v-model="username" placeholder="Username" class="border w-full p-2 mb-3 rounded" />
    <button @click="loginUser" class="w-full bg-green-500 text-white py-2 rounded">Login</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const username = ref('')
const router = useRouter()
const userStore = useUserStore()

function loginUser() {
  if (username.value.trim()) {
    userStore.login({ name: username.value })
    router.push('/')
  }
}
</script> -->


<template>
  <div class="min-h-screen grid place-items-center p-6">
    <div class="w-full max-w-md bg-white border rounded-2xl shadow-sm p-6">
      <h1 class="text-2xl font-bold mb-1">Login</h1>
      <p class="text-sm text-gray-500 mb-6">Sign in to continue.</p>
      <label class="block text-sm font-medium">Your name</label>
      <input v-model="name" class="mt-1 w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring" placeholder="e.g. Bukola" />
      <button @click="doLogin" class="mt-4 w-full rounded-xl bg-black text-white py-2.5 font-medium hover:opacity-90">Continue</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '../../store/user'

const router = useRouter()
const route = useRoute()
const user = useUserStore()
const name = ref('')

function doLogin() {
  if (!name.value.trim()) return
  user.login(name.value.trim())
  const next = (route.query.next as string) || '/'
  router.push(next)
}
</script>