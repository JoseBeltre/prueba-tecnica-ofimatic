<script setup>
import { IconChevronLeft, IconChevronRight, IconChevronsLeft, IconChevronsRight, IconSearch } from '@tabler/icons-vue';
import { useProducts } from '@/composables/useProducts';

definePageMeta({
  title: 'Products - Ofimatic',
  middleware: ['auth']
})
const user = useUserStore().user
const { products, topRated, getCategories } = useProducts()
const categories = await getCategories()

</script>
<template>
  <div>
    <h1 class="text-2xl sm:text-4xl font-sans mb-3">Let's find something cool, {{ user.firstName + '' }}</h1>
    <div class="bg-gray-100 aspect-square md:aspect-16/7 rounded-xl overflow-hidden relative mb-4 md:mb-8">
      <img class="size-full object-cover -z-10" src="https://i.blogs.es/2b106e/amazonechoplusap/1366_2000.jpg" :alt="`Photo of ${topRated.title}`">
      <div class="text-white z-40 absolute left-0 bottom-0 p-4 md:p-8 flex flex-col">
        <h2 class="font-black text-4xl md:text-5xl lg:text-6xl uppercase">The Favorite of Many</h2>
        <p class="leading-4 mb-2 md:mb-4"><span class="font-bold">{{ topRated.title }}</span> <span class="hidden sm:inline">es el mejor valorado de nuestro catalogo</span></p>
        <NuxtLink :to="`/products/${topRated.id}`" class="border-2 border-white p-2 rounded-lg w-fit px-6 cursor-pointer hover:bg-white hover:text-black transition-all max-sm:text-sm">
          Echale un vistazo
        </NuxtLink>
      </div>
      <div class="absolute inset-0 bg-linear-to-tr from-[#000000]/80 to-transparent z-20" />
    </div>
    <nav class="flex gap-x-6 gap-y-2 items-center flex-wrap mb-3">
      <div class="rounded-full border-2 flex items-center  p-2 px-4 flex-1">
        <input id="search" class="lg:w-64 flex-1 focus:outline-0" type="search" name="search" placeholder="Nike Air Pro...">
        <label for="search" type="search" >
          <IconSearch />
        </label>
      </div>
      <div class="filter-wrapper">
        <label>Category: </label>
        <span class="filter">
          <select id="category-select" class="cursor-pointer focus:outline-none capitalize" name="category-select">
            <option v-for="category in categories" :key="category" value="category">{{ category }}</option>
          </select>
        </span>
      </div>
      <div class="filter-wrapper">
        <label>Price:</label>
        <button class="filter">Ascendent</button>
      </div>
      <div class="filter-wrapper">
        <label>Items per page:</label>
        <span class="filter">
          <select id="items-select" class="cursor-pointer focus:outline-none" name="items-select">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="35">35</option>
            <option value="50">50</option>
          </select>
        </span>
      </div>
    </nav>
    <section class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-3">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </section>
    <div class="pagination-wrapper flex justify-end gap-1 pb-18">
      <button class="flex">
        <IconChevronsLeft />
      </button>
      <button>
        <IconChevronLeft />
      </button>
      <button>
        <IconChevronRight />
      </button>
      <button class="flex">
        <IconChevronsRight  />
      </button>
    </div>
  </div>
</template>