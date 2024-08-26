<script setup lang="ts">
const props = defineProps<{
  icon: string,
  description: string
}>()
</script>

<template>
  <div class="w-[26vw] h-[18vw] relative px-10 py-10">
    <div class="w-full h-full relative hover:bg-blue-200 px-10 py-2">
      <img :src="icon" class="mb-6 h-[8vh] w-[8vh]"/>
      <p>{{ description }}</p>
      <div class="absolute h-[2vh] w-[2vh] bottom-0 right-0 bg-blue-200 rounded-tl-2xl"></div>
    </div>
  </div>
</template>

<style scoped>

</style>