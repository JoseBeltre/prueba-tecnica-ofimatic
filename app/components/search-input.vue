<script setup>
import { IconSearch } from '@tabler/icons-vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: 'Search...'
  }
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="rounded-full border-2 border-black/30 focus:border-black flex items-center p-2 px-4 flex-1">
    <input
      id="search"
      class="lg:w-64 flex-1 focus:outline-0"
      type="search"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      @input="emit('update:modelValue', $event.target.value)"
    >
    <label for="search">
      <IconSearch />
    </label>
  </div>
</template>
