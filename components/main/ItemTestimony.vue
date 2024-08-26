<script setup lang="ts">

const props = defineProps<{
  message: string,
  name:string,
  web:string,
  avatar:string,
  avatarPosition:'top'|'bottom'
}>()
</script>

<template>
  <div class="w-[35vw] px-4 py-4 rounded-2xl border border-gray-200 m-4">
    <div v-show="avatarPosition == 'top'" class="w-full flex flex-row justify-start">
      <img class="w-[2vw] h-[2vw]" :src="avatar">
      <div class="ml-2">
        <p class="text-lg">{{ name }}</p>
        <p>{{web}}</p>
      </div>
    </div>
    <div class="mt-10 mb-10">
      <p class="px-4">{{ message}}</p>
    </div>
    <div v-show="avatarPosition == 'bottom'" class="w-full flex flex-row justify-start">
      <img class="w-[2vw] h-[2vw]" :src="avatar">
      <div class="ml-2">
        <p class="text-lg">{{ name }}</p>
        <p>{{web}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>