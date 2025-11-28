export function usePosts () {
  const { data, pending, error } = useFetch('https://dummyjson.com/posts?limit=0')

  const posts = computed(() => data.value?.posts ?? [])

  const total = computed(() => data.value?.total)

  const featuredPost = computed(() => {
    return [...posts.value].sort((a, b) => b.reactions.likes - a.reactions.likes)[0]
  })

  const getById = async (id) => {
    return await useFetch(`https://dummyjson.com/posts/${id}`)
  }

  const getComments = async (id) => {
    return await useFetch(`https://dummyjson.com/posts/${id}/comments`)
  }

  return { 
    posts,
    pending,
    error,
    total,
    featuredPost,
    getById,
    getComments
  }
}