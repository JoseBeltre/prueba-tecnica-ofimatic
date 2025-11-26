export default defineNuxtRouteMiddleware(() => {
  const store = useUserStore()
  
  if(store.user.id){
    return navigateTo('/')
  }
})
