<script setup>
import { IconLocation } from '@tabler/icons-vue';
</script>
<template>
  <section id="contacto" class="px-4 md:px-6 py-12 md:py-16 bg-linear-to-br from-blue-50 to-white rounded-xl m-2">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-8 md:mb-12">
        <h2 class="section-title">
          ¿TIENES ALGUNA PREGUNTA?
        </h2>
        <p class="section-subtitle">
          Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos pronto.
        </p>
      </div>

      <form class="bg-white rounded-2xl shadow-[0_0_40px_10px] p-6 md:p-10 border-2 border-blue-100 shadow-blue-400/30">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
          <div>
            <label for="name" class="block text-sm font-bold text-gray-700 mb-2">
              Nombre completo
            </label>
            <input id="name" type="text" placeholder="Tu nombre"
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:outline-none transition text-sm md:text-base"
              required>
          </div>

          <div>
            <label for="email" class="block text-sm font-bold text-gray-700 mb-2">
              Correo electrónico
            </label>
            <input id="email" type="email" placeholder="tu@email.com"
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:outline-none transition text-sm md:text-base"
              required>
          </div>
        </div>

        <div class="mb-4 md:mb-6">
          <label for="phone" class="block text-sm font-bold text-gray-700 mb-2">
            Teléfono (opcional)
          </label>
          <input id="phone" type="tel" placeholder="+1 (123) 456-7890"
            class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:outline-none transition text-sm md:text-base">
        </div>

        <div class="mb-4 md:mb-6">
          <label for="subject" class="block text-sm font-bold text-gray-700 mb-2">
            Asunto
          </label>
          <select id="subject"
            class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:outline-none transition text-sm md:text-base bg-white"
            required>
            <option value="">Selecciona un asunto</option>
            <option value="soporte">Cotizacion</option>
            <option value="ventas">Consulta de ventas</option>
            <option value="garantia">Garantía y devoluciones</option>
            <option value="envio">Información de envío</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div class="mb-6 md:mb-8">
          <label for="message" class="block text-sm font-bold text-gray-700 mb-2">
            Mensaje
          </label>
          <textarea id="message" rows="5" placeholder="Escribe tu mensaje aquí..."
            class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:outline-none transition resize-none text-sm md:text-base"
            required />
        </div>

        <div class="text-center w-full flex">
          <button type="submit"
            class="w-full px-8 md:px-12 py-3 md:py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all transform hover:scale-105 text-sm md:text-base flex justify-center items-center gap-2 cursor-pointer">
            Enviar mensaje
            <IconLocation size="20" />
          </button>
        </div>

      </form>
    </div>
  </section>
</template>