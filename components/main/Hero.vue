<script setup lang="ts">

</script>

<template>
  <section id="hero" class="hidden sm:hidden md:block lg:block xl:block w-svw h-max md:h-[60vh] lg:h-[70vh] xl:h-screen px-[4vw] md:px-[4vw] lg:px-[6vw] xl:px-[6vw] relative md:mb-10 lg:mb-0 xl:mb-0">
    <div class="w-max absolute top-0">
      <!-- text 1   -->
      <div class="w-[88vw] md:w-[94vw] lg:w-[88vw] xl:w-[88vw] flex flex-row justify-start">
        <div
            class="w-[60vw] h-[8vh] md:w-[74vw] md:h-max lg:w-[74vw] lg:h-max xl:w-[77vw] xl:h-max bg-blue-800 rounded-t-2xl rounded-bl-2xl">
          <p class="text-hero">Dukungan Strategis Untuk Setiap</p>
        </div>
      </div>
      <!-- text 2  -->
      <div class="w-[88vw] md:w-[94vw] lg:w-[88vw] xl:w-[88vw] flex flex-row justify-start">
        <div class="w-[35vw] md:w-[28vw] xl:w-[27vw] flex flex-row justify-end">
          <div class="w-[10vw] flex flex-row justify-end relative">
            <div class="h-4 w-4 bg-blue-800 absolute"></div>
            <div class="h-4 w-4 bg-white rounded-tr-2xl absolute"></div>
          </div>
        </div>
        <div
            class="w-[50vw] md:w-[46vw] md:h-max xl:w-[50vw] bg-blue-800 rounded-bl-2xl flex flex-row justify-start items-center">
          <p class="text-hero">Pertumbuhan Bisnis</p>
        </div>
        <div class="w-[5vw] flex flex-row justify-start relative">
          <div class="h-4 w-4 bg-blue-800 absolute bottom-0"></div>
          <div class="h-4 w-4 bg-white rounded-bl-2xl absolute bottom-0"></div>
        </div>
      </div>
      <!-- text 3 -->
      <div class="w-[88vw] md:w-[94vw] lg:w-[88vw] xl:w-[88vw] flex flex-row justify-start">
        <div class="w-[40vw] md:w-[50vw] flex flex-row justify-end">
          <div class="w-[10vw] flex flex-row justify-end relative">
            <div class="h-4 w-4 bg-blue-800 absolute"></div>
            <div class="h-4 w-4 bg-white rounded-tr-2xl absolute"></div>
          </div>
        </div>
        <div class="w-[40vw] md:w-[42vw] md:h-max xl:w-[50vw] bg-blue-800 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl">
          <p class="text-hero">UMKM Indonesia</p>
        </div>
      </div>
    </div>
    <!--  image left and right  -->
    <div class="w-[88vw] md:w-[94vw] lg:w-[88vw] xl:w-[88vw] h-[30vh] md:h-full absolute md:top-0 xl:top-0 flex flex-col justify-evenly">
      <div class="h-full w-svw flex flex-row flex-nowrap justify-start relative">
        <div class="container-image-left">
          <div class="image-left"></div>
        </div>
       <div class="container-text-left">
         <div class="text-left">
           <div class="w-full h-min">
             <p>AEGIS hadir dari validasi ide awal, pengurusan legalitas, akses pendanaan untuk membantu UMKM mencapai
               potensi maksimalnya dengan layanan terpadu yang terpercaya.</p>
             <div class="md:mt-4 lg:mt-8 xl:mt-8 hidden md:block">
               <NuxtLink to="/services" class="bg-blue-800 border border-blue-800 rounded-lg px-2 md:px-2 lg:px-8 xl:px-8 py-3 text-white hover:cursor-pointer hover:bg-blue-600 hover:border-blue-600">
                 Gabung AEGIS
               </NuxtLink>
               <span class="mx-4"></span>
               <NuxtLink to="/about" class="border border-blue-800 rounded-lg  px-2 md:px-2 lg:px-8 xl:px-8 py-3 text-blue-800 hover:bg-blue-400 hover:border-blue-400 hover:text-white">
                 Tentang kami
               </NuxtLink>
             </div>
           </div>
         </div>
       </div>
      </div>
    </div>
    <div class="w-[88vw] md:w-[94vw] lg:w-[88vw] xl:w-[88vw] absolute top-0 right-0 flex flex-row justify-end items-start lg:pr-[3vw] xl:pr-[6vw]">
        <div class="image-right"></div>
    </div>
  </section>
 </template>

<style scoped>
.text-hero {
  @apply sm:text-6xl md:text-4xl lg:text-5xl xl:text-6xl text-white px-5 py-5 md:px-5 md:py-3 lg:px-5 lg:py-5 xl:px-5 xl:py-5 overflow-ellipsis line-clamp-1;
}

.container-image-left{
  @apply relative rounded-b-2xl w-[38vw] h-[25vh] md:w-[46vw] md:h-max lg:w-[44vw] lg:h-[50vh] xl:w-[42vw] xl:h-full ;
}
.image-left {
  background-image: url("/images/main/hero-left.png");
  background-size: contain;
  background-repeat: no-repeat;
  @apply h-[50vh] md:h-[50vh] lg:h-[50vh] xl:h-[50vh] mt-[20vh] md:mt-[12vh] lg:mt-[16vh] xl:mt-[18vh] w-full absolute left-0 top-0;
 }

.container-text-left{
  @apply relative w-[48vw] h-full flex flex-col justify-end ml-4;
}
.text-left {
  @apply absolute top-0 w-[44vw] md:w-[44vw] lg:w-[40vw] md:text-sm flex flex-col justify-end pt-[50vh] md:pt-[29vh] lg:pt-[40vh] xl:pt-[50vh];
}

.image-right {
  background-image: url("/images/main/hero-right.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  @apply w-[20vw] md:w-[15vw] md:h-[13vw] lg:w-[12vw] lg:h-[23vh] xl:w-[10vw] xl:h-[28vh] md:mr-[4vw]  lg:mr-[3vw] xl:mr-0;
}
</style>