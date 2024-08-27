<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
import HeaderMain from "~/components/HeaderMain.vue";
import {useScroll} from "~/composables/useScroll";

const {style, styleParent, init, onScroll} = useScroll()

useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

onMounted(() => {
  window.scrollTo(0, 0)
  document.documentElement.classList.add("light")
  init()
})
</script>

<template>
  <main v-on:scroll="onScroll" class="w-screen h-screen relative overflow-x-hidden overflow-y-scroll">
    <HeaderMain :style="style" :parent="styleParent"/>
    <div class="pt-[10vh] sm:pt-[10vh] md:pt-[15vh] lg:pt-[15vh] xl:pt-[15vh]"></div>
    <slot/>
    <MainFooter/>
  </main>
</template>