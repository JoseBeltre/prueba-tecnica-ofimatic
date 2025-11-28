<script setup>
import { IconHeart, IconHeartFilled, IconStarFilled } from '@tabler/icons-vue';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const liked = ref(props.product.isLiked ?? false)

const bigPrice = ref(Math.floor(props.product.price))
const pennies = computed(() => {
  return props.product.price.toFixed(2).split('.')[1]
})

const redirectToSinglePage = (id = Intl) => {
  navigateTo(`/products/${id}`)
}

</script>

<template>
  <article
    class="border border-black/20 rounded-lg overflow-hidden p-2 cursor-pointer group hover:shadow-md transition-all"
    @click="redirectToSinglePage(product.id)"
  >
    <div class="rounded-xl overflow-hidden relative aspect-16/12 bg-gray-300">
      <img class="size-full object-cover -z-10 group-hover:scale-110 transition-transform" :src="product.thumbnail" :alt="`image of ${product.title}`">
      <button class="absolute top-0 right-0 z-20 m-3 p-1 bg-white rounded-md cursor-pointer" @click="() => liked = !liked">
        <IconHeart v-if="!liked" />
        <IconHeartFilled v-else class="text-red-500" />
      </button>
    </div>
    <div class="p-2 mt-1">
      <div class="flex justify-between flex-col mb-1">
        <h3 class="text-xl font-semibold leading-4">{{ product.title }}</h3>
        <span class="font-semibold inline-block text-sm text-gray-400 rounded-md uppercase h-fit">{{ product.category }}</span>
      </div>
      <div class="flex gap-1 items-center bg-amber-400 p-0.5 px-3 text-white text-sm rounded-md w-fit mb-6">
        <IconStarFilled size="18" />
        <span class="font-medium ">{{ product.rating }}</span>
      </div>
      <div class="flex justify-between items-center">
        <p class="font-sans font-extrabold">
          <span class="text-3xl">${{ bigPrice }}</span>
          <span>.{{ pennies }}</span>
        </p>
        <AddToCartButton />
      </div>
    </div>
  </article>
</template>