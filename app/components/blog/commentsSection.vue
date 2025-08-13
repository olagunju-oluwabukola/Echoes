<!-- <template>
  <section>
    <h2 class="text-xl font-semibold mb-4">Comments</h2>

    
    <div class="border rounded-2xl p-4 mb-6">
      <textarea v-model="draft" placeholder="Write a comment…" class="w-full min-h-[90px] border rounded-xl p-3 focus:outline-none focus:ring"></textarea>
      <div class="mt-3 flex items-center justify-between">
        <p class="text-xs text-gray-500">Be nice. Keep it civil.</p>
        <button @click="submit" class="rounded-xl bg-black text-white px-4 py-2 disabled:opacity-50" :disabled="!draft.trim()">Post</button>
      </div>
    </div>

    <ul class="space-y-4">
      <li v-for="c in post.comments" :key="c.id" class="border rounded-2xl p-4">
        <div class="flex items-start gap-3">
          <img :src="c.user.avatar || `https://api.dicebear.com/9.x/personas/svg?seed=${c.user.name}`" class="h-9 w-9 rounded-full" />
          <div class="flex-1">
            <div class="flex items-center justify-between">
              <p class="font-medium">{{ c.user.name }}</p>
              <span class="text-xs text-gray-500">{{ new Date(c.createdAt).toLocaleString() }}</span>
            </div>
            <p class="mt-1">{{ c.text }}</p>
            <div class="mt-2 flex items-center gap-2 text-sm text-gray-600">
              <button class="hover:underline" @click="guard('liked comment')">Like</button>
              <button class="hover:underline" @click="guard('replied')">Reply</button>
              <button class="hover:underline" @click="guard('reported comment')">Report</button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useBlogStore } from '../../store/blog'
import { useAuthGuard } from '@/composables/useAuthGuard'

const props = defineProps<{ post: any }>()
const blog = useBlogStore()
const { requireLogin } = useAuthGuard()
const draft = ref('')

function submit() {
  requireLogin(() => {
    if (!draft.value.trim()) return
    blog.addComment(props.post.slug, draft.value.trim())
    draft.value = ''
  })
}

function guard(action: string) {
  requireLogin(() => alert(`${action} (demo)`))
}
</script> -->


<template>
  <section class="mt-10">
    <h2 class="text-xl font-semibold mb-4">Comments</h2>
    <div v-for="(comment, i) in comments" :key="i" class="p-4 bg-gray-100 rounded mb-2">
      <p class="font-medium">{{ comment.author }}</p>
      <p>{{ comment.text }}</p>
    </div>

    <div class="mt-4">
      <textarea v-model="newComment" class="border p-2 w-full rounded" placeholder="Write a comment..."></textarea>
      <button
        class="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        @click="handleAddComment"
      >
        Add Comment
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthGuard } from '~/composables/useAuthGuard'

const props = defineProps<{ comments: { author: string; text: string }[] }>()

const newComment = ref('')
const { requireLogin } = useAuthGuard()

function handleAddComment() {
  requireLogin(() => {
    // In real app, send to API
    alert(`Comment added: ${newComment.value}`)
    newComment.value = ''
  })
}
</script>
