<script setup>
import { IconChevronLeft, IconChevronRight, IconChevronsLeft, IconChevronsRight } from '@tabler/icons-vue';
import { useProducts } from '@/composables/useProducts';
import SearchInput from '~/components/search-input.vue';

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
    <HeroSection
      img-url="https://i.blogs.es/2b106e/amazonechoplusap/1366_2000.jpg"
      :img-alt="topRated.title"
      :title="`Let's find something cool, ${user.firstName}`"
    >
      <h2 class="font-black text-4xl md:text-5xl lg:text-6xl uppercase">The Favorite of Many</h2>
        <p class="leading-4 mb-2 md:mb-4"><span class="font-bold">{{ topRated.title }}</span> <span class="hidden sm:inline">es el mejor valorado de nuestro catalogo</span></p>
        <NuxtLink :to="`/products/${topRated.id}`" class="hero-btn">
          Echale un vistazo
        </NuxtLink>
    </HeroSection>
    <nav class="flex gap-x-6 gap-y-2 items-center flex-wrap mb-3">
      <SearchInput />
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
    <section class="items-container">
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