import { userStore } from '~/stores/userStore'

export function useAuth () {
  const loading = ref()
  const user = ref()
  const error = ref()


  const login = async ({ username, password }) => {
    // Estado de carga en proceso
    loading.value = true
    
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 5
        }),
      })

      // Si no responde con status OK
      if (response.status !== 200) {
        const err = await response.json()
        error.value = err.message
        return false
      }

      const data = await response.json()
      user.value = data

      const { 
        id,
        email,
        firstName,
        lastName,
        gender,
        image,
        accessToken,
        refreshToken } = data
      
      const store = userStore()
      store.setUser({
        id,
        username,
        email,
        firstName,
        lastName,
        gender,
        image
      })
      store.setTokens({
        accessToken,
        refreshToken
      })

      return true
    } catch (error) {
        console.log('Error autenticando: ', error)
    } finally {
      // Carga se detuvo
      loading.value = false
    }

  }

  return { user, loading, error, login }
}