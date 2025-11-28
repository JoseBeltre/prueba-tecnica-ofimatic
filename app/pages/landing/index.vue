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

useHead({
  title: 'GamingHUB - The technology you need at the best price',
  description: 'Discover the best smartphones, laptops and gaming accessories. Free shipping, extended warranty and the most competitive prices on the market.',
  ogTitle: 'GamingHUB - Your tech and gaming store',
  ogDescription: 'Find smartphones, laptops and all the gaming accessories you need. Amazing deals await you!',
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