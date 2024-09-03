<script setup lang="ts">
defineProps<{
  name: string,
  description: string,
  icon: string
}>()
</script>

<template>
  <div class="w-[92vw] h-[30vh] sm:w-[92vw] sm:h-[25vh] md:w-[44vw] md:h-[35vh] lg:w-[44vw] lg:h-[30vh] xl:w-[44vw] xl:h-[30vh] flex flex-row justify-center relative cursor-pointer my-2">
    <div class="w-[80vw] h-[25vh] min-h-full sm:w-[80vw] sm:h-[25vh] md:w-[35vw] md:h-max lg:w-[35vw] lg:h-[30vh] xl:w-[35vw] xl:h-[30vh] bg-white rounded-l-2xl rounded-br-2xl px-10 py-5">
      <h1 class="w-full text-2xl mb-6">{{ name }}</h1>
      <p>
        {{ description }}
      </p>
    </div>
    <div class="w-[12vw] h-[25vh] sm:w-[8vw] sm:h-[25vh] md:w-[5vw] md:h-[30vh] lg:w-[5vw] lg:h-[30vh] xl:w-[5vw] xl:h-[30vh] flex flex-col">
      <div class="w-[12vw] h-[22vh] sm:w-[8vw] sm:h-[22vh] md:w-[5vw] md:h-[20vh] lg:w-[5vw] lg:h-[20vh] xl:w-[5vw] xl:h-[20vh] bg-white rounded-tr-2xl rounded-br-2xl"></div>
      <div class="w-[12vw] h-[8vh] sm:w-[5vw] sm:h-[10vh] md:w-[5vw] md:h-[10vh] lg:w-[5vw] lg:h-[10vh] xl:w-[5vw] xl:h-[10vh] rounded-tl-2xl relative">
        <div class="absolute bg-white w-[12vw] h-[2vh] top-0 left-0"></div>
        <div class="absolute bg-gray-200 w-[12vw] h-[2vh] top-0 left-0 rounded-tl-2xl"></div>
        <NuxtImg class="absolute top-0 left-0 ml-2 mt-2 sm:h-[6vw] sm:w-[6vw]  md:h-[4vw] md:w-[4vw] lg:h-[4vw] lg:w-[4vw] xl:h-[4vw] xl:w-[4vw]" :src="icon"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>