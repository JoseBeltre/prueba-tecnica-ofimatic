<script setup>
defineProps({
  modelValue:{
    type: [String, Number],
    required: true
  }
})
const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
  const value = (event.target).value
  emit('update:modelValue', value)
}

</script>
<template>
  <div class="filter-wrapper">
    <label>Items per page:</label>
    <span class="filter">
      <select id="items-select" :value="modelValue" name="items-select" class="cursor-pointer focus:outline-none" @input="updateValue">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="35">35</option>
        <option value="50">50</option>
      </select>
    </span>
  </div>
</template>