<script setup lang="ts">

</script>

<template>
  <div class="container w-full h-[60vh] mb-4 sm:w-full sm:h-[90vw] md:w-[28vw] md:h-[60vw] relative bg-transparent flex flex-row justify-center">
    <div class="bg relative w-full h-full sm:w-full sm:h-[80vw md:w-[28vw] md:h-[60vw] flex flex-col justify-center items-center">
      <NuxtImg class="w-[70vw] sm:w-[50vw] md:w-[26vw] h-[20vh] md:h-[15vh] absolute top-0 mt-2 md:mt-28" src="/images/main/img-product-1.webp"/>
      <div class="w-[78vw] md:w-[26vw] h-[50vh] md:h-[35vh] absolute top-0 mt-[22vh] md:mt-[28vh] ">
        <p class="px-18 sm:px-15 md:px-4 lg:px-4 xl:px-4  text-3xl md:text-4xl mb-4 mt-2 md:mb-6 md:mt-4">Analisis Financial Planning</p>
        <p class="px-18 sm:px-15 md:px-4 lg:px-4 xl:px-4 text-sm sm:text-sm md:text-lg text-start">Rencanakan dan kelola keuangan Anda dengan strategi yang dirancang untuk kesuksesan jangka
          panjang.</p>
        <div class="w-full px-18 sm:px-15 md:px-4 lg:px-4 xl:px-4 text-lg sm:text-sm md:text-sm mt-6 md:mt-8">
          <p class="my-1 md:my-2 flex flex-row"><IconCheck class="mx-2" /> Perencanaan Anggaran</p>
          <p class="my-1 md:my-2 flex flex-row"><IconCheck class="mx-2"/> Perencanaan Anggaran</p>
          <p class="my-1 md:my-2 flex flex-row"><IconCheck class="mx-2"/> Perencanaan Anggaran</p>
        </div>
      </div>
      <div class="absolute bottom-0 right-0 mr-8 sm:mr-32 md:mr-28 lg:mr-2 xl:mr-2 pb-5 md:pb-24 lg:pb-24">
        <IconArrowRight class="w-[4vh] h-[5vh sm:w-[6vh] sm:h-[6vh] md:w-[6vh] md:h-[6vh] lg:w-[6vh] lg:h-[6vh] xl:w-[6vh] xl:h-[6vh]" />
      </div>
    </div>
  </div>

</template>

<style scoped>
.bg {
  background-image: url("/images/main/bg-product.svg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>