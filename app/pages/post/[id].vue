<script setup>
import { ref, computed } from 'vue'
import { ArrowLeft, Heart, MessageCircle, Bookmark, Share,EllipsisIcon } from 'lucide-vue-next'
import { usePosts } from '../../composables/usePost'

const route = useRoute()
const router = useRouter()
const { getPostById, getCommentsByPostId, getSimilarPosts, formatDate } = usePosts()

const postId = route.params.id
const post = computed(() => getPostById(postId))
const postComments = computed(() => getCommentsByPostId(postId))
const similarPosts = computed(() => getSimilarPosts(postId))

const newComment = ref('')

// Handle case where post is not found
if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Post not found'
  })
}

const submitComment = () => {
  if (newComment.value.trim()) {
    // Here you would typically send the comment to your backend
    console.log('Submitting comment:', newComment.value)
    newComment.value = ''
  }
}

const navigateToPost = (id) => {
  router.push(`/post/${id}`)
}

// SEO Meta
useHead({
  title: post.value?.title,
  meta: [
    { name: 'description', content: post.value?.excerpt },
    { property: 'og:title', content: post.value?.title },
    { property: 'og:description', content: post.value?.excerpt },
    { property: 'og:image', content: post.value?.images?.[0] },
  ]
})
</script>



<template>
  <div class="min-h-screen bg-gray-100">
    <div class="max-w-4xl mx-auto py-6 px-4">
      <!-- Back Button -->
      <button
        @click="$router.go(-1)"
        class="mb-4 flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft class="w-4 h-4" />
        <span>Back to posts</span>
      </button>

      <!-- Main Content -->
      <article class="bg-white rounded-lg shadow-sm overflow-hidden">
        <!-- Header -->
        <div class="p-6 border-b border-gray-200">

          <!-- Title -->
          <h1 class="text-xl md:text-3xl font-bold text-gray-900 mb-4 ">{{ post.title }}</h1>
          <p class="font-normal text-xs md:text-sm">{{ post.intro }}</p>
        </div>


        <!-- Article Content -->
        <div class="px-6 py-6">
          <div v-html="post.content" class="prose md:prose-lg text-sm md:text-[16px] max-w-none"></div>
        </div>

        <!-- Content Images -->
        <div v-if="post.images && post.images.length > 0" class="px-6 py-4">
          <div v-if="post.images.length === 1">
            <img
              :src="post.images[0]"
              :alt="post.title"
              class="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div v-else class="grid grid-cols-2 gap-4">
            <img
              v-for="(image, index) in post.images"
              :key="index"
              :src="image"
              :alt="`${post.title} - Image ${index + 1}`"
              class="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>

<!-- direction -->
           <div class="px-6 py-6">
             <p class="mb-4 font-medium">Direction</p>
          <div v-html="post.direction" class="prose prose-sm  text-sm max-w-none"></div>
        </div>
