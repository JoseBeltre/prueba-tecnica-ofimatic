<script setup>
  import { IconMenu, IconX } from '@tabler/icons-vue';

  const user = useUserStore().user
  const showMenu = ref(false)
</script>
<template>
  <div class="min-h-dvh bg-linear-to-br from-[#D0DDFF] to-[#8EADFC] sm:p-6 sm:pb-0 pb-0">
    <div class="bg-white max-w-[1360px] m-auto min-h-[calc(100dvh-24px)] sm:px-6 sm:rounded-t-2xl">
      <header class="max-sm:bg-[#618dff] max-sm:px-4 max-sm:text-white flex items-center justify-between py-4 max-sm:flex-row-reverse">
        <div class="flex gap-14 md:gap-20 items-center">
          <NuxtLink class="hidden sm:block font-black text-3xl" href="/">
            Logo
          </NuxtLink>

        <input id="menu-opener" v-model="showMenu" class="peer hidden pointer-events-none" type="checkbox">
        <ul class="max-sm:absolute hidden peer-checked:flex sm:flex max-sm:flex-col max-sm:bg-white max-sm:shadow-2xl max-sm:border-2 max-sm:border-black/20 max-sm:top-12 max-sm:right-4 max-sm:p-4 max-sm:rounded-xl :gap-2 sm:gap-10 z-10 text-black">
          <li><NuxtLink class="hover:underline hover:text-[#3970ff] transition-colors " to="/products">Productos</NuxtLink></li>
          <li><NuxtLink class="hover:underline hover:text-[#3970ff] transition-colors " to="/posts">Blog</NuxtLink></li>
        </ul>
        <label class="sm:hidden cursor-pointer" for="menu-opener">
          <IconMenu v-if="!showMenu" />
          <IconX v-else />
        </label>
        </div>
        <div class="flex max-sm:flex-row-reverse items-center gap-3 font-medium leading-4">
          <h3>{{ user.firstName + ' ' + user.lastName }}</h3>
          <div class="w-8 sm:w-10 bg-gray-200 rounded-full overflow-hidden aspect-square ">
            <img class="size-full object-cover aspect-square" :src="user.image" :alt="`Photo of ${user.username}`">
          </div>
        </div>
      </header>
      <main class="max-sm:p-6">
        <slot />
      </main>
    </div>
  </div>
</template>