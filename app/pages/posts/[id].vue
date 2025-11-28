<script setup>
import { IconEye, IconThumbDown, IconThumbUp } from '@tabler/icons-vue';

definePageMeta({
  title: 'Posts - Ofimatic',
  middleware: ['auth']
})

useHead({
  title: `${post?.title || 'Article'} - GamingHUB Blog`,
  description: post?.body?.slice(0, 160) || 'Read this interesting article on GamingHUB blog about technology and gaming.',
  ogTitle: `${post?.title || 'Article'} - GamingHUB Blog`,
  ogDescription: post?.body?.slice(0, 200) || 'Article from GamingHUB blog',
  ogType: 'article'
})

const route = useRoute()
const id = route.params.id

const { getById, getComments } = usePosts();
const { getById: getUserById } = useUsers();
const { data: post } = await getById(id)
const { data: userPost } = await getUserById(post.value.userId)
const { data: comments } = await getComments(post.value.userId)

</script>
<template>
  <div class="font-sans">
    <GoBackButton to="/posts/" class="mb-3" />
    <div class="p-5  rounded-2xl border border-black/20">
      <h2 class="text-4xl uppercase font-black mb-1 font-poppins">{{ post.title }}</h2>
      <div class="flex gap-2 mb-3 items-center p-2 bg-[#a6bffe] w-fit rounded-full pe-6 font-bold my-3 text-sm">
        <div class="size-8 overflow-hidden rounded-full sm:hidden md:inline-block bg-gray-100">
          <img class="object-cover size-full " :src="userPost?.image" :alt="userPost?.username">
        </div>
        <h4 class="">By {{ userPost?.firstName + ' ' + userPost?.lastName }}</h4>
      </div>
      <p>
        {{ post.body }}
      </p>
      <div class="flex flex-wrap gap-2 items-center my-4 font-medium">
        Etiquetas:
        <span v-for="(tag, index) in post.tags" :key="index" class="text-pink-600 text-sm">#{{ tag }}</span>
      </div>
      <div>
        <ul class="flex gap-3 items-center">
          <li class="flex items-center flex-row-reverse gap-1">
            <IconEye />
            <span class="text-xs">{{ post.views }}</span>
          </li>
          <li class="flex items-center flex-row-reverse gap-1">
            <IconThumbUp />
            <span class="text-xs">{{ post.reactions.likes }}</span>
          </li>
          <li class="flex items-center flex-row-reverse gap-1">
            <IconThumbDown />
            <span class="text-xs">{{ post.reactions.dislikes }}</span>
          </li>
        </ul>
      </div>
    </div>
    <section class="my-2 p-3 bg-gray-100 rounded-xl">
      <h2 class="text-xl font-medium mb-3">Comentarios:</h2>
      <div v-for="comment in comments.comments" :key="comment.id" class="ms-2 bg-gray-200 p-2 rounded-lg">
        <h4 class="font-bold text-black/90">~ {{ comment?.user.fullName }}</h4>
        <p class="ps-5 text-black/80">{{ comment?.body }}</p>
      </div>
    </section>
  </div>
</template>