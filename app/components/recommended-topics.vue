<template>
  <div class="bg-white p-4  mt-4">
    <h3 class="font-semibold mb-4">Recommended Topics</h3>
    <div class="flex gap-2 space-x-2 flex-wrap p-2">
      <button
        v-for="topic in ['Cooking', 'Football', 'Fashion','Health', 'Food', 'Lifestyle', 'Tech', 'Animals', 'Education' ]"
        :key="topic"
        class="px-4 py-2 border rounded-full text-sm"
      >
        {{ topic }}
      </button>
    </div>
  </div>
</template>
