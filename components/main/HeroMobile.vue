<script setup lang="ts">

</script>

<template>
  <section id="hero-mobile" class="block sm:block md:hidden lg:hidden xl:hidden h-screen px-[4vw]">
    <div class="image-mobile"></div>
    <div class="w-[92vw] h-[22vh] flex flex-row justify-between items-center">
      <div class="w-[85vw] h-[22vh] text-3xl font-semibold text-white bg-blue-800 rounded-2xl px-2 py-2">
        <h1>Dukungan Strategis</h1>
        <h1>Untuk Setiap</h1>
        <h1>Pertumbuhan Bisnis</h1>
        <h1>UMKM Indonesia</h1>
      </div>
      <div class="w-[7vw] h-[22vh]">
        <div class="w-[7vw] h-[5vh] relative">
          <div class="absolute bottom-0 left-0 w-[2vh] h-[2vh] bg-primary"></div>
          <div class="absolute bottom-0 left-0 w-[2vh] h-[2vh] bg-white rounded-bl-2xl"></div>
        </div>
        <div class="w-[7vw] h-[10vh] bg-blue-800 rounded-r-2xl"></div>
        <div class="w-[7vw] h-[5vh] relative">
          <div class="absolute top-0 left-0 w-[2vh] h-[2vh] bg-primary"></div>
          <div class="absolute top-0 left-0 w-[2vh] h-[2vh] bg-white rounded-tl-2xl"></div>
        </div>
      </div>
    </div>
    <div class="mt-2 flex flex-col">
      <p class="text-lg">AEGIS hadir dari validasi ide awal, pengurusan legalitas, akses pendanaan untuk membantu UMKM mencapai potensi maksimalnya dengan layanan terpadu yang terpercaya.</p>
      <NuxtLink to="/register" class="w-full bg-blue-800 text-white border border-blue-800 px-2 py-2 rounded-lg mt-2 mb-2 text-center">Gabung AEGIS</NuxtLink>
      <NuxtLink to="/about" class="w-full bg-white text-blue-800 border border-blue-800 px-2 py-2 rounded-lg mt-2 mb-2 text-center">Tentang Kami</NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.text-hero {
  @apply sm:text-6xl md:text-5xl lg:text-5xl xl:text-6xl text-white;
}

.container-image-left{
  @apply relative rounded-b-2xl w-[38vw] h-[25vh] md:w-[46vw] md:h-max lg:w-[47vw] lg:h-[50vh] xl:w-[45vw] xl:h-full ;
}
.image-left {
  background-image: url("/images/main/hero-left.png");
  background-size: contain;
  background-repeat: no-repeat;
  @apply h-[50vh] mt-[20vh] w-full absolute left-0 top-0;
 }

.container-text-left{
  @apply relative w-[40vw] h-full flex flex-col justify-end ml-4;
}
.text-left {
  @apply absolute top-0 w-[40vw] flex flex-col justify-end;
}

.image-right {
  background-image: url("/images/main/hero-right.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  @apply w-[20vw] md:w-[15vw] md:h-[13vw] lg:w-[12vw] lg:h-[25vh] xl:w-[10vw] xl:h-[28vh] lg:mr-[3vw] xl:mr-0;
}

.image-mobile{
  background-image: url("/images/main/m/bg-hero.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  @apply w-full h-[25vh] sm:h-[50vh] md:h-[30vh] lg:h-[60vh] xl:h-[60vh] mb-2 rounded-b-2xl;
}
</style>