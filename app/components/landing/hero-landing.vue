<script setup>
import controllertImg from '~/assets/imgs/landing/controller.png'
import { IconArrowRight } from '@tabler/icons-vue';

</script>
<template>
  <section
    id="inicio"
    class="px-4 md:px-6 pt-20 md:pt-20 text-center rounded-xl m-2 bg-linear-to-t from-blue-500 to-blue-400 relative flex items-center justify-center min-h-[400px] md:min-h-[500px] overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
      <div class="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
      <div class="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-300/20 rounded-full blur-xl" />
    </div>

    <img class="drop-shadow-2xl w-full max-w-[600px] md:max-w-none relative z-10" :src="controllertImg" alt="">

    <div class="absolute top-1/2 -translate-y-1/2 px-4 z-20">
      <h1 class="text-3xl md:text-6xl font-black uppercase mb-4 relative text-white drop-shadow-2xl">
        The technology you need
        <span
          class="text-xs md:text-xl absolute -right-4 md:right-60 -bottom-4 md:-bottom-6 -rotate-2 font-bold bg-black p-2 px-3 md:px-4 text-white whitespace-nowrap shadow-xl">
          At the best price
        </span>
      </h1>

      <p class="text-sm md:text-lg text-white/95 mt-8 mb-8 max-w-full md:max-w-120 m-auto drop-shadow-lg">
        Smartphones, laptops, and all the gaming accessories you can imagine.
      </p>

      <NuxtLink
        to="/products"
        class="flex w-fit mx-auto gap-3 px-6 md:px-8 md:pe-6 py-3 md:py-4 text-sm md:text-base bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105">
        Explore products
        <IconArrowRight />
      </NuxtLink>
    </div>
  </section>
</template>