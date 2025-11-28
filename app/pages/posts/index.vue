<script setup>
import ArticleCard from '~/components/article-card.vue';
import ItemsPerPageFilter from '~/components/items-per-page-filter.vue';
import PaginationButtons from '~/components/pagination-buttons.vue';
import SearchInput from '~/components/search-input.vue';
import { usePagination } from '~/composables/usePagination';

definePageMeta({
  title: 'Posts - Ofimatic',
  middleware: ['auth']
})

useHead({
  title: 'Blog - GamingHUB | Technology news and guides',
  description: 'Read the latest news, reviews and guides about technology and gaming. Stay updated with tech world trends.',
  ogTitle: 'GamingHUB Blog - Tech news and guides',
  ogDescription: 'Articles, reviews and guides about technology and gaming.',
})

const { posts, featuredPost, searchPosts } = usePosts()
const { users } = useUsers()

const getUserPost = (userId) => {
  return users.value?.find(user => user.id === userId) || null
}

const search = ref('')
const searchResults = ref(null)

const stopSearchWatch = watch(() => search.value, async (searchValue) => {
  if (!searchValue) {
    searchResults.value = null
    return
  }

  const res = await searchPosts(searchValue)
  searchResults.value = res.posts
})

onBeforeUnmount(() => {
  stopSearchWatch()
})

const filteredPosts = computed(() => {
  if (searchResults.value) {
    return searchResults.value
  }
  return posts.value || []
})

const {
  pagination,
  totalPages,
  paginatedItems,
  nextPage,
  prevPage,
  goToPage
} = usePagination(filteredPosts)
</script>

<template>
  <div>
    <h1 class="text-2xl sm:text-4xl font-sans mb-2">Welcome to our Blog</h1>
    <div v-if="featuredPost && featuredPost.title" class="p-5 pb-8 bg-gray-100 rounded-2xl border border-black/20">
      <span class="text-orange-400 font-bold ps-1">FEATURED</span>
      <h2 class="text-4xl uppercase font-black mb-5">{{ featuredPost.title }}</h2>
      <NuxtLink class="hero-btn text-sm border-black hover:bg-black/10" :to="`/posts/${featuredPost.id}`">
        Read more...
      </NuxtLink>
    </div>

    <!-- Skeleton mientras carga -->
    <div v-else class="p-5 pb-8 bg-gray-200 animate-pulse rounded-2xl h-32 mb-4" />

    <nav class="flex gap-x-6 gap-y-2 items-center flex-wrap mt-8 mb-3">
      <SearchInput v-model="search" />
      <ItemsPerPageFilter v-model="pagination.itemsPerPage" />
    </nav>

    <ClientOnly>
      <section class="grid gap-4 grid-cols-1 sm:grid-cols-2 mb-3">
        <template v-if="!posts || posts.length === 0">
          <SkeletonArticleCard v-for="n in 6" :key="n" />
        </template>

        <template v-else-if="paginatedItems && paginatedItems.length > 0">
          <ArticleCard v-for="post in paginatedItems" :key="post.id" :post="post" :user="getUserPost(post.userId)" />
        </template>

        <p v-else class="text-center text-gray-500 py-8 col-span-2">
          No results available..
        </p>
      </section>
    </ClientOnly>

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