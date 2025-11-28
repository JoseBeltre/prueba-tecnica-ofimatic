<script setup>
import { IconChevronLeft, IconChevronRight, IconChevronsLeft, IconChevronsRight } from '@tabler/icons-vue';
const props = defineProps({
  goToPage: {
    type: Function,
    required: true
  },
  prevPage: {
    type: Function,
    required: true
  },
  nextPage: {
    type: Function,
    required: true
  },
  pagination:{
    type: Object,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
})
</script>
<template>
  <div class="pagination-wrapper flex justify-end gap-1 pb-18">
      <button class="disabled:opacity-45 disabled:cursor-none" :disabled="props.pagination.page === 1" @click="props.goToPage(1)">
        <IconChevronsLeft />
      </button>
      <button class="disabled:opacity-45 disabled:cursor-none" :disabled="props.pagination.page === 1" @click="props.prevPage">
        <IconChevronLeft />
      </button>
      <button class="disabled:opacity-45 disabled:cursor-none" :disabled="props.pagination.page === props.totalPages" @click="props.nextPage">
        <IconChevronRight />
      </button>
      <button class="disabled:opacity-45 disabled:cursor-none" :disabled="props.pagination.page === props.totalPages" @click="props.goToPage(props.totalPages)">
        <IconChevronsRight />
      </button>
    </div>
</template>