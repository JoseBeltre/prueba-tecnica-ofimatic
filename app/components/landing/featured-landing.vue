<script setup>
import iphoneImg from '~/assets/imgs/landing/iphone.png'
import pcImg from '~/assets/imgs/landing/pc.png'
import laptopImg from '~/assets/imgs/landing/laptop.png'
</script>
<template>
  <section id="destacados" class="px-4 md:px-6 py-12 md:py-16 max-w-6xl mx-auto">
      <h2 class="section-title">
        PRODUCTOS DESTACADOS
      </h2>
      <p class="section-subtitle">Lo mejor de nuestra selección, solo para ti.</p>

      <!-- Desktop Layout -->
      <div class="hidden md:flex relative h-120">
        <NuxtLink
          to="/products"
          class="w-80 absolute left-20 bottom-10 lg:left-44 lg:bottom-10 hover:scale-110 transition-all hover:rotate-2">
          <img class="size-full" :src="pcImg" alt="">
        </NuxtLink>
        <NuxtLink
          to="/products"
          class="w-70 left-1/2 -translate-x-1/2 absolute z-50 hover:scale-110 transition-all hover:rotate-2">
          <img class="size-full" :src="iphoneImg" alt="">
        </NuxtLink>
        <NuxtLink
          to="/products"
          class="w-120 absolute -right-2 bottom-16 lg:right-20 lg:bottom-16 hover:scale-110 transition-all hover:rotate-2">
          <img class="size-full" :src="laptopImg" alt="">
        </NuxtLink>
      </div>

      <div class="grid md:hidden grid-cols-1 gap-6">
        <NuxtLink
          to="/products"
          class="bg-white rounded-2xl shadow-lg p-6 border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all">
          <div class="h-48 flex items-center justify-center">
            <img class="max-h-full max-w-full object-contain" :src="iphoneImg" alt="">
          </div>
          <div class="text-center mt-4">
            <h3 class="font-bold text-lg text-gray-800">iPhone Premium</h3>
            <p class="text-sm text-gray-600">Lo último en tecnología móvil</p>
          </div>
        </NuxtLink>
        <NuxtLink
          to="/products"
          class="bg-white rounded-2xl shadow-lg p-6 border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all">
          <div class="h-48 flex items-center justify-center">
            <img class="max-h-full max-w-full object-contain" :src="pcImg" alt="">
          </div>
          <div class="text-center mt-4">
            <h3 class="font-bold text-lg text-gray-800">PC Gaming</h3>
            <p class="text-sm text-gray-600">Potencia extrema para jugar</p>
          </div>
        </NuxtLink>
        <NuxtLink
          to="/products"
          class="bg-white rounded-2xl shadow-lg p-6 border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all">
          <div class="h-48 flex items-center justify-center">
            <img class="max-h-full max-w-full object-contain" :src="laptopImg" alt="">
          </div>
          <div class="text-center mt-4">
            <h3 class="font-bold text-lg text-gray-800">Laptop Pro</h3>
            <p class="text-sm text-gray-600">Rendimiento portátil profesional</p>
          </div>
        </NuxtLink>
      </div>
    </section>
</template>