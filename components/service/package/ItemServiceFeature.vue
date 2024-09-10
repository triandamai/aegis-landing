<script setup lang="ts">
defineProps<{
  image:string|null,
  title: string|null,
  subtitle:string|null
}>()
const {publicServiceUrl} = useFile()
</script>

<template>
  <div class="w-1/2 h-max my-4 px-2">
    <div class="w-full flex flex-row justify-start items-center">
      <div class="w-[25vh] h-[15vh]">
        <NuxtImg :src="publicServiceUrl(image ?? '')" class="w-full h-full" width="100%" height="100%"/>
      </div>
      <div class="ml-2">
        <h1 class="text-2xl font-semibold">{{title}}</h1>
        <p>{{subtitle}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>