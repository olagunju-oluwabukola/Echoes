<template>
  <article class="prose prose-neutral max-w-none">
    <figure class="rounded-2xl overflow-hidden border">
      <img :src="post.hero" class="w-full object-cover" />
    </figure>

    <div v-html="post.html" class="mt-6"></div>

    <div class="grid md:grid-cols-2 gap-4 mt-6">
      <img v-for="(img, idx) in post.gallery" :key="idx" :src="img" class="w-full rounded-2xl border object-cover" />
    </div>
  </article>
</template>
<script setup lang="ts">
const props = defineProps<{ post: any }>()
</script>