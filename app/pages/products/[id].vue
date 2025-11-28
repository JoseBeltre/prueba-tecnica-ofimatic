<script setup lang="ts">
import { IconMinus, IconPlus, IconStarFilled } from '@tabler/icons-vue';
import AddToCartButton from '~/components/add-to-cart-button.vue';
import GoBackButton from '~/components/go-back-button.vue';

const route = useRoute()
const id = route.params.id

const { getById } = useProducts()
const { data: product } = await getById(id)

const amount = ref({
  value: 1,
  increment: () => amount.value.value++,
  decrement: () => amount.value.value--
})

const actualImg = ref(product.value.thumbnail)
const handleImg = (url = String) => {
  actualImg.value = url
}

</script>

<template>
  <div>
    <GoBackButton previous-page="/products" />
    <div class="grid grid-flow-row min-[775px]:grid-flow-col min-[775px]:grid-cols-[auto_1fr] px-3 gap-10 pb-5 mt-2">
      <!-- Imagenes -->
      <div class="grid gap-2 lg:w-100 xl:w-140">
        <div class="bg-gray-300 aspect-square rounded-xl">
          <img class="size-full object-cover" :src="actualImg" :alt="`photo of ${product.title}`">
        </div>
        <div class="flex gap-2 h-20">
          <div
            v-for="(img, index) in product.images"
            :key="index"
            class="aspect-square bg-gray-200 rounded-xl cursor-pointer hover:brightness-75 transition-all"
            @click="handleImg(img)"
          >
            <img
              class="size-full object-cover"
              :src="img"
              :alt="`image #${index + 1} of ${product.title}`"
            >
          </div>
        </div>
      </div>
      <!-- Informacion -->
      <div class="lg:h-100 xl:h-140 flex flex-col">
        <span class="uppercase font-bold text-purple-500">{{ product.category }}</span>
        <h1 class="text-3xl font-extrabold">{{ product.title }}</h1>
        <hr class="mt-3 mb-5">
        <p class="text-black/60 mb-3">
          {{ product.description }}
        </p>
        <div class="mb-4 flex gap-2 items-center">
          <span>Valoracion: </span>
          <p class="flex gap-2 items-center text-white bg-amber-400 p-2 py-1 rounded-lg font-medium">
            <span>{{ product.rating }}</span>
            <IconStarFilled size="18" />
          </p>
        </div>
        <div class="mt-auto">
          <h2 class="text-4xl font-medium mb-4">${{ product.price }}</h2>
          <div class="flex gap-5 items-center mb-3">
            <div class="bg-gray-200 flex w-fit items-center gap-4 rounded-lg">
              <button class="p-2 pe-0 cursor-pointer hover:bg-red-500/10" @click="amount.decrement">
                <IconMinus />
              </button>
              <input v-model="amount.value" class="focus:outline-0 w-8 text-center">
              <button class="p-2 ps-0 cursor-pointer hover:bg-emerald-500/10" @click="amount.increment">
                <IconPlus />
              </button>
            </div>
            <span>Quedan: {{ product.stock }}</span>
          </div>
          <div class="flex gap-4 h-12">
            <AddToCartButton />
            <button class="flex-1 bg-emerald-600 rounded-md font-medium text-white cursor-pointer hover:bg-emerald-500 shadow-[0px_0px_50px_1px] shadow-emerald-500/60 transition-all">
              Buy now!
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>