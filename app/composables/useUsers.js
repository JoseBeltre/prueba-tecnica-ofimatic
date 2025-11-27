export function useUsers () {
  
  const getAll = async () => {
    return await useFetch('https://dummyjson.com/users?limit=0')
  }

  const getById = async (id) => {
    return await useFetch(`https://dummyjson.com/users/${id}`)
  }

  return { 
    getAll,
    getById 
  }
}