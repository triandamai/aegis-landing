<script setup lang="ts">

</script>

<template>
  <div class="container w-full h-[60vh] mb-2 md:w-[28vw] md:h-[50vw] relative bg-transparent flex flex-row justify-center">
    <div class="bg relative w-full h-full md:w-[28vw] md:h-[50vw] flex flex-col justify-center items-center">
      <img class="w-[78vw] md:w-[26vw] h-[20vh] md:h-[20vh] absolute top-0 mt-2 md:mt-16" src="/images/main/img-product-1.png"/>
      <div class="w-[78vw] md:w-[26vw] h-[50vh] md:h-[35vh] absolute top-0 mt-[22vh] md:mt-[28vh] md:px-4">
        <p class="text-3xl md:text-4xl mb-4 mt-2 md:mb-6 md:mt-4">Analisis Financial Planning</p>
        <p class="text-lg md:text-2xl">Rencanakan dan kelola keuangan Anda dengan strategi yang dirancang untuk kesuksesan jangka
          panjang.</p>
        <div class="w-full text-lg md:text-2xl md:px-4 mt-6 md:mt-8">
          <p class="my-1 md:my-2"><Icon name="uil:check"/> Perencanaan Anggaran</p>
          <p class="my-1 md:my-2"><Icon name="uil:check"/> Perencanaan Anggaran</p>
          <p class="my-1 md:my-2"><Icon name="uil:check"/> Perencanaan Anggaran</p>
        </div>
      </div>
      <div class="absolute bottom-0 right-0 mr-8 md:mr-2 md:pb-10">
        <Icon name="uil:arrow-right" class="w-[4vh] h-[5vh] md:w-[6vh] md:h-[6vh]" />
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