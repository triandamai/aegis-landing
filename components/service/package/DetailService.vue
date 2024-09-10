<script setup lang="ts">
defineProps<{
  name?:string,
  description?:string,
  image?:string,
}>()

const {publicServiceUrl} = useFile()
</script>

<template>
<section class="w-svw h-max py-8 sm:px-[6vw] md:px-[6vw] lg:px-[6vw]">
  <div class="w-full h-1/2 flex flex-row justify-start">
    <div class="w-1/3 h-[50vh] px-4 py-4">
      <NuxtImg class="w-full h-full" :src="publicServiceUrl(image ?? '')"/>
    </div>
    <div class="w-1/2 flex flex-col justify-center items-start">
      <h1 class="text-5xl font-bold mb-4">UMKM {{name ?? ''}}</h1>
      <p class="text-lg">{{description ?? ''}}</p>
    </div>
  </div>
</section>
</template>

<style scoped>

</style>