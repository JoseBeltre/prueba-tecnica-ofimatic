export function useProducts() {
  
  const getAll = async () => {
    return await useFetch('https://dummyjson.com/products?limit=0')
  }

  const getById = async (id) => {
    return await useFetch(`https://dummyjson.com/products/${id}`)
  }

  return { 
    getAll,
    getById 
  }
}