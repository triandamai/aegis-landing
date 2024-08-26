<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="bg">
      <img class="w-full" src="/images/main/img-product-1.png"/>
      <div class="w-full">
        <p class="text-2xl mb-4 mt-4">Analisis Financial Planning</p>
        <p class="text-md">Rencanakan dan kelola keuangan Anda dengan strategi yang dirancang untuk kesuksesan jangka
          panjang.</p>
        <div class="w-full mt-8">
          <p class="my-2"><Icon name="uil:check"/> Perencanaan Anggaran</p>
          <p class="my-2"><Icon name="uil:check"/> Perencanaan Anggaran</p>
          <p class="my-2"><Icon name="uil:check"/> Perencanaan Anggaran</p>
        </div>
      </div>
      <div class="absolute bottom-0 right-0 px-5 py-te">
        <Icon name="uil:arrow-right" size="30px"/>
      </div>
    </div>
  </div>

</template>

<style scoped>
.container {
  @apply mb-8 w-[25vw] h-[35vw] relative bg-transparent flex flex-row justify-center;
}

.bg {
  background-image: url("/images/main/bg-product.svg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  @apply relative w-[20vw] h-[35vw] px-5 py-5;
}
</style>