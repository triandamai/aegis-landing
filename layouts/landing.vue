<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
import HeaderMain from "~/components/HeaderMain.vue";
import {useScroll} from "~/composables/useScroll";

const {style,init,onScroll} = useScroll()

onMounted(()=>{
  window.scrollTo(0,0)
  init()
})
</script>

<template>
  <main class="w-screen h-screen">
    <HeaderMain :style="style"/>
    <div v-on:scroll="onScroll" class="pt-[15vh] w-screen h-screen overflow-x-hidden overflow-y-scroll">
      <slot/>
      <MainFooter/>
    </div>
  </main>
</template>