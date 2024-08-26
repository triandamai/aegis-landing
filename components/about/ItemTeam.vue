<script setup lang="ts">
const props = defineProps<{
  name: string,
  title: string,
  image: string,
  socialLink: string
}>()
</script>

<template>
  <div class="w-[29vw] h-[25vw] flex flex-row justify-center">
    <div class="w-[20vw] h-[24vw]">
      <div class="w-[20vw] h-[20vw] rounded-br-2xl rounded-tl-2xl bg-blue-200 relative">
        <img :src="image" class="absolute bottom-0 w-full h-full  rounded-br-2xl" width="100%" height="100%"/>
        <div class="absolute bottom-0 left-0 bg-white rounded-tr-2xl">
          <img src="/images/ic-linkedin.svg">
        </div>
        <div class="absolute top-0 right-0 w-[2vw] h-[2vw] bg-white rounded-bl-2xl">
        </div>
      </div>
      <div class="w-[20vw] h-[4vw] flex flex-col justify-center">
        <h1 class="w-full text-center text-lg font-semibold">{{ name }}</h1>
        <p class="w-full text-center">{{ title }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>