<script setup lang="ts">
const props = defineProps<{
  name:string|null,
  slug:string|null
}>()

watch(()=>props.name,(old,newV)=>{
  console.log(newV,old)
})
</script>

<template>
  <section id="hero" class="w-svw h-max sm:px-[6vw] md:px-[6vw] lg:px-[6vw]">
    <div class="banner">
      <div class="text-white w-1/3 h-[40vh] flex flex-col justify-center items-start">
        <h1 class="font-semibold text-4xl">Layanan {{name}}</h1>
        <p class="text-lg">Menumbuhkan Bisnis Anda melalui Layanan dan Platform digital AEGIS.</p>
      </div>
    </div>
  </section>
  <div class="w-full border-y py-2 bg-gray-100 border-gray-300 sm:px-[6vw] md:px-[6vw] lg:px-[6vw]">
    <span class="w-full flex flex-row justify-start text-sm">
      <NuxtLink to="/" class="flex flex-row justify-start items-center text-blue-600">Beranda <IconArrowForward/></NuxtLink>
      <NuxtLink to="/services" class="flex flex-row justify-start items-center text-blue-600 ml-1">Layanan <IconArrowForward/></NuxtLink>
      <NuxtLink :to="slug" class="flex flex-row justify-start items-center ml-1">{{name}}<IconArrowForward/></NuxtLink>
    </span>
  </div>
</template>

<style scoped>
.banner{
  background-image: url("/images/services/bg-hero.webp") ;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  @apply w-full min-h-80 rounded-t-2xl px-4 py-4;
}
</style>