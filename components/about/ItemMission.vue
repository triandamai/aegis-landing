<script setup lang="ts">
const props = defineProps<{
  icon: string,
  description: string
}>()
</script>

<template>
  <div class="w-full h-[35vh] md:w-[26vw] md:h-[18vw] lg:w-[26vw] lg:h-[18vw] relative px-10 py-10">
    <div class="w-full h-full flex flex-col md:flex lg:flex md:flex-col lg:flex-col items-center md:items-start lg:items-start  relative hover:bg-blue-200 px-10 py-2">
      <img :src="icon" class="mb-6 h-[8vh] w-[8vh]"/>
      <p class="text-center w-full md:text-start lg:text-start">{{ description }}</p>
      <div class="absolute h-[2vh] w-[2vh] bottom-0 right-0 bg-blue-200 rounded-tl-2xl"></div>
    </div>
  </div>
</template>

<style scoped>

</style>