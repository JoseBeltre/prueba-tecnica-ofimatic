export function usePosts () {
  
  const getAll = async () => {
    return await useFetch('https://dummyjson.com/posts?limit=0')
  }

  const getById = async (id) => {
    return await useFetch(`https://dummyjson.com/posts/${id}`)
  }

  return { 
    getAll,
    getById 
  }
}