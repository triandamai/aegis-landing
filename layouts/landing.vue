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

const {alert} = useAlert()

onMounted(() => {
  window.scrollTo(0, 0)
  document.documentElement.classList.add("light")
  init()
})
</script>

<template>
  <main v-on:scroll="onScroll" class="w-screen h-screen relative overflow-x-hidden overflow-y-scroll">
    <div v-show="alert.show" class="fixed top-0 right-0 z-40 w-[88vw] mt-[10vh] md:mt-[4vh] lg:mt-[4vh] xl:mt-[4vh] md:w-[30vw] lg:w-[30vh] xl:w-[30vh] mx-10">
      <!--   SUCCESS   -->
      <div v-if="alert.type == 'success'" class="bg-green-100 border border-green-400 py-2 px-4 rounded-lg relative shadow-gray-300">
        <div class="w-full flex flex-row justify-between items-center">
          <p class="opacity-100 text-green-700">{{ alert.message }}</p>
          <span class="absolute right-0 mr-4  flex flex-row justify-end items-center"><IconPlus/></span>
        </div>
      </div>
      <!--  INFO    -->
      <div v-if="alert.type == 'info'" class="bg-blue-100 border border-blue-400 py-2 px-4 rounded-lg relative shadow-gray-300">
        <div class="w-full flex flex-row justify-between items-center">
          <p class="opacity-100 text-blue-600">{{ alert.message }}</p>
          <span class="absolute right-0 mr-4  flex flex-row justify-end items-center"><IconPlus/></span>
        </div>
      </div>
      <!--   ERROR   -->
      <div v-if="alert.type == 'error'" class="bg-red-100 border border-red-400 text-red-700 py-2 px-4 rounded-lg relative shadow-gray-300">
        <div class="w-full flex flex-row justify-between items-center">
          <p class="opacity-100 text-red-700">{{ alert.message }}</p>
          <span class="absolute right-0 mr-4  flex flex-row justify-end items-center"><IconPlus/></span>
        </div>
      </div>
      <!--   WARNING   -->
      <div v-if="alert.type == 'warning'" class="bg-orange-100 border border-orange-400 text-red-700 py-2 px-4 rounded-lg relative shadow-gray-300">
        <div class="w-full flex flex-row justify-between items-center">
          <p class="opacity-100 text-orange-700">{{ alert.message }}</p>
          <span class="absolute right-0 mr-4  flex flex-row justify-end items-center"><IconPlus/></span>
        </div>
      </div>
    </div>
    <HeaderMain :style="style" :parent="styleParent"/>
    <div class="pt-[10vh] sm:pt-[10vh] md:pt-[15vh] lg:pt-[15vh] xl:pt-[15vh]"></div>
    <slot/>
    <MainFooter/>
  </main>
</template>