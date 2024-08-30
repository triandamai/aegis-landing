<script setup lang="ts">
const props = defineProps<{
  name: string,
  title: string,
  image: string,
  socialLink: string
}>()
</script>

<template>
  <div class="w-full h-max md:w-[28vw] md:h-[28vw] lg:w-[28vw] lg:h-[28vw]">
    <div class="w-full h-max md:w-[20vw] md:h-[20vw] lg:w-[20vw] lg:h-[20vw] flex flex-row justify-center">
      <div class="w-full h-max md:w-[20vw] md:h-[20vw] lg:w-[20vw] lg:h-[20vw]">
        <div
            class="w-full h-[50vh] md:w-[20vw] md:h-[20vw] lg:w-[20vw] lg:h-[20vw] rounded-br-2xl rounded-tl-2xl bg-blue-200 relative">
          <img :alt="name" :src="image" class="absolute bottom-0 w-full h-full  rounded-br-2xl" width="100%"
               height="100%"/>
          <NuxtLink target="_blank" :to="socialLink" class="absolute bottom-0 left-0 bg-white rounded-tr-2xl cursor-pointer">
            <img alt="linkedin team" src="/images/ic-linkedin.svg"
                 class="w-[10vh] h-[10vh] md:w-[4vw] md:h-[4vw] lg:w-[4vw] lg:h-[4vw] px-2 py-2">
          </NuxtLink>
          <div
              class="absolute top-0 right-0 w-[10vh] h-[10vh] md:w-[4vw] md:h-[4vw] lg:w-[4vw] lg:h-[4v2] bg-white rounded-bl-2xl">
          </div>
        </div>
        <div class="w-full h-[10vh] md:w-[20vw] md:h-[4vw] lg:w-[20vw] lg:h-[4vw] flex flex-col justify-center">
          <h1 class="w-full text-center text-lg font-semibold">{{ name }}</h1>
          <p class="w-full text-center">{{ title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>