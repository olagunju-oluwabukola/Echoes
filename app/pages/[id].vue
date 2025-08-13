<template>
  <div class="max-w-4xl mx-auto px-4">
    <BlogHeader :title="blog.title" :date="blog.date" />
    <img :src="blog.mainImage" alt="" class="my-6 rounded-lg" />
    <BlogContent>
      <p v-for="(para, i) in blog.content" :key="i">{{ para }}</p>
    </BlogContent>
    <Comments :comments="blog.comments" />
    <SimilarPosts :posts="blog.similar" />
  </div>
</template>

<script setup lang="ts">
import BlogHeader from '../components/blog/blogHeader.vue'
import BlogContent from '../components/blog/blogContent.vue'
import Comments from '../components/blog/commentsSection.vue'
import SimilarPosts from '../components/blog/SimilarPosts.vue'

const route = useRoute()

const blog = {
  title: 'How to make fluffy pancakes',
  date: '2025-08-13',
  mainImage: '/pancake.jpg',
  content: [
    'Step 1: Mix your batter.',
    'Step 2: Heat the pan.',
    'Step 3: Pour and cook.'
  ],
  comments: [
    { author: 'Jane', text: 'Love this recipe!' },
    { author: 'Mark', text: 'Turned out perfect.' }
  ],
  similar: [
    { id: 'cake1', title: 'How To Bake Cake', image: '/cake.jpg' },
    { id: 'cake2', title: 'Chocolate Cake Tips', image: '/cake.jpg' }
  ]
}
</script>
