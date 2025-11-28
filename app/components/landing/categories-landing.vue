<script setup>
import CategoryItem from '~/components/landing/category-item.vue';

</script>
<template>
  <section
    id="categorias"
    class="px-4 md:px-6 py-12 md:py-16 bg-linear-to-br from-blue-50 to-white rounded-xl m-2 mb-20 my-10">
    <h2 class="section-title">
      COMPRA POR CATEGORÍA
    </h2>
    <p class="section-subtitle">
      Encuentra exactamente lo que buscas
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
      <CategoryItem title="Smartphone" description="Potencia y estilo para tu día a día" emoji="📱" />
      <CategoryItem title="Laptops" description="Rendimiento para estudiar o trabajar" emoji="💻" />
      <CategoryItem title="Tablets" description="Versatilidad en un solo dispositivo" emoji="📲" />
    </div>
  </section>
</template>