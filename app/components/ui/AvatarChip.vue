<template>
  <div class="flex items-center gap-2">
    <img :src="src" alt="" class="h-8 w-8 rounded-full object-cover" />
    <span class="text-sm font-medium">{{ name }}</span>
  </div>
</template>
<script setup lang="ts">
withDefaults(defineProps<{ src?: string; name: string }>(), { src: 'https://api.dicebear.com/9.x/personas/svg' })
</script>