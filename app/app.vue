<script setup lang="ts">
import { useAuthStore } from '../stores/auth'

const auth = useAuthStore()
auth.init()
</script>

<template>
    <div class="bg-black">
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
    </div>
</template>

