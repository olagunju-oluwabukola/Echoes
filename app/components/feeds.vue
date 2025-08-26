<template>
  <div class="bg-white p-4  mt-6 md:mt-12">
    <h3 class="font-semibold mb-4">Add to your feed</h3>

    <div
      v-for="i in 4"
      :key="i"
      class="flex items-center justify-between mb-4 p-2"
    >
      <div class="flex items-center space-x-3">
        <img src="@/assets/images/avatar.png" class="w-10 h-10 rounded-full" />
        <div>
          <p class="font-medium">Mira cooking receipe</p>
          <p class="text-sm text-gray-500">I just love to share new home made receies.</p>
        </div>
      </div>
      <button class="text-blue-500 text-sm">+ Follow</button>
    </div>
  </div>
</template>
