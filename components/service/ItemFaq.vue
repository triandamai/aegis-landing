<script setup lang="ts">
defineProps<{
  question:string,
  answer:string
}>()

const isOpen = ref(false)
</script>

<template>
  <div class="w-full h-max sm:w-full md:w-[42vw] lg:w-[42vw] xl:w-[42vw] py-4 border border-gray-200 m-2 rounded-2xl">
    <div class="w-full px-4 py-4 flex flex-row justify-between items-center">
      <h1 class="w-[80%] text-lg sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl text-gray-800">{{question}}</h1>
      <span @click="isOpen = !isOpen" class="ml-2 w-[50px] h-[50px] bg-blue-200 rounded-md p-1 flex flex-row justify-center items-center cursor-pointer"><IconPlus class="w-full h-full text-gray-600"/></span>
    </div>
    <div v-show="isOpen" class="w-full px-4 py-1 flex flex-col justify-between items-start">
      <p>{{ answer }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>