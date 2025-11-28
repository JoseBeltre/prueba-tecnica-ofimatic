<script setup>
defineProps({
  emoji: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
})
</script>
<template>
  <NuxtLink
    to="/products"
    class="group p-6 md:p-8 border-2 border-blue-200 rounded-2xl bg-white hover:bg-blue-50 transition-all text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
    <div
      class="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition">
      <span class="text-3xl">{{ emoji }}</span>
    </div>
    <h3 class="text-lg md:text-xl font-bold mb-2 text-gray-800">{{ title }}</h3>
    <p class="text-sm text-gray-600">{{ description }}</p>
  </NuxtLink>
</template>