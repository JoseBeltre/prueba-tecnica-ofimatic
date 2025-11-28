<script setup>
const props = defineProps({
  title: {
    type: String,
    required: false,
    default: ''
  },
  imgAlt: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  },
})
</script>
<template>
  <section>
    <h1 class="text-2xl sm:text-4xl font-sans mb-3">{{ props.title }}</h1>
    <div class="bg-gray-100 aspect-square md:aspect-16/7 rounded-xl overflow-hidden relative mb-4 md:mb-8">
      <img class="size-full object-cover -z-10" :src="imgUrl" :alt="`Photo of ${props.imgAlt}`">
      <div class="text-white z-40 absolute left-0 bottom-0 p-4 md:p-8 flex flex-col">
        <slot />
      </div>
      <div class="absolute inset-0 bg-linear-to-tr from-[#000000]/80 to-transparent z-20" />
    </div>
  </section>
</template>