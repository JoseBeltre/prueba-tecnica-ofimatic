<script setup>
import { IconChevronLeftPipe } from '@tabler/icons-vue'

const props = defineProps({
  previousPage: {
    type: String,
    default: '/'
  }
})
</script>
<template>
  <NuxtLink class="flex items-center gap-1 hover:opacity-40 transition-all" :to="props.previousPage">
    <IconChevronLeftPipe stroke="2.5" size="28" />
    Volver
  </NuxtLink>
</template>