<script setup>
import { useProducts } from '@/composables/useProducts';
import { usePagination } from '@/composables/usePagination';
import SearchInput from '~/components/search-input.vue';

definePageMeta({
  title: 'Products - Ofimatic',
  middleware: ['auth']
})

useHead({
  title: 'Products - GamingHUB | Complete technology catalog',
  description: 'Explore our complete catalog of tech and gaming products. Smartphones, laptops, tablets and more. Filter by category and find what you are looking for.',
  ogTitle: 'Product Catalog - GamingHUB',
  ogDescription: 'Discover our complete catalog with the best technology and gaming products.',
})

const user = useUserStore().user
const { pending, products, topRated, getCategories, searchProducts, getProductsByCategory } = useProducts()

const categories = ref([])
onMounted(async () => {
  categories.value = await getCategories()
})

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

const stopSearchWatch = watch(() => filters.value.search, async (value) => {
  if(!value){
    searchResult.value = null
    return
  }

  const res = await searchProducts(value)
  searchResult.value = res.products
})

const stopCategoryWatch = watch(() => filters.value.category, async (category) => {
  if(category === 'all') {
    categoryResult.value = null
    return
  }

  const res = await getProductsByCategory(category)
  categoryResult.value = res.data.value.products
})

onBeforeUnmount(() => {
  stopSearchWatch()
  stopCategoryWatch()
})

const filteredProducts = computed(() => {
  let result = categoryResult.value ? [...categoryResult.value] : [...products.value]

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
      v-if="topRated && topRated.title"
      img-url="https://i.blogs.es/2b106e/amazonechoplusap/1366_2000.jpg"
      :img-alt="topRated.title"
      :title="`Let's find something cool, ${user.firstName}`"
    >
      <h2 class="font-black text-4xl md:text-5xl lg:text-6xl uppercase">The Favorite of Many</h2>
      <p class="leading-4 mb-2 md:mb-4">
        <span class="font-bold">{{ topRated.title }}</span> 
        <span class="hidden sm:inline"> is most rated by our clients. Give it a Try.</span>
      </p>
      <NuxtLink :to="`/products/${topRated.id}`" class="hero-btn">
        See Product
      </NuxtLink>
    </HeroSection>
    
    <!-- Skeleton para el hero mientras carga -->
    <div v-else class="bg-gray-200 animate-pulse rounded-2xl h-64 mb-4" />
    
    <nav class="flex gap-x-6 gap-y-2 items-center flex-wrap mb-3">
      <SearchInput v-model="filters.search" class="border-black!" />
      <div class="filter-wrapper">
        <label>Category: </label>
        <span class="filter">
          <select 
            id="category-select" 
            v-model="filters.category" 
            class="cursor-pointer focus:outline-none capitalize" 
            name="category-select"
          >
            <option value="all">All</option>
            <option v-for="category in categories" :key="category" :value="category">
              {{ category }}
            </option>
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
      <template v-if="pending">
        <SkeletonProductCard v-for="n in 6" :key="n" />
      </template>
      <template v-else-if="paginatedItems && paginatedItems.length > 0">
        <ProductCard
          v-for="product in paginatedItems"
          :key="product.id"
          :product="product"
        />
      </template>
      <p v-else class="text-center text-gray-500 py-8">
        No results available..
      </p>
    </section>
    
    <PaginationButtons
      v-if="paginatedItems && paginatedItems.length > 0"
      :go-to-page="goToPage"
      :next-page="nextPage"
      :prev-page="prevPage"
      :total-pages="totalPages"
      :pagination="pagination"
    />
  </div>
</template>