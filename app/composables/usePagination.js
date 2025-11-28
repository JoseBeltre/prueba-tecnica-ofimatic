export function usePagination(itemsRef) {
  const pagination = ref({
    page: 1,
    itemsPerPage: 10
  })

  // totalItems: número de items disponibles en la lista actual
  const totalItems = computed(() => (itemsRef.value || []).length)

  // totalPages: cuántas páginas hay
  const totalPages = computed(() => {
    const n = pagination.value.itemsPerPage
    return Math.max(1, Math.ceil(totalItems.value / n))
  })

  // start / end indices
  const startIndex = computed(() => (pagination.value.page - 1) * pagination.value.itemsPerPage)
  const endIndex = computed(() => startIndex.value + pagination.value.itemsPerPage)

  // slice con los items para mostrar en la UI
  const paginatedItems = computed(() => {
    return (itemsRef.value || []).slice(startIndex.value, endIndex.value)
  })

  // funciones de navegacion
  const nextPage = () => {
    if (pagination.value.page < totalPages.value) pagination.value.page++
  }
  const prevPage = () => {
    if (pagination.value.page > 1) pagination.value.page--
  }
  const goToPage = (p) => {
    const target = Math.min(Math.max(1, Number(p) || 1), totalPages.value)
    pagination.value.page = target
  }
  const firstPage = () => (pagination.value.page = 1)
  const lastPage = () => (pagination.value.page = totalPages.value)

  // Si los items cambian (si se aplican filtros o se hace una busqueda), resetear page a 1 por UX
  watch(totalItems, () => {
    pagination.value.page = 1
  })

  // Si cambias itemsPerPage manualmente, resetear page a 1
  watch(() => pagination.value.itemsPerPage, () => {
    pagination.value.page = 1
  })

  return {
    pagination,
    totalItems,
    totalPages,
    startIndex,
    endIndex,
    paginatedItems,
    nextPage,
    prevPage,
    goToPage,
    firstPage,
    lastPage
  }
}
