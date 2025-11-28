<script setup>
import Header from '~/components/landing/header-landing.vue';
import Hero from '~/components/landing/hero-landing.vue';
import Featured from '~/components/landing/featured-landing.vue';
import Categories from '~/components/landing/categories-landing.vue';
import FinalCTA from '~/components/landing/final-cta-landing.vue';
import Contact from '~/components/landing/contact-landing.vue';
import Footer from '~/components/landing/footer-landing.vue';

definePageMeta({
  layout: false
})
</script>

<template>
  <div class="min-h-screen bg-[#f1faff] text-gray-900">
    <Header />
    <Hero />
    <Featured />
    <Categories />
    <FinalCTA />
    <Contact />
    <Footer />

  </div>
</template>