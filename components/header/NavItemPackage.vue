<script setup lang="ts">
defineProps<{
  title: string,
  text:string,
  icon:string,
  slug:string
}>()

defineEmits(['refresh'])

const {publicServiceUrl} = useFile()
</script>

<template>
  <div class="w-1/3 pr-2">
   <div class="w-full rounded-2xl pl-2 pb-2 shadow-md shadow-gray-300 cursor-pointer">
     <div class="my-2 flex flex-row justify-between">
       <div class="w-2/3 ">
         <span class="w-full flex flex-row items-center font-semibold">{{title}}</span>
         <div>
           <p class="text-sm">{{text}}</p>
         </div>
       </div>
       <div class="container-right">
         <div class="right" :style="`background-image:url(${publicServiceUrl(icon)})`"></div>
       </div>
     </div>
     <div class="w-full">
       <NuxtLink @click="$emit('refresh')" :to="`/packages/${slug}`" class="text-blue-600 flex flex-row justify-start items-center">Pelajari <IconArrowRight class="ml-2"/></NuxtLink>
     </div>
   </div>
  </div>
</template>

<style scoped>
.right{
  background-size: contain;
  background-repeat: no-repeat;
  @apply w-full h-full;
}
.container-right{
  @apply w-[10vh] h-[10vh] bg-gradient-to-bl from-blue-100 via-blue-50  rounded-bl-3xl rounded-tr-2xl;
}
</style>