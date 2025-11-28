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
const featuredUser = ref(null)
const { posts, featuredPost, searchPosts } = usePosts()
const { users, getById } = useUsers()
const getUserPost = (userId) => {
  return users.value.find(user => user.id === userId) || null
}
const search = ref('')
const searchResults = ref(null)

watch(() => featuredPost.value, async (post) => {
  if (!post) return
  const { data } = await getById(post.userId)
  featuredUser.value = data.value
})

watch(() => search.value, async (search) => {
  if (!search) {
    searchResults.value = null
  }
  
  const res = await searchPosts(search)
  searchResults.value = res.posts
})

const filteredPosts = computed(() => {
  let result = [...posts.value]

  if(searchResults.value){
    result = searchResults.value
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
} = usePagination(filteredPosts)

</script>

<template>
  <div>
    <h1 class="text-2xl sm:text-4xl font-sans mb-2">Welcome to our Blog</h1>

    <div class="p-5 pb-8 bg-gray-100 rounded-2xl border border-black/20">
      <span class="text-orange-400 font-bold ps-1">FEATURED</span>
      <h2 class="text-4xl uppercase font-black mb-1">{{ featuredPost.title }}</h2>
      <div class="flex gap-2 mb-3 items-center">
        <div class="size-8 overflow-hidden rounded-full sm:hidden md:inline-block">
          <img class="object-cover size-full " :src="featuredUser?.image" :alt="featuredUser?.username">
        </div>
        <h4 class="">By {{ featuredUser?.firstName + ' ' + featuredUser?.lastName }}</h4>
      </div>
      <NuxtLink class="hero-btn text-sm border-black hover:bg-black/10" :to="`/posts/${featuredPost.id}`">
        Read more...
      </NuxtLink>
    </div>

    <nav class="flex gap-x-6 gap-y-2 items-center flex-wrap mt-8 mb-3">
      <SearchInput v-model="search" />
      <ItemsPerPageFilter v-model="pagination.itemsPerPage" />
    </nav>
    <section class="grid gap-4 grid-cols-1 sm:grid-cols-2 mb-3">
      <ArticleCard
        v-for="post in paginatedItems"
        :key="post.id"
        :post="post"
        :user="getUserPost(post.userId)" />
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