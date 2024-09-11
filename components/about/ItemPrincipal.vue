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
  <div class="w-[88vw] h-[40vh] md:w-[24vw] md:h-max lg:w-[24vw] lg:h-[40vh] flex flex-col justify-between mx-[2vw]">
    <div class="w-full h-[30vh] md:h-[30vh] lg:h-[35vh]">
      <div class="w-full h-full px-2 py-2 sm:px-4 sm:py-4 md:px-4 md:py-4 lg:px-10 lg:py-10 xl:px-10 xl:py-10 rounded-t-2xl rounded-br-2xl bg-gradient-to-tl" :class="bodyStyle">
        <NuxtImg alt="Icon" :src="icon"/>
        <h1 class="my-2 text-2xl">{{title}}</h1>
        <p>{{description}}</p>
      </div>
    </div>
    <div class="w-[88vw] h-[10vh] md:w-[24vw] md:h-[8vh] lg:w-[24vw] lg:h-[8vh] flex flex-row items-start md:items-center lg:items-center justify-between">
        <div class="w-[58vw] h-[5vh] md:w-[20vw] md:h-[8vh] lg:w-[20vw] lg:h-[8vh] rounded-b-2xl bg-gradient-to-tl" :class="footerStyle">

        </div>
      <div class="w-[30vw] h-[5vh] md:w-[4vw] md:h-[8vh] lg:w-[4vw] lg:h-[8vh] bg-white rounded-tl-2xl relative">
        <div class="w-[5vh] h-full absolute  left-0 top-0" :class="cutoutColor"></div>
        <div class="w-[5vh] h-full bg-white rounded-tl-2xl absolute left-0 top-0"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>