<template>
  <div
    class="p-4 bg-white border-b border-[#0000001A] cursor-pointer hover:bg-gray-50 transition-colors duration-200"
    @click="navigateToPost"
  >
    <!-- Author -->
    <div class="flex items-center space-x-3 mb-2">
      <img
        :src="post.author.avatar "
        class="md:w-12 md:h-12 w-6 h-6 rounded-full object-cover"
        :alt="post.author.name"
      />
      <div class="flex flex-col">
        <span class="font-medium text-sm md:text-base">{{ post.author.name }}</span>

      </div>
    </div>

    <!-- Title -->
    <h2 class="font-semibold mb-1 hover:text-blue-600 transition-colors text-sm md:text-base">
      {{ post.title }}
    </h2>

    <!-- Content Preview -->
    <p class="text-xs text-gray-600 line-clamp-3 mb-2  md:text-base">
      {{ post.excerpt }}
    </p>

    <!-- Reactions -->
    <div class="flex space-x-6 text-gray-500 text-sm mt-3">
      <div class="flex items-center space-x-1 hover:text-red-500 transition-colors">
        <Heart class="w-4 h-4" />
        <span>{{ formatNumber(post.reactions.likes) }}</span>
      </div>
      <div class="flex items-center space-x-1 hover:text-blue-500 transition-colors">
        <MessageCircle class="w-4 h-4" />
        <span>{{ formatNumber(post.reactions.comments) }}</span>
      </div>
      <div class="flex items-center space-x-1 hover:text-green-500 transition-colors">
        <Bookmark class="w-4 h-4" />
        <span>{{ formatNumber(post.reactions.bookmarks) }}</span>
      </div>
        <div class="flex items-center space-x-1 transition-colors">
        <EllipsisIcon class="w-4 h-4" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Heart, MessageCircle, Bookmark, EllipsisIcon} from "lucide-vue-next"
import { usePosts, type Post } from "../composables/usePost"

interface Props {
  post: Post
}

const props = defineProps<Props>()
const { formatDate } = usePosts()
const router = useRouter()

const navigateToPost = (): void => {
  router.push(`/post/${props.post.id}`)
}

const formatNumber = (num: number): string => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k'
  }
  return num.toString()
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>