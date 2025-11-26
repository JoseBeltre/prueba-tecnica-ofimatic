import { defineStore } from 'pinia'

export const userStore = defineStore('user', () => {
  const user = ref({
    id: null,
    username: null,
    email: null,
    firstName: null,
    lastName: null,
    gender: null,
    image: null,
  })

  const tokens = ref({
    accessToken: null,
    refreshTokem: null
  })

  const setUser = (payload) => {
    user.value = payload,
    localStorage.setItem('user', JSON.stringify(payload))
  }

  const setTokens = (payload) => {
    tokens.value = payload,
    localStorage.setItem('auth', JSON.stringify(payload))
  }

  return { user, tokens, setUser, setTokens }
})