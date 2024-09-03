<script setup lang="ts">

</script>

<template>
<div class="w-full h-max min-h-[40vh] flex flex-row flex-wrap justify-evenly items-center bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 py-4 px-10 mt-20">
  <div class="container-left">
    <h1 class="text-left">Siap Menjadi Bagian dari AEGIS?</h1>
  </div>
  <div class="container-right">
    <h1 class="text-right">Temukan bagaimana AEGIS bisa membawa bisnis Anda ke level berikutnya. Bergabung atau hubungi kami sekarang</h1>
    <span class="w-full mt-6 flex flex-row justify-evenly">
      <NuxtLink to="/register" class="text-blue-800 bg-white border-2 border-white rounded-lg px-6 py-2 mr-1 w-full text-center">Daftar Gratis</NuxtLink>
      <NuxtLink to="/contact" class="bg-transparent border-2 border-white text-white rounded-lg px-6 py-2 ml-1 w-full text-center">Hubungi Kami</NuxtLink>
    </span>
  </div>
</div>
</template>

<style scoped>
.container-left{
  @apply w-full h-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 !important;
}
.text-left{
  @apply text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl text-white font-semibold text-center sm:text-center md:text-start lg:text-start xl:text-start !important;
}
.container-right{
  @apply w-full h-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 flex flex-col justify-center !important;
}
.text-right{
  @apply text-lg text-white text-center sm:text-center md:text-start lg:text-start xl:text-start !important;
}
</style>