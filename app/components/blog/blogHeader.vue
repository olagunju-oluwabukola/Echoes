<!-- <template>
  <div class="border-b pb-4 flex justify-between items-center">
    <div>
      <h1 class="text-3xl font-bold">{{ title }}</h1>
      <p class="text-sm text-gray-500">{{ date }} · {{ readTime }} min read</p>
    </div>
    <div class="flex space-x-3">
      <button @click="handleLike" class="px-3 py-1 bg-blue-500 text-white rounded">👍</button>
      <button @click="handleShare" class="px-3 py-1 bg-gray-300 rounded">🔗</button>
    </div>
  </div>
</template>

<script setup>
import { useAuthGuard } from '@/composables/useAuthGuard'

const props = defineProps({
  title: String,
  date: String,
  readTime: Number
})

const { requireLogin } = useAuthGuard()

function handleLike() {
  requireLogin(() => {
    console.log('Liked!')
  })
}

function handleShare() {
  requireLogin(() => {
    console.log('Shared!')
  })
}
</script> -->


<!-- <template>
  <header class="pt-6 pb-4 border-b">
    <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight">{{ post.title }}</h1>
    <div class="mt-3 flex flex-wrap items-center justify-between gap-3">
      <div class="flex items-center gap-3 text-sm text-gray-600">
        <AvatarChip :name="post.author.name" />
        <span>• {{ formattedDate }}</span>
        <span>• {{ post.readTime }} min read</span>
      </div>
      <div class="flex items-center gap-2">
        <IconButton label="Like" :text="post.likes.toString()" @click="onLike">
          <span v-if="post.likedByMe">👍</span>
          <span v-else>👍</span>
        </IconButton>
        <IconButton label="Share" text="Share" @click="onShare">🔗</IconButton>
        <IconButton label="Bookmark" text="Save" @click="onSave">🔖</IconButton>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useBlogStore } from '../../store/blog'
import { useAuthGuard } from '@/composables/useAuthGuard'
import IconButton from '@/components/ui/IconButton.vue'
import AvatarChip from '@/components/ui/AvatarChip.vue'

const props = defineProps<{ post: any }>()
const blog = useBlogStore()
const { requireLogin } = useAuthGuard()

const formattedDate = computed(() => new Date(props.post.date).toLocaleDateString())

function onLike() {
  requireLogin(() => blog.toggleLike(props.post.slug))
}
function onSave() {
  requireLogin(() => alert('Saved! (demo)'))
}
function onShare() {
  requireLogin(() => {
    navigator.clipboard?.writeText(window.location.href)
    alert('Link copied!')
  })
}
</script> -->

<template>
  <header class="py-6 border-b">
    <h1 class="text-3xl font-bold">{{ title }}</h1>
    <p class="text-gray-500">{{ date }}</p>
  </header>
</template>

<script setup lang="ts">
defineProps<{ title: string; date: string }>()
</script>
