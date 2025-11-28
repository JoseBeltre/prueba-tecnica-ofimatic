<script setup>
import { useProducts } from '@/composables/useProducts';
import { usePagination } from '@/composables/usePagination';
import SearchInput from '~/components/search-input.vue';

definePageMeta({
  title: 'Products - Ofimatic',
  middleware: ['auth']
})


const user = useUserStore().user
const { products, topRated, getCategories, searchProducts, getProductsByCategory } = useProducts()
const categories = await getCategories()
const filters = ref({
  search: '',
  category: 'all',
  price: 'ascendent',
  toggleOrder: () => {
    if (filters.value.price === 'ascendent') {
      filters.value.price = 'decrescent'
    } else {
      filters.value.price = 'ascendent'
    }
  }
})
const searchResult = ref(null)
const categoryResult = ref(null)

// WATCH PARA FILTRAR PRODUCTOS CON SEARCH
watch(() => filters.value.search, async (value) => {
  if(!value){
    searchResult.value = null
    return
  }

  const res = await searchProducts(value)
  searchResult.value = res.products
})

// WATCH PARA FILTRAR PRODUCTOS POR CATEGORIA SELECCIONADA
watch(() => filters.value.category, async (category) => {
  if(category === 'all') {
    categoryResult.value = null
    return
  }

  const res = await getProductsByCategory(category)
  categoryResult.value = res.data.value.products
})

const filteredProducts = computed(() => {
  let result = categoryResult.value ? [...categoryResult.value] :[...products.value]

  if (searchResult.value) {
    result = searchResult.value
  }

  if (filters.value.price === 'ascendent'){
    result = result.sort((a, b) => a.price - b.price)
  } else {
    result = result.sort((a, b) => b.price - a.price)
  }

  return result
})

const {
  pagination,
  totalPages,
  paginatedItems,
  nextPage,
  prevPage,
  goToPage
} = usePagination(filteredProducts)


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
      <SearchInput v-model="filters.search" class="border-black!" />
      <div class="filter-wrapper">
        <label>Category: </label>
        <span class="filter">
          <select id="category-select" v-model="filters.category" class="cursor-pointer focus:outline-none capitalize" name="category-select">
            <option value="all">All</option>
            <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
          </select>
        </span>
      </div>
      <div class="filter-wrapper">
        <label>Price:</label>
        <button class="filter" @click="filters.toggleOrder">{{ filters.price }}</button>
      </div>
      <ItemsPerPageFilter v-model="pagination.itemsPerPage" />
    </nav>
    <section class="items-container">
      <ProductCard
        v-for="product in paginatedItems"
        :key="product.id"
        :product="product"
      />
    </section>
    <PaginationButtons
      :go-to-page="goToPage"
      :next-page="nextPage"
      :prev-page="prevPage"
      :total-pages="totalPages"
      :pagination="pagination"
    />
  </div>
</template>