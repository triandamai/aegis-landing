<script setup lang="ts">

</script>

<template>
  <section id="hero" class="w-svw h-screen px-[6vw] relative">
    <div class="w-[88vw] absolute top-0">
      <!-- text 1   -->
      <div class="w-[88vw] flex flex-row justify-start">
        <div
            class="w-[60vw] h-[8vh] md:w-[74vw] md:h-[15vh] lg:w-[74vw] lg:h-[15vh] bg-primary rounded-t-2xl rounded-bl-2xl">
          <p class="text-hero px-5 py-5">Dukungan Strategis Untuk
            Setiap</p>
        </div>
      </div>
      <!-- text 2  -->
      <div class="w-[88vw] flex flex-row justify-start">
        <div class="w-[30vw] md:w-[28vw] flex flex-row justify-end">
          <div class="w-[10vw] flex flex-row justify-end relative">
            <div class="h-4 w-4 bg-primary absolute"></div>
            <div class="h-4 w-4 bg-white rounded-tr-2xl absolute"></div>
          </div>
        </div>
        <div class="w-[40vw] md:w-[46vw] md:h-[15vh] bg-primary rounded-bl-2xl flex flex-row justify-start items-center">
          <p class="text-hero pr-5 pl-5 py-5">Pertumbuhan Bisnis</p>
        </div>
        <div class="w-[10vw] flex flex-row justify-start relative">
          <div class="h-4 w-4 bg-primary absolute bottom-0"></div>
          <div class="h-4 w-4 bg-white rounded-bl-2xl absolute bottom-0"></div>
        </div>
      </div>
      <!-- text 3 -->
      <div class="w-[88vw] flex flex-row justify-start">
        <div class="w-[40vw] md:w-[50vw] flex flex-row justify-end">
          <div class="w-[10vw] flex flex-row justify-end relative">
            <div class="h-4 w-4 bg-primary absolute"></div>
            <div class="h-4 w-4 bg-white rounded-tr-2xl absolute"></div>
          </div>
        </div>
        <div class="w-[40vw] md:w-[40vw] md:h-[15vh] bg-primary rounded-tr-2xl rounded-bl-2xl rounded-br-2xl">
          <p class="text-hero px-5 py-5">UMKM Indonesia</p>
        </div>
      </div>
    </div>
    <!--  image left and description  -->
    <div class="w-[88vw] h-[30vh] md:h-[85vh] absolute md:bottom-0 flex flex-row justify-evenly">
      <div class=" w-full flex flex-row justify-start relative">
        <div class="image-left"></div>
        <div class="text-left">
          <div class="w-full">
            <p>AEGIS hadir dari validasi ide awal, pengurusan legalitas, akses pendanaan untuk membantu UMKM mencapai
              potensi maksimalnya dengan layanan terpadu yang terpercaya.</p>
            <div class="mt-8 hidden md:block">
              <button class="bg-primary border border-blue-800 rounded-md px-3 py-2 text-white hover:cursor-pointer hover:bg-blue-600 hover:border-blue-600">Gabung AEGIS</button>
              <span class="mx-4"></span>
              <button class="border border-blue-800 rounded-md px-3 py-2 text-blue-800 hover:bg-blue-400 hover:border-blue-400 hover:text-white">Tentang kami</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[92vw] absolute top-0 right-0 flex flex-row justify-end">
      <div class="mr-[2vw]">
        <div class="image-right"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-hero {
  @apply lg:text-6xl md:text-6xl text-white;
}
.image-left{
  background-image: url("/images/hero-left.svg");
  background-size: cover;
  background-repeat: no-repeat;
  @apply mt-8 mr-[4vw] rounded-b-2xl w-[38vw] h-[25vh] md:w-[46vw] md:h-[50vh];
}

.text-left{
  @apply w-[38vw] h-[50vh] flex flex-col justify-end;
}

.image-right{
  background-image: url("/images/hero-right.svg");
  background-size: contain;
  background-repeat: no-repeat;
  @apply w-[20vw] md:w-[15vw] md:h-[13vw];
}
</style>