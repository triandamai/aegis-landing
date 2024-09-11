<script setup lang="ts">
defineProps<{
  name:string|null,
  features:Array<DataDetailFeatureService>,
}>()

defineEmits(['click'])
</script>

<template>
  <div class="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-1/2 sm:h1/2 md:h-2/3 lg:h-full xl:h-full px-4 sm:px-2 md:px-2 lg:px-2 xl:px-4 mt-8 mb-8 flex flex-row justify-center">
    <div class="bg relative w-full h-full sm:w-full sm:h-full md:w-full md:h-full lg:w-full lg:h-full xl:w-full xl:h-full flex flex-col justify-between items-center rounded-lg border border-gray-400 px-4 py-4">
      <div class="w-full">
        <NuxtImg class="w-full h-1/3" src="/images/main/img-product-1.webp"/>
        <p class="text-lg sm:text-lg md:text-2xl lg:text-3xl xl:text-3xl my-6 font-semibold">{{name}}</p>
        <p class="text-md mt-4">Rencanakan dan kelola keuangan Anda dengan strategi yang dirancang untuk kesuksesan jangka panjang.</p>

        <p v-for="item in features" class="my-4 flex flex-row"><IconCheck class="mx-2 text-blue-800" /> {{item.name}}</p>
      </div>
      <div class="w-full">
        <button @click="$emit('click')" class="w-full bg-blue-800 text-white rounded-lg py-3 px-8">Pelajari lebih lanjut</button>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>