<!--
        progressImg -->

        <div v-if="post.progressImg && post.progressImg.length > 0" class="px-6 py-4">
          <div v-if="post.progressImg .length === 1">
            <img
              :src="post.progressImg[0]"
              :alt="post.title"
              class="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div v-else class="grid grid-cols-2 gap-4">
            <img
              v-for="(image, index) in post.images"
              :key="index"
              :src="image"
              :alt="`${post.title} - Image ${index + 1}`"
              class="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>

        <!-- tip -->
        <div class="px-6 py-6">
          <p class="mb-4 font-medium">Tips</p>
          <div v-html="post.tip" class="prose prose-sm  text-sm max-w-none"></div>
        </div>

        <!-- Reactions Bar -->
        <div class="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <div class="flex items-center justify-between">
            <div class="flex space-x-8 text-gray-600">
              <button class="flex items-center space-x-2 hover:text-red-500 transition-colors">
                <Heart class="w-5 h-5" />
                <span>{{ post.reactions.likes }} </span>
              </button>
              <button class="flex items-center space-x-2 hover:text-blue-500 transition-colors">
                <MessageCircle class="w-5 h-5" />
                <span>{{ post.reactions.comments }}</span>
              </button>
              <button class="flex items-center space-x-2 hover:text-green-500 transition-colors">
                <Bookmark class="w-5 h-5" />
                <span>{{ post.reactions.bookmarks }} </span>
              </button>
                 <button class="flex items-center space-x-2 hover:text-green-500 transition-colors">
                <EllipsisIcon class="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </article>

      <!-- Comments Section -->
      <section class="mt-8 bg-white rounded-lg shadow-sm overflow-hidden">
        <div class="px-6 py-4 bg-gray">
          <h2 class="text-xl font-semibold">Comments ({{ postComments.length }})</h2>
        </div>

        <!-- Comment Form -->
        <div class="px-6 py-4">
          <div class="flex space-x-3">
            <img
              src="/assets/images/avatar.png"
              alt="Your avatar"
              class="w-10 h-10 rounded-full object-cover"
            />
            <div class="flex-1">
              <textarea
                v-model="newComment"
                placeholder="Write a comment..."
                class="w-full p-2 md:p-4 bg-[#F3F4F6] rounded-lg resize-none "
                rows="3"
              ></textarea>
              <div class="flex justify-end ">
                <button
                  @click="submitComment"
                  :disabled="!newComment.trim()"
                  class="px-4 py-2 my-2 md:my-0 bg-black text-white rounded-lg  disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Comments List -->
        <div class="px-6 py-4 space-y-6">
          <div
            v-for="comment in postComments"
            :key="comment.id"
            class="flex space-x-3"
          >
            <img
              :src="comment.author.avatar"
              :alt="comment.author.name"
              class="w-5 h-5 md:w-10  md:h-10 rounded-full object-cover flex-shrink-0"
            />
            <div class="flex-1">
              <div class="flex items-center space-x-2 mb-1">
                <span class="font-medium text-sm">{{ comment.author.name }}</span>
                <span class="text-sm text-gray-500">{{ formatDate(comment.createdAt) }}</span>
              </div>
              <p class="text-gray-700 mb-2 text-sm">{{ comment.content }}</p>
              <div class="flex items-center space-x-4 text-sm text-gray-500">
                <button class="flex items-center space-x-1 hover:text-red-500 transition-colors">
                  <Heart class="w-4 h-4" />
                  <span>{{ comment.likes }}</span>
                </button>

                   <button class="flex items-center space-x-2 hover:text-blue-500 transition-colors">
                <MessageCircle class="w-4 h-5" />
                <span>{{ comment.comments || 0}}</span>
                   </button>
                <button class="hover:text-blue-500 transition-colors">Reply</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Similar Posts -->
      <section class="mt-8">
        <h2 class="text-2xl font-bold mb-6">Similar Posts</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="similarPost in similarPosts"
            :key="similarPost.id"
            class="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
            @click="navigateToPost(similarPost.id)"
          >


            <img
              v-if="similarPost.images && similarPost.images.length > 0"
              :src="similarPost.images[0]"
              :alt="similarPost.title"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <!-- author details -->
              <div>
            <div class="flex items-center my-2 gap-2">

             <img
              src="/assets/images/avatar.png"
              alt="Your avatar"
              class="w-4 h-4 rounded-full object-cover"
            />
             <span>{{ similarPost.author.name }}</span>
            </div>

          </div>

              <h3 class="font-semibold mb-2 hover:text-blue-600 transition-colors">
                {{ similarPost.title }}
              </h3>
              <p class="text-sm text-gray-600 mb-3 line-clamp-2">
                {{ similarPost.excerpt }}
              </p>
              <div class="flex items-center justify-between text-sm text-gray-500">
                      <div class="flex items-center space-x-4 text-sm text-gray-500">
                <button class="flex items-center space-x-1 hover:text-red-500 transition-colors">
                  <Heart class="w-4 h-4" />
                  <span>{{ similarPost.likes || 0 }}</span>
                </button>

                   <button class="flex items-center space-x-2 hover:text-blue-500 transition-colors">
                <MessageCircle class="w-4 h-5" />
                <span>{{ similarPost.comments || 0}}</span>
                   </button>

                    <button class="flex items-center space-x-2 hover:text-blue-500 transition-colors">
                <EllipsisIcon class="w-4 h-5" />
                   </button>

              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>



<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.prose h3 {
  @apply text-xl font-semibold mt-6 mb-3 text-gray-900;
}

.prose ul {
  @apply list-disc list-inside space-y-1 mb-4;
}

.prose li {
  @apply text-gray-700;
}

.prose p {
  @apply mb-4 text-gray-700 leading-relaxed;
}

</style>