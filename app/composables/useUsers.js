export function useUsers () {
  const { data, pending, error } = useFetch('https://dummyjson.com/users?limit=0')

  const users = computed(() => data.value?.users ?? [])
  const total = computed(() => data.value?.total)

  const getById = async (id) => {
    return await useFetch(`https://dummyjson.com/users/${id}`)
  }

  return {
    total,
    users,
    data,
    pending,
    error,
    getById 
  }
}