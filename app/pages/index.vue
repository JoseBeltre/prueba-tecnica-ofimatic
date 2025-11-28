<script setup>
import { IconArrowUp, IconChevronRight } from '@tabler/icons-vue'
import { useProducts } from '@/composables/useProducts';
import { usePosts } from '@/composables/usePosts';
import { useUsers } from '@/composables/useUsers';
import BagImg from '@/assets/imgs/dashboard/bag.png'
import UserImg from '@/assets/imgs/dashboard/user.png'
import PencilImg from '@/assets/imgs/dashboard/pencil.png'

definePageMeta({
  middleware: ['auth']
})
const user = useUserStore().user

const { total } = useProducts()

const { total: totalPosts } = usePosts()

const { total: totalUsers } = useUsers()

</script>
<template>
  <div class="flex h-full flex-col">
    <h1 class="text-4xl font-sans">Wassup, <span>{{ user.firstName }}</span></h1>
    <nav class="hidden sm:flex mt-4">
      <IconChevronRight />
      <ul class="flex underline flex-wrap gap-x-5">
        <li><NuxtLink class="cursor-pointer" to="/products">Ver productos</NuxtLink></li>
        <li><NuxtLink class="cursor-pointer" to="/posts">Ver productos</NuxtLink></li>
        <li><NuxtLink class="cursor-pointer" to="">Ver usuarios</NuxtLink></li>
      </ul>
    </nav>
    <div class="grid grid-cols-1 min-h-full mt-4 gap-4 md:grid-rows-2 md:grid-cols-5 flex-1 h-full md:min-h-[420px]">
      <!-- Card de Productos -->
      <NuxtLink class="cursor-pointer flex justify-end items-end text-end relative rounded-4xl bg-linear-to-br from-[#FDEFFF] to-50% to-[#FF7CD3] p-6 h-44 overflow-hidden group md:row-span-2 md:col-span-2 md:h-auto md:items-start" to="/products">
        <div class="size-92 md:size-120 absolute -left-36 -bottom-46 md:-left-27 md:-bottom-30 group-hover:scale-120 transition-transform duration-300">
          <img class="size-full" :src="BagImg" alt="">
        </div>
        <div class="text-white z-10 mt-4 group-hover:scale-110 transition-transform duration-300">
          <h2 class="font-extrabold text-7xl md:text-9xl drop-shadow-2xl">
            {{ total }}
          </h2>
          <h3 class="leading-2 md:leading-0 font-bold text-2xl drop-shadow-2xl">Productos</h3>
        </div>
        <IconArrowUp class="absolute top-4 right-4 rotate-45 text-white" size="36" stroke="1" />
      </NuxtLink>
      <!-- Card de Publicaiones -->
      <NuxtLink class="cursor-pointer flex relative rounded-4xl bg-linear-to-br from-[#E08D18] to-100% to-[#FFDB78] p-6 h-44 overflow-hidden group md:h-auto md:col-span-3" to="/posts">
        <div class="size-100 absolute -right-46 -top-46 md:-right-10 md:-top-32 rotate-20 group-hover:scale-120 transition-transform duration-300">
          <img class="size-full" :src="PencilImg" alt="">
        </div>
        <div class="text-white z-10 mt-2 group-hover:scale-110 transition-transform duration-300">
          <h2 class="font-extrabold text-7xl md:text-9xl drop-shadow-2xl">
            {{ totalPosts }}
          </h2>
          <h3 class="leading-2 md:leading-0 font-bold text-2xl drop-shadow-2xl">Publicaciones</h3>
        </div>
        <IconArrowUp class="absolute top-4 right-4 rotate-45 text-white" size="36" stroke="1" />
      </NuxtLink>
      <!-- Card de Usuarios -->
      <NuxtLink class="cursor-pointer flex justify-end items-end text-end relative rounded-4xl bg-linear-to-br from-[#FFCECE] to-50% to-[#F97676] p-6 h-44 overflow-hidden group md:h-auto md:col-span-3 md:items-start" to="">
        <div class="size-86 absolute -left-22 -bottom-36 md:-bottom-28 md:-left-12 group-hover:scale-120 transition-transform duration-300">
          <img class="size-full" :src="UserImg" alt="">
        </div>
        <div class="text-white z-10 me-2 group-hover:scale-110 transition-transform duration-300">
          <h3 class="leading-4 font-bold text-2xl drop-shadow-2xl">Usuarios</h3>
          <h2 class="font-extrabold text-7xl md:text-9xl drop-shadow-2xl">
            {{ totalUsers }}
          </h2>
          <h3 class="leading-2 md:leading-0 font-bold text-2xl drop-shadow-2xl">Activos</h3>
        </div>
        <!-- <IconArrowUp class="absolute top-4 right-4 rotate-45 text-white" size="36" stroke="1" /> -->
      </NuxtLink>
    </div>
    <p class="my-2 ms-2 font-medium text-black/60">Tip: Haz clic en los cuadros que tienen el icono de flecha para navegar más rápido.</p>
  </div>
</template>