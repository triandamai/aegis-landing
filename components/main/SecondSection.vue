<script setup lang="ts">

</script>

<template>
  <section id="second" class="w-svw relative">
    <div class="w-svw h-[80vh] flex flex-row justify-evenly">
      <div class="container-left">
        <div class="w-[10vw] pt-4 h-full flex flex-col justify-center px-2 ml-[6vw]">
          <!--  line  -->
          <div class="w-5 h-[10vh] bg-primary rounded-2xl">

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
      <div class=" container-right map">

      </div>
    </div>
    <div class="absolute w-full top-0 text-5xl font-semibold ml-[6vw]">
      <p>Platform All-in-One <span class="rounded-2xl bg-primary px-5 text-white">Terintegrasi</span></p>
      <p>Untuk UMKN seluruh Indonesia</p>
    </div>
  </section>
</template>

<style scoped>
.map {
  background-image: url("/images/map.svg");
}

.container-left {
  @apply w-[50vw] bg-gradient-to-t from-blue-100 flex flex-row justify-start;
}

.container-right {
  @apply w-[60vw] h-full;
}
</style>