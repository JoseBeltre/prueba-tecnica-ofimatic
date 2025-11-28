<script setup>
import CategoryItem from '~/components/landing/category-item.vue';

</script>
<template>
  <section
    id="categorias"
    class="px-4 md:px-6 py-12 md:py-16 bg-linear-to-br from-blue-50 to-white rounded-xl m-2 mb-20 my-10">
    <h2 class="section-title">
      SHOP BY CATEGORY
    </h2>
    <p class="section-subtitle">
      Find exactly what you're looking for
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
      <CategoryItem title="Smartphones" description="Power and style for your daily life" emoji="📱" />
      <CategoryItem title="Laptops" description="Performance for studying or working" emoji="💻" />
      <CategoryItem title="Gaming" description="All you need to play" emoji="🎮" />
    </div>
  </section>
</template>