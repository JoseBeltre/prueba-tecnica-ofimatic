<script setup>
definePageMeta({
  layout: 'auth',
})

useSeoMeta({
  title: 'Iniciar sesión - Ofimatic'
})
</script>
<template>
  <form class="font-poppins text-center relative">
    <img class="absolute size-26 -top-34 right-3" src="/skateboarding.svg" >
    <h1 class="font-extrabold text-3xl mb-2">Iniciar sesión</h1>
    <p class="leading-5 max-sm:leading-4 max-sm:text-sm">¡Ingresa tus datos para comenzar a navegar!</p>
    <div class="mt-6 grid gap-5 px-1">
      <div class="relative">
        <input id="username" class="floating-input peer" placeholder=" "  name="username" type="text" required>
        <label class="floating-label" for="username">Nombre de usuario</label>
      </div>
      <div class="relative">
        <input id="password" class="floating-input peer" placeholder=" "  name="password" type="text" required>
        <label class="floating-label" for="password">Contraseña</label>
      </div>
      <button class="text-white bg-[#8bacff] h-12 font-bold rounded-xl uppercase tracking-wide cursor-pointer hover:bg-[#6791fd] hover:tracking-widest transition-all" type="submit">
        Acceder
      </button>
    </div>
  </form>
</template>