<script setup>
  const user = useUserStore().user
</script>
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
        <div class="flex items-center gap-3 font-medium text-end leading-4">
          <h3>{{ user.firstName + ' ' + user.lastName }}</h3>
          <div class="w-10 bg-gray-200 rounded-full overflow-hidden aspect-square ">
            <img class="size-full object-cover aspect-square" :src="user.image" :alt="`Photo of ${user.username}`">
          </div>
        </div>
      </header>
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>