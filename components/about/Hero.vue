<script setup lang="ts">

</script>

<template>
  <section id="hero" class="w-svw h-screen px-[4vw] md:px-[6vw]">
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
    <div class="block md:hidden lg:hidden xl:hidden w-[92vw] h-[90vh] bg-white relative flex-row justify-center">

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

.right-mobile {
  @apply w-full h-[40vh]  rounded-tr-2xl rounded-b-2xl relative flex flex-row justify-between;
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

.container-image-right-mobile {
  @apply w-[80vw] bg-blue-800 rounded-r-2xl h-full md:w-[40vw] md:h-[70vh] absolute px-10 py-10 right-0 flex flex-row justify-end;
}

.image-right {
  background-image: url("/images/about/bg-hero-right.png");
  background-size: cover;
  background-repeat: no-repeat;
  @apply w-full h-full rounded-md;
}
</style>