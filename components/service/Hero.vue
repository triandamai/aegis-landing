<script setup lang="ts">
defineEmits(['create-reservation'])
</script>

<template>
  <section id="hero" class="w-svw h-max sm:h-svh md:h-svh lg:h-svh xl:h-svh sm:px-[6vw] md:px-[6vw] lg:px-[6vw]">
    <!--    DESKTOP -->
    <div class="hidden sm:hidden md:block lg:block rounded-2xl w-full h-[70vh] relative">
      <div class="bg-hero"></div>
      <div class="bg-left-hero">
        <div class="w-[50vw] h-full flex flex-col justify-evenly">
          <h1 class="w-[45vw] text-white sm:text-2xl md:text-5xl lg:text-5xl xl:text-6xl">Ubah Bisnis Anda dengan
            Layanan Kami</h1>
          <p class="w-[40vw] text-white my-1 text-sm md:text-lg lg:text-lg xl:text-lg">Ubah cara Anda menjalankan bisnis
            dengan bantuan AEGIS.ID. Kami
            menyediakan layanan yang membuat
            pengembangan dan pengelolaan bisnis jadi lebih mudah.</p>
          <button @click="$emit('create-reservation')" class="px-10 py-2 bg-white rounded-lg my-1 w-1/2">Booking Layanan</button>
        </div>
      </div>
    </div>
    <!--    MOBILE-->
    <div class="block sm:block md:hidden lg:hidden relative w-svh">
      <div class="w-full h-[70vh] ">
        <div class="bg-hero-mobile"></div>
        <div class="w-full h-[70vh] absolute bottom-0">
          <div class="w-full h-full bg-gradient-to-t from-blue-800 via-blue-600 pt-[25vh] px-[6vw]">
            <h1 class="text-3xl text-center text-white font-semibold mb-8">Ubah Bisnis Anda dengan Layanan Kami</h1>
            <p class="text-center text-white">Ubah cara Anda menjalankan bisnis dengan bantuan AEGIS.ID. Kami
              menyediakan layanan yang membuat pengembangan dan pengelolaan bisnis jadi lebih mudah.</p>
            <div class="px-10 mt-10 flex flex-row justify-center items-center">
              <button  @click="$emit('create-reservation')" class="w-full bg-white rounded-lg px-10 py-3 text-center text-blue-800">Booking Layanan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-hero-mobile {
  background-image: url("/images/services/bg-hero-services-mobile.png");
  background-repeat: no-repeat;
  background-size: cover;
  @apply h-[40vh] w-full rounded-2xl absolute top-0;
}

.bg-hero {
  background-image: url("/images/services/bg-hero-services.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @apply absolute right-0 h-full  sm:w-[80vw]  md:w-full lg:w-full xl:w-full   rounded-br-2xl;
}

.bg-left-hero {
  @apply absolute left-0 h-full w-[85vw] bg-gradient-to-r from-blue-800 via-blue-800 px-20 py-10 rounded-l-2xl;
}
</style>