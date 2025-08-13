<template>
  <button
    :aria-label="label"
    class="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 hover:bg-gray-50 active:scale-[.98] transition"
    @click="$emit('click')"
  >
    <slot />
    <span v-if="text" class="text-sm">{{ text }}</span>
  </button>
</template>
<script setup lang="ts">
withDefaults(defineProps<{ label?: string; text?: string }>(), { label: 'button', text: '' })
</script>