<script setup lang="ts">

</script>

<template>

  <section id="six" class="w-svw md:px-[6vw] relative py-4 mt-10">
    <div class="w-full flex flex-row justify-center">
      <div class="text-2xl md:text-5xl font-semibold">
        <h1 class="text-center">Tumbuh Bersama dan Sukses Bersama
        </h1>
        <h1 class="text-center mt-4">dengan <span
            class="bg-primary py-1 px-2 text-white rounded-2xl">AEGIS E-Learning</span>
        </h1>
      </div>
    </div>
    <div class="bg-six">
      <div class="ornament"></div>
      <div class="w-full md:flex lg:flex xl:flex flex-wrap flex-row justify-between items-center">
        <NuxtImg src="/images/img-six-section.png" class="w-full md:w-[20vw]"/>
        <div class="w-full md:w-[60vw] flex flex-wrap flex-row justify-between px-6 mb-10">
          <div v-for="(item) in 4"
               class="w-full md:w-1/2 px-2 md:px-10 md:my-10 flex flex-col justify-start items-center md:items-start">
            <NuxtImg src="/images/ic-videos.svg" class="w-[5vh] h-[5vh]"/>
            <h2 class="text-2xl my-2 text-center sm:text-center md:text-start lg:text-start xl:text-start">200+ Modul & Video</h2>
            <p class="text-center sm:text-center md:text-start lg:text-start xl:text-start">Akses lebih dari 200 modul dan video yang mencakup berbagai topik penting dalam bisnis</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-six {
  @apply mt-10 w-full md:w-[88vw] h-full rounded-2xl relative bg-gradient-to-l from-blue-200 to-blue-50 px-10 py-10;
}

.ornament {
  background-image: url("/images/bg_six_section.svg");
  background-repeat: no-repeat;
  @apply absolute top-0 right-0 h-[30vh] w-[30vh];
}
</style>