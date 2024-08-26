<script setup lang="ts">
const props = defineProps<{
  icon:string,
  title:string,
  description:string,
  bodyStyle:string,
  footerStyle:string,
  cutoutColor:string
}>()
</script>

<template>
  <div class="w-[24vw] h-[20vw] flex flex-col justify-between mx-[2vw]">
    <div class="w-full h-[16vw] top-0">
      <div class="w-full h-full px-10 py-10 rounded-t-2xl rounded-br-2xl bg-gradient-to-tl" :class="bodyStyle">
        <img :src="icon">
        <h1 class="my-2 text-2xl">{{title}}</h1>
        <p>{{description}}</p>
      </div>
    </div>
    <div class="w-[24vw] h-[4vw] relative bottom-0">
        <div class="w-[18vw] h-[4vw] absolute left-0 rounded-b-2xl bg-gradient-to-tl" :class="footerStyle">

        </div>
      <div class="absolute right-0 w-[6vw] h-[4vw] bg-white rounded-tl-2xl">
        <div class="w-[2vw] h-[2vw] absolute  left-0 top-0" :class="cutoutColor"></div>
        <div class="w-[4vw] h-[4vw] bg-white rounded-tl-2xl absolute left-0 top-0"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>