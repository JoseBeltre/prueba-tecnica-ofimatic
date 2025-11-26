<template>
  <div class="min-h-dvh bg-linear-to-br from-[#D0DDFF] to-[#8EADFC] p-6 pb-0">
    <div class="bg-white min-h-dvh px-6 rounded-t-2xl">
      <header class="flex items-center justify-between py-4">
        <div class="flex gap-20 items-center">
          <a class="font-black text-3xl" href="/">
          Logo
        </a>

        <ul class="flex gap-10">
          <li><NuxtLink to="/productos">Productos</NuxtLink></li>
          <li><NuxtLink to="/blog">Blog</NuxtLink></li>
        </ul>
        </div>
        <div class="flex items-center gap-3 font-medium">
          <h3>Jose Beltre Cordero</h3>
          <div class="size-10 bg-gray-400 rounded-full overflow-hidden">
            <img src="" alt="">
          </div>
        </div>
      </header>
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>