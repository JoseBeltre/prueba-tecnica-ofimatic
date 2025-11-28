<template>
  <header
    class="fixed top-2 md:top-4 left-1/2 -translate-x-1/2 bg-white rounded-xl p-2 px-4 md:px-10 md:pe-2 flex items-center gap-4 md:gap-20 outline-3 outline-white/50 shadow-xl z-99 w-[95%] md:w-auto justify-between">
    <NuxtLink class="font-extrabold text-lg md:text-2xl whitespace-nowrap">
      Gaming<span class="text-blue-500">HUB</span>
    </NuxtLink>
    <nav class="flex gap-2 md:gap-8 text-xs md:text-sm items-center text-nowrap">
      <a href="#inicio" class="hidden md:inline">Home</a>
      <a href="#destacados" class="hidden md:inline">Featured</a>
      <a href="#categorias" class="hidden md:inline">Categories</a>
      <a href="#contacto" class="hidden md:inline">Contact</a>
      <NuxtLink
        class="bg-black p-2 text-white rounded-full px-4 md:px-6 cursor-pointer outline-4 hover:outline-black/40 text-xs md:text-sm"
        to="/login"
      >
        Join us
      </NuxtLink>
    </nav>
  </header>
</template>