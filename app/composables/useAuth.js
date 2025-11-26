export function useAuth () {
  const loading = ref()
  const user = ref()
  const error = ref()


  const login = async ({ username, password }) => {
    loading.value = true
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 5
        })
      })
      if (response.status !== 200) {
        const err = await response.json()
        error.value = err.message
        return
      }
      const data = await response.json()
      user.value = data
      console.log(user)
    } catch (error) {
        console.log('Error autenticando: ', error)
    }
    loading.value = false
  }

  return { user, loading, error, login }
}