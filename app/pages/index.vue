<script setup>
definePageMeta({
  middleware: ['auth']
})
</script>
<template>
  <div>
    <h1>Index</h1>
    <NuxtLink to="/login">Ir a Inicio de sesion</NuxtLink>
  </div>
</template>