<script setup lang="ts">

</script>

<template>
  <section id="second" class="w-screen min-h-screen relative">
    <div class="container-second">
      <div class="container-left">
        <div class="w-[10vw] pt-4 h-full flex flex-col justify-center px-2 ml-[6vw]">
          <!--  line  -->
          <div class="w-5 h-[10vh] bg-blue-800 rounded-2xl">

          </div>
          <div class="w-1 h-[30vh] bg-gray-400 opacity-20 rounded-b-2xl mx-2">

          </div>
        </div>
        <div class="h-full flex flex-col justify-between py-40 pr-40">
          <h1 class="text-3xl">Marketing & Digitalization</h1>
          <p>Optimalisasi strategi pemasaran dan transformasi digital untuk meningkatkan visibilitas dan efisiensi
            bisnis Anda.</p>
          <h4 class="text-4xl">Financial Planning & Analysis</h4>
        </div>
      </div>
      <div class="container-right map">

      </div>
    </div>
    <div class="container-mobile">
      <div class=" container-right map">

      </div>
      <div class="container-left">
        <div class="w-[10vw] pt-4 h-full flex flex-col justify-center px-2 ml-[6vw]">
          <!--  line  -->
          <div class="head-line">

          </div>
          <div class="body-line">

          </div>
        </div>
        <div class="content-left">
          <h1 class="text-2xl md:text-3xl lg:text-3xl">Marketing & Digitalization</h1>
          <p class="text-lg md:text-lg">Optimalisasi strategi pemasaran dan transformasi digital untuk meningkatkan visibilitas dan efisiensi
            bisnis Anda.</p>
          <h4 class="text-3xl md:text-4xl">Financial Planning & Analysis</h4>
        </div>
      </div>
    </div>
    <div class="title">
      <p class="my-2">Platform All-in-One&nbsp;<span class="rounded-2xl bg-blue-800 px-1 text-white">Terintegrasi</span></p>
      <p class="my-2">Untuk UMKN seluruh Indonesia</p>
    </div>
  </section>
</template>

<style scoped>
.title {
  @apply hidden md:block lg:block xl:block absolute w-full top-0 text-5xl font-semibold ml-[6vw];
}

.container-second {
  @apply w-screen h-[80vh] hidden md:flex lg:flex xl:flex flex-row justify-evenly;
}

.container-mobile {
  @apply w-svw h-[80vh] flex flex-row flex-wrap md:hidden lg:hidden xl:hidden;
}

.map {
  background-image: url("/images/map.svg");
  background-repeat: no-repeat;
  background-size: cover;
}

.head-line{
  @apply w-3 md:w-5 lg:w-5 h-[5vh] md:h-[10vh] lg:h-[10vh] bg-blue-800 rounded-2xl;
}

.body-line{
  @apply  w-1 h-[20vh] md:h-[30vh] bg-gray-400 opacity-20 rounded-b-2xl mx-1 md:mx-2;
}

.container-left {
  @apply w-full md:w-[50vw] lg:w-[50vw] h-[50vh] md:h-full  lg:h-full bg-gradient-to-t from-blue-100 flex flex-row justify-start;
}

.content-left{
  @apply h-full flex flex-col justify-between py-20 md:py-40 lg:py-40 pr-12 md:pr-40 lg:pr-40;
}

.container-right {
  @apply w-full md:w-full lg:w-[60vw] h-[30vh] md:h-full  lg:h-full;
}
</style>