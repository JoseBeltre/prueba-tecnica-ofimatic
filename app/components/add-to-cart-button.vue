<script setup lang="ts">
import { IconShoppingCartPlus } from '@tabler/icons-vue'

</script>

<template>
  <button class="flex items-center gap-2 border-2 p-2 px-4 rounded-lg cursor-pointer hover:text-white hover:bg-black transition-colors">
    <IconShoppingCartPlus class="sm:hidden md:inline-block" />
    <span class="text-sm font-medium">Add to cart</span>
  </button>
</template>