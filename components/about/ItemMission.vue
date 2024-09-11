<script setup lang="ts">
const props = defineProps<{
  icon: string,
  description: string
}>()
</script>

<template>
  <div class="w-full h-[35vh] md:w-1/3 md:h-max lg:w-[26vw] lg:h-max relative px-4 py-4">
    <div class="px-2 py-2 sm:px-2 sm:py-2 md:px-2 md:py-2 lg:px-10 lg:py-2 xl:px-10 xl:py-2 min-h-[30vh] border border-gray-400 rounded-lg w-full h-full flex flex-col md:flex lg:flex md:flex-col lg:flex-col items-center md:items-start lg:items-start relative">
      <NuxtImg :src="icon" class="mb-6 h-[8vh] w-[8vh]"/>
      <p class="text">{{ description }}</p>
     </div>
  </div>
</template>
<style scoped>
.text{
  @apply text-center w-full md:text-start lg:text-start xl:text-start text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl pr-4 !important;
}
</style>
