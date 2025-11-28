<script setup lang="ts">
import { IconSearch } from '@tabler/icons-vue'

const props = defineProps({
  placeholder: {
    type: String,
    default: 'Search...'
  }
})

</script>

<template>
  <div class="rounded-full border-2 border-black/30 focus:border-black flex items-center  p-2 px-4 flex-1">
    <input id="search" class="lg:w-64 flex-1 focus:outline-0" type="search" name="search" :placeholder="props.placeholder">
    <label for="search" type="search" >
        <IconSearch />
    </label>
  </div>
</template>