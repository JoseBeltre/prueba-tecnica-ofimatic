<script setup>
import { IconSearch } from '@tabler/icons-vue';

definePageMeta({
  title: 'Products - Ofimatic',
  // middleware: ['auth']
})
const user = useUserStore().user
// const { products, topRated } = useProducts()

</script>
<template>
  <div>
    <h1 class="text-4xl font-sans mb-3">Let's find something cool, {{ user.firstName + '' }}</h1>
    <div class="bg-gray-100 aspect-16/7 rounded-xl overflow-hidden relative">
      <div class="absolute inset-0 bg-linear-to-tr from-[#000000]/50 to-transparent z-20" />
      <img class="size-full object-cover -z-10" src="https://i.blogs.es/2b106e/amazonechoplusap/1366_2000.jpg" :alt="`Photo of $`">
      <div class="text-white z-40 absolute left-0 bottom-0 p-8 flex flex-col">
        <h2 class="font-black text-6xl uppercase">The Favorite of Many</h2>
        <p class="leading-4 mb-4"><span class="font-bold">Nike Blancos</span> es el mejor valorado de nuestro catalogo</p>
        <NuxtLink to="" class="border-2 border-white p-2 rounded-lg w-fit px-6 cursor-pointer hover:bg-white hover:text-black transition-all ">
          Echale un vistazo
        </NuxtLink>
      </div>
    </div>
    <nav class="my-8 flex gap-6 items-center">
      <div class="rounded-full border-2 flex items-center w-fit p-2 px-4">
        <input id="search" class="w-64" type="search" name="search" placeholder="Nike Air Pro...">
        <label for="search" type="search" >
          <IconSearch />
        </label>
      </div>
      <div>
        <span>Categoria: </span>
        <span class="py-1 px-4 border-2 rounded-xl">
          <select id="category" class="" name="category">
          <option value="vala">Zapatos</option>
          <option value="vala1">vala1</option>
          <option value="vala2">vala2</option>
        </select>
        </span>
      </div>
    </nav>
  </div>
</template>