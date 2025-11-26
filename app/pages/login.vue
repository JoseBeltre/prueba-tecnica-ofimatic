<script setup>
import { IconEye, IconEyeOff } from '@tabler/icons-vue'

definePageMeta({
  layout: 'auth',
})
useSeoMeta({
  title: 'Iniciar sesión - Ofimatic'
})

const formData = ref({
  username: '',
  password: ''
})

const { error, loading, login } = useAuth()
const showPassword = ref(false)

watch(formData.value, () => {
  if(error.value){
    error.value = ''
  }
})

const handleLogin = async () => {
  const { username, password } = formData.value

  const logged = await login({ username, password })

  if (logged){
    navigateTo('/')
  }
}


</script>
<template>
  <form class="font-poppins text-center relative" @submit.prevent="handleLogin">
    <img class="absolute size-26 -top-34 right-3" src="/skateboarding.svg" >
    <h1 class="font-extrabold text-3xl mb-2">Iniciar sesión</h1>
    <p class="leading-5 max-sm:leading-4 max-sm:text-sm">¡Ingresa tus datos para comenzar a navegar!</p>
    <div class="mt-6 grid gap-5 px-1">
      <div class="relative">
        <input id="username" v-model="formData.username"  class="floating-input peer" placeholder=" "  name="username" type="text" required>
        <label class="floating-label" for="username">Nombre de usuario</label>
      </div>
      <div class="relative">
        <input id="password" v-model="formData.password" class="floating-input peer" placeholder=" "  name="password" :type="`${showPassword ? 'text' : 'password'}`" required>
        <label class="floating-label" for="password">Contraseña</label>
        <label class="absolute top-1/2 -translate-y-1/2 right-3 text-black/40 hover:text-[#6791fd] cursor-pointer transition-colors peer-focus:text-[#6791fd]" for="show-password">
          <IconEye v-if="showPassword" stroke="1.5"  />
          <IconEyeOff v-else stroke="1.5" />
        </label>
        <input id="show-password" v-model="showPassword" class="hidden" type="checkbox">
      </div>
      <p v-if="error" class="rounded-xl font-medium text-sm text-red-600">
        {{ error }}
      </p>
      <button class="text-white bg-[#8bacff] h-12 font-bold rounded-xl uppercase tracking-wide cursor-pointer hover:bg-[#6791fd] hover:tracking-widest transition-all flex items-center justify-center" type="submit">
          <SpinnerLoader v-if="loading" />
          <span v-else>Acceder</span>
      </button>
    </div>
  </form>
</template>