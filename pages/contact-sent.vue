<script setup lang="ts">

</script>

<template>
  <NuxtLayout name="landing">
    <section class="w-svw px-[8vw] h-[50vh] flex flex-col justify-center items-center">
      <div class="w-[60vw] h-[50vh] flex flex-row justify-between relative">
        <div class="w-[20vw] h-[50vh] relative">
          <div class="w-[20vw] h-[10vh] relative bg-white flex flex-row justify-end">
            <div class="w-[5vw] h-[10vh] relative">
              <div class="w-[2vw] h-[2vw] bg-blue-400 absolute bottom-0 right-0"></div>
              <div class="w-[2vw] h-[2vw] bg-white absolute bottom-0 right-0 rounded-br-2xl"></div>
            </div>
            <div class="w-[15vw] h-[10vh] bg-blue-400 rounded-tl-2xl"></div>
          </div>
          <div class="w-[32vw] h-[40vh] relative bg-blue-400 rounded-l-2xl">

          </div>
        </div>
        <div class=" w-[40vw] h-[50vh] rounded-r-2xl bg-gradient-to-l from-blue-400 via-blue-400 to-blue-200 relative">
          <div class="bg-shape w-full h-full px-10 py-10 z-999">
            <h1 class="text-6xl mb-4">Terimakasih</h1>
            <p class="mb-6 text-2xl">Data Anda telah berhasil kami terima. Tim kami akan segera memproses permintaan
              Anda.</p>
            <NuxtLink to="/" class="bg-primary rounded-lg text-white py-4 px-6 mt-10">Kembali ke hompage</NuxtLink>
          </div>
        </div>
        <img src="/images/bg-contact-sent.webp" class="w-[20vw] h-[50vh] absolute bottom-0">
        <img src="/images/ic-check.svg" class="absolute top-0 left-0 w-[4vw] h-[4vw]"/>
      </div>
    </section>
  </NuxtLayout>
</template>
<style scoped>

.bg-shape {
  background-image: url("/images/bg-shape-succes-contact.svg");
  background-repeat: no-repeat;
  background-size: cover;
}


</style>