<template>
<div class="  p-4 bg-white border-b  border-[#0000001A]">
    <!-- Author -->
    <div class="flex items-center space-x-3 mb-2">
        <img
  src="@/assets/images/avatar.png"
  class=" md:w-12 md:h-12 rounded-full"
  alt="user"
/>
      <span class="font-medium">Sarah Flinch</span>
    </div>

    <!-- Title -->
    <h2 class="font-semibold mb-1">How to make fluffy pancakes</h2>

    <!-- Content -->
    <p class="text-sm text-gray-600">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quaerat voluptatibus unde praesentium officia est eveniet totam veniam temporibus? Quas eveniet autem est, ea optio tempora minima, minus quasi impedit harum sunt quidem dolor eius excepturi cum? Itaque explicabo eveniet, aliquam officia labore minima? Dolorum quas beatae molestias reprehenderit optio.
    </p>

    <!-- Reactions -->
    <div class="flex space-x-6 text-gray-500 text-sm mt-3">
      <div class="flex items-center space-x-1">
        <Heart class="w-4 h-4" /> <span>256</span>
      </div>
      <div class="flex items-center space-x-1">
        <MessageCircle class="w-4 h-4" /> <span>256</span>
      </div>
      <div class="flex items-center space-x-1">
        <Bookmark class="w-4 h-4" /> <span>256</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Heart, MessageCircle, Bookmark } from "lucide-vue-next";
</script>
