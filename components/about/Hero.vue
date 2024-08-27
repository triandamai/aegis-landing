<script setup lang="ts">

</script>

<template>
  <section id="hero" class="w-svw h-full md:h-screen lg:h-screen xl:h-screen px-[4vw] md:px-[6vw]">
    <!--  DESKTOP  -->
    <div class="hidden md:flex lg:flex xl:flex w-[88vw] h-[90vh] bg-white relative flex-row justify-center">
      <div class="left">
        <div class="left-top-box">
          <div class="shape-left"></div>
          <div class="container-image-left">
            <div class="image-left"></div>
          </div>
        </div>
        <div class="left-bottom-box">
          <div class="absolute top-0 right-0 w-[30px] h-[30px] bg-blue-800"></div>
          <div class="absolute top-0 right-0 w-[30px] h-[30px] bg-white rounded-tr-2xl"></div>
          <div class="w-full h-full px-1 py-6">
            <div class="mb-4">
              <span class="w-full bg-primary rounded-lg text-white text-6xl">Solusi Terintegrasi</span>
              <div class="text-6xl">untuk Kemajuan UMKM</div>
            </div>
            <p>AEGIS adalah mitra strategis bagi UMKM, menyediakan layanan all-in-one yang dirancang untuk mempercepat
              pertumbuhan bisnis Anda. Dari marketing hingga digitalisasi, kami mendukung setiap langkah perjalanan
              Anda.</p>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="shape-right"></div>
        <div class="w-[12vw] absolute left-0">

        </div>
        <div class="container-image-right">
          <div class="image-right"></div>
        </div>
      </div>
      <div class="middle-shape"></div>
    </div>
    <!-- MOBILE -->
    <div class="block md:hidden lg:hidden xl:hidden w-[92vw] h-full bg-white relative flex-row justify-center">
      <!--      IMAGE     -->
      <div class="w-full h-[40vh] rounded-2xl relative">
        <div class="absolute bg-blue-800 rounded-l-2xl rounded-tr-2xl w-full h-[35vh]"/>
        <div class="absolute bottom-0 w-full h-[5vh] flex flex-row justify-between">
          <div class="w-[12vw] bg-white h-[5vw] absolute">
            <div class="w-[2vh] h-[5vh] bg-blue-800 absolute right-0"></div>
            <div class="w-[2vh] h-[5vh] bg-white absolute right-0 rounded-tr-2xl"></div>
          </div>
          <div class="w-[80vw] bg-blue-800 rounded-b-2xl h-[5vh] right-0 absolute"></div>
        </div>
        <div class="absolute shape-right-mobile"></div>
        <div class="absolute bottom-0 right-0 rounded-2xl h-[28vh] w-[76vw] bg-blue-950 mr-[6vw] mb-[10vw]"></div>
        <div class="absolute top-0 left-0 rounded-2xl  h-[28vh] w-[76vw] image-right-mobile ml-[6vw] mt-[6vw]"></div>
        <div class="absolute middle-shape mt-[10vw] ml-[10vw]"/>
      </div>
      <!--TITLE-->
      <div class="h-[30vh] mt-[2vh] w-full">
        <h1 class="text-3xl font-semibold bg-blue-800 w-max rounded-md text-white">Solusi Terintegrasi</h1>
        <h1 class="text-3xl  font-semibold">untuk Kemajuan UMKM</h1>
        <p class="text-start mt-[4vw]">
          AEGIS adalah mitra strategis bagi UMKM, menyediakan layanan all-in-one yang dirancang untuk mempercepat pertumbuhan bisnis Anda. Dari marketing hingga digitalisasi, kami mendukung setiap langkah perjalanan Anda.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.middle-shape {
  background-image: url("/images/about/shape-middle.svg");
  background-size: contain;
  background-repeat: no-repeat;
  @apply absolute top-0 w-[20vw] h-[100%];
}

.left {
  @apply w-[48vw] flex flex-col;
}

.shape-left {
  background-image: url("/images/about/shape-left.svg");
  background-size: cover;
  background-repeat: no-repeat;
  @apply w-[40vw] h-[40vh] absolute rounded-tl-2xl;
}

.container-image-left {
  @apply w-[48vw] h-[40vh] absolute px-10 py-10;
}

.image-left {
  background-image: url("/images/about/bg-hero-left.png");
  background-size: cover;
  background-repeat: no-repeat;
  @apply w-full h-full rounded-md;
}

.left-top-box {
  @apply w-full h-[40vh] bg-blue-800 rounded-tl-2xl rounded-bl-2xl;
}

.left-bottom-box {
  @apply bg-white relative;
}

.right {
  @apply w-[40vw] h-[70vh] bg-blue-800 rounded-tr-2xl rounded-b-2xl relative;
}


.shape-right {
  background-image: url("/images/about/shape-right.svg");
  background-size: cover;
  background-repeat: no-repeat;
  @apply w-full h-full absolute bottom-0;
}

.container-image-right {
  @apply w-full h-full md:w-[40vw] md:h-[70vh] absolute px-10 py-10;
}

.image-right {
  background-image: url("/images/about/bg-hero-right.png");
  background-size: cover;
  background-repeat: no-repeat;
  @apply w-full h-full rounded-md;
}


.image-right-mobile {
  background-image: url("/images/about/bg-hero-right.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.shape-right-mobile {
  background-image: url("/images/about/shape-right.svg");
  background-size: cover;
  background-repeat: no-repeat;
  @apply w-[70vw] h-[34vh] absolute right-0 bottom-0;
}
</style>