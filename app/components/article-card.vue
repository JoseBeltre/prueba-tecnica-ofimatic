<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true
  },
  user: {
    type: Object,
    required: true
  },
})

const redirectToSinglePage = (id = Intl) => {
  navigateTo(`/posts/${id}`)
}

const { users } = useUsers()
const user = computed(() => {
  return users.value.find(user => user.id === props.post.userId) || null
})


</script>

<template>
  <article
    class="border border-black/20 rounded-lg overflow-hidden p-2 cursor-pointer group hover:shadow-md transition-all font-sans"
    @click="redirectToSinglePage(post.id)">
    <div class="p-2 mt-1 flex flex-col h-full">
      <div class="flex justify-between flex-col mb-6">
        <h3 class="text-xl font-semibold leading-5 tracking-tight mb-3">{{ post.title }}</h3>
        <p class="text-sm text-gray-500 leading-3">
          {{ post.body.split('.')[1] }}
        </p>
        <div class="flex flex-wrap gap-2 text-pink-600 text-sm">
          <span v-for="(tag, index) in post.tags" :key="index">#{{ tag }}</span>
        </div>
      </div>
      <div class="flex gap-2 mt-auto">
        <div class="size-5 overflow-hidden rounded-full sm:hidden md:inline-block">
          <img class="object-cover size-full " :src="user?.image" :alt="user?.username">
        </div>
        <h4 class="text-sm">By {{ user?.firstName + ' ' + user?.lastName }}</h4>
      </div>
    </div>
  </article>
</template>