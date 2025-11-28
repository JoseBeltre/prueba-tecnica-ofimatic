<script setup>
import ArticleCard from '~/components/article-card.vue';
import SearchInput from '~/components/search-input.vue';

definePageMeta({
  title: 'Posts - Ofimatic',
  middleware: ['auth']
})

const { posts, featuredPost, searchPosts } = usePosts()
const { users } = useUsers()
const getUserPost = (userId) => {
  return users.value.find(user => user.id === userId) || null
}
const search = ref('')
const searchResults = ref(null)

const featureUser = await getUserPost(featuredPost.value.userId)

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

</script>

<template>
  <div>
    <h1 class="text-2xl sm:text-4xl font-sans mb-2">Welcome to our Blog</h1>

    <div class="p-5 pb-8 bg-gray-100 rounded-2xl border border-black/20">
      <span class="text-orange-400 font-bold ps-1">FEATURED</span>
      <h2 class="text-4xl uppercase font-black mb-1">{{ featuredPost.title }}</h2>
      <div class="flex gap-2 mb-3 items-center">
        <div class="size-8 overflow-hidden rounded-full sm:hidden md:inline-block">
          <img class="object-cover size-full " :src="featureUser?.image" :alt="featureUser?.username">
        </div>
        <h4 class="">By {{ featureUser?.firstName + ' ' + featureUser?.lastName }}</h4>
      </div>
      <NuxtLink class="hero-btn text-sm border-black hover:bg-black/10" :to="`/posts/${featuredPost.id}`">
        Read more...
      </NuxtLink>
    </div>

    <nav class="flex gap-x-6 gap-y-2 items-center flex-wrap mt-8 mb-3">
      <SearchInput v-model="search" />
    </nav>
    <section class="grid gap-4 grid-cols-1 sm:grid-cols-2 mb-3">
      <ArticleCard
        v-for="post in filteredPosts"
        :key="post.id"
        :post="post"
        :user="getUserPost(post.userId)" />
    </section>
  </div>
</template>