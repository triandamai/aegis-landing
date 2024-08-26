<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
import HeaderMain from "~/components/HeaderMain.vue";
import {useScroll} from "~/composables/useScroll";
const {style,init,onScroll} = useScroll()

useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

onMounted(()=>{
  window.scrollTo(0,0)
  init()
})
</script>

<template>
  <main v-on:scroll="onScroll" class="w-screen h-screen overflow-x-hidden overflow-y-scroll">
    <HeaderMain :style="style"/>
    <div  class="pt-[15vh]">
      <slot/>
    </div>
    <MainFooter/>
  </main>
</template>