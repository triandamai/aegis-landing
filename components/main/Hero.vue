<script setup lang="ts">

</script>

<template>
  <section id="hero" class="hidden sm:hidden md:hidden lg:block xl:block w-svw h-screen px-[6vw] relative">
    <div class="w-max absolute top-0">
      <!-- text 1   -->
      <div class="w-max flex flex-row justify-start">
        <div
            class="w-[60vw] h-[8vh] md:w-[74vw] md:h-[15vh] lg:w-[74vw] lg:h-max xl:w-[77vw] xl:h-max bg-blue-800 rounded-t-2xl rounded-bl-2xl">
          <p class="text-hero px-5 py-5 xl:px-2 overflow-ellipsis line-clamp-1">Dukungan Strategis Untuk Setiap</p>
        </div>
      </div>
      <!-- text 2  -->
      <div class="w-[88vw] flex flex-row justify-start">
        <div class="w-[35vw] md:w-[28vw] xl:w-[27vw] flex flex-row justify-end">
          <div class="w-[10vw] flex flex-row justify-end relative">
            <div class="h-4 w-4 bg-blue-800 absolute"></div>
            <div class="h-4 w-4 bg-white rounded-tr-2xl absolute"></div>
          </div>
        </div>
        <div
            class="w-[50vw] md:w-[46vw] md:h-[15vh] xl:w-[50vw] bg-blue-800 rounded-bl-2xl flex flex-row justify-start items-center">
          <p class="text-hero w-full text-center pr-5 pl-5 py-5 overflow-ellipsis line-clamp-1">Pertumbuhan Bisnis</p>
        </div>
        <div class="w-[5vw] flex flex-row justify-start relative">
          <div class="h-4 w-4 bg-blue-800 absolute bottom-0"></div>
          <div class="h-4 w-4 bg-white rounded-bl-2xl absolute bottom-0"></div>
        </div>
      </div>
      <!-- text 3 -->
      <div class="w-[88vw] flex flex-row justify-start">
        <div class="w-[40vw] md:w-[50vw] flex flex-row justify-end">
          <div class="w-[10vw] flex flex-row justify-end relative">
            <div class="h-4 w-4 bg-blue-800 absolute"></div>
            <div class="h-4 w-4 bg-white rounded-tr-2xl absolute"></div>
          </div>
        </div>
        <div class="w-[40vw] md:w-[40vw] md:h-[15vh] xl:w-[50vw] bg-blue-800 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl">
          <p class="text-hero overflow-ellipsis line-clamp-1 px-5 py-5">UMKM Indonesia</p>
        </div>
      </div>
    </div>
    <!--  image left and right  -->
    <div class="w-[88vw] h-[30vh] md:h-full absolute md:top-0 xl:top-0 flex flex-col justify-evenly">
      <div class="h-full w-svw flex flex-row flex-nowrap justify-start relative">
        <div class="container-image-left">
          <div class="image-left"></div>
        </div>
       <div class="container-text-left">
         <div class="text-left pt-[50vh]">
           <div class="w-full h-min">
             <p>AEGIS hadir dari validasi ide awal, pengurusan legalitas, akses pendanaan untuk membantu UMKM mencapai
               potensi maksimalnya dengan layanan terpadu yang terpercaya.</p>
             <div class="mt-8 hidden md:block">
               <NuxtLink to="/services" class="bg-blue-800 border border-blue-800 rounded-lg px-8 py-3 text-white hover:cursor-pointer hover:bg-blue-600 hover:border-blue-600">
                 Gabung AEGIS
               </NuxtLink>
               <span class="mx-4"></span>
               <NuxtLink to="/about" class="border border-blue-800 rounded-lg px-8 py-3 text-blue-800 hover:bg-blue-400 hover:border-blue-400 hover:text-white">
                 Tentang kami
               </NuxtLink>
             </div>
           </div>
         </div>
       </div>
      </div>
    </div>
    <div class="w-[88vw] absolute top-0 right-0 flex flex-row justify-end items-start lg:pr-[3vw] xl:pr-[6vw]">
        <div class="image-right"></div>
    </div>
  </section>
  <!--  MOBILE -->
  <section id="hero-mobile" class="block sm:block md:block lg:hidden xl:hidden h-screen px-[4vw]">
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
  @apply relative rounded-b-2xl w-[38vw] h-[25vh] md:w-[46vw] md:h-max lg:w-[44vw] lg:h-[50vh] xl:w-[44vw] xl:h-full ;
}
.image-left {
  background-image: url("/images/hero-left.svg");
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
  background-image: url("/images/hero-right.svg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  @apply w-[20vw] md:w-[15vw] md:h-[13vw] lg:w-[18vw] lg:h-[20vh] xl:w-[10vw] xl:h-[30vh];
}

.image-mobile{
  background-image: url("/images/main/m/bg-hero.webp");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  @apply w-full h-[25vh] sm:h-[50vh] md:h-[70vh] lg:h-[60vh] xl:h-[60vh] mb-2 rounded-b-2xl;
}
</style>