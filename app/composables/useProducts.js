export function useProducts() {
  const { data, pending, error } = useFetch('https://dummyjson.com/products?limit=0')
  
  const products = computed(() => data.value?.products ?? [])

  const total = computed(() => data.value?.total)

  const topRated = computed(() => {
    if (!products.value.length) {
      return { id: null, title: '', rating: 0 }
    }
    return [...products.value].sort((a, b) => b.rating - a.rating)[0]
  })

  const getById = async (id) => {
    return await useFetch(`https://dummyjson.com/products/${id}`)
  }

  const getCategories = async () => {
    return await $fetch('https://dummyjson.com/products/category-list')
  }

  return { 
    pending,
    products,
    total,
    topRated,
    error,
    getById,
    getCategories 
  }
}