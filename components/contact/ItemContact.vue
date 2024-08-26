<script setup lang="ts">
const props = defineProps<{
  name: string,
  description: string,
  icon: string
}>()
</script>

<template>
  <div class="w-[44vw] h-[30vh] flex flex-row justify-center relative cursor-pointer">
    <div class="w-[35vw] h-[30vh] bg-white rounded-l-2xl rounded-br-2xl px-10 py-5">
      <h1 class="w-full text-2xl mb-6">{{ name }}</h1>
      <p>
        {{ description }}
      </p>
    </div>
    <div class="w-[5vw] h-[30vh] flex flex-col">
      <div class="w-[5vw] h-[20vh] bg-white rounded-tr-2xl rounded-br-2xl"></div>
      <div class="w-[5vw] h-[10vh] rounded-tl-2xl relative">
        <div class="absolute bg-white w-[2vh] h-[2vh] top-0 left-0"></div>
        <div class="absolute bg-gray-200 w-[2vh] h-[2vh] top-0 left-0 rounded-tl-2xl"></div>
        <img class="absolute bottom-0 right-0" :src="icon"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>