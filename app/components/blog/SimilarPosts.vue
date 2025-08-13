<!-- <template>
  <section>
    <h3 class="text-xl font-semibold mb-4">Similar Posts</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <article v-for="p in related" :key="p.slug" class="group border rounded-2xl overflow-hidden hover:shadow-sm transition">
        <NuxtLink :to="`/blog/${p.slug}`">
          <img :src="p.hero" class="w-full h-40 object-cover" />
          <div class="p-3">
            <h4 class="font-semibold group-hover:underline line-clamp-1">{{ p.title }}</h4>
            <p class="text-xs text-gray-500 mt-1">{{ new Date(p.date).toLocaleDateString() }} • {{ p.readTime }} min</p>
          </div>
        </NuxtLink>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useBlogStore } from './../../store/blog'

const props = defineProps<{ currentSlug: string }>()
const blog = useBlogStore()

const related = computed(() => blog.posts.filter((p) => p.slug !== props.currentSlug))
</script> -->



<template>
  <section class="mt-10">
    <h2 class="text-xl font-semibold mb-4">Similar Posts</h2>
    <div class="grid grid-cols-2 gap-4">
      <div
        v-for="post in posts"
        :key="post.id"
        class="cursor-pointer border rounded p-4 hover:shadow"
        @click="goToPost(post.id)"
      >
        <img :src="post.image" alt="" class="rounded mb-2" />
        <h3 class="font-bold">{{ post.title }}</h3>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{ posts: { id: string; title: string; image: string }[] }>()
const router = useRouter()

function goToPost(id: string) {
  router.push(`/blog/${id}`)
}
</script>
