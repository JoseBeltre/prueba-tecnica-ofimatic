<script setup>
import { IconChevronLeftPipe } from '@tabler/icons-vue';
</script>
<template>
  <div class="min-h-screen bg-linear-to-br from-[#D0DDFF] to-[#8EADFC] flex items-center justify-center">
    <header class="absolute top-6 left-6 font-extrabold ">
      <NuxtLink class="flex items-center gap-1 hover:opacity-40 transition-all" to="/">
        <IconChevronLeftPipe stroke="2.5" size="28" />
        Volver
      </NuxtLink>
    </header>
    <div class="max-sm:mx-4 bg-white outline-6 outline-white/40 p-4 py-8 sm:p-8 rounded-3xl sm:rounded-[40px] shadow-2xl">
      <slot />
    </div>
  </div>
</template>