<template>
  <section
    class="px-4 md:px-6 py-16 md:py-20 text-center bg-linear-to-r from-blue-600 to-blue-800 text-white rounded-xl m-2 shadow-2xl relative overflow-hidden">
    <div class="absolute inset-0 opacity-50">
      <div class="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl z-90" />
      <div class="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl z-90" />
    </div>

    <div class="relative z-10">
      <h2 class="text-2xl md:text-4xl font-black mb-4 md:mb-6 uppercase drop-shadow-lg">
        ¿Listo para tu próxima compra?
      </h2>
      <p class="text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto opacity-90">
        Descubre miles de productos gaming y tech al mejor precio del mercado
      </p>

      <NuxtLink
        to="/products"
        class="inline-block px-6 md:px-8 py-3 md:py-4 bg-white text-blue-700 font-bold rounded-xl shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all transform hover:scale-105 text-sm md:text-base">
        Ver catálogo completo
      </NuxtLink>

      <div class="mt-8 md:mt-12 flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm">
        <div class="flex items-center gap-2">
          <span class="text-lg md:text-xl">✓</span>
          <span>Envío gratis</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-lg md:text-xl">✓</span>
          <span>Garantía extendida</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-lg md:text-xl">✓</span>
          <span>Devolución fácil</span>
        </div>
      </div>
    </div>
  </section>
</template>