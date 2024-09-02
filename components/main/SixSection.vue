<script setup lang="ts">

</script>

<template>

  <section id="six" class="w-svw md:px-[6vw] relative py-4 mt-32">
    <div class="w-full flex flex-row justify-center">
      <div class="text-2xl md:text-5xl font-semibold">
        <h1 class="text-center">Tumbuh Bersama dan Sukses Bersama
        </h1>
        <h1 class="text-center mt-4">dengan <span
            class="bg-blue-800 py-1 px-2 text-white rounded-2xl">AEGIS E-Learning</span>
        </h1>
      </div>
    </div>
    <div class="bg-six">
      <div class="ornament"></div>
      <div class="w-full md:flex lg:flex xl:flex flex-wrap flex-row justify-between items-center sm:items-center md:items-center lg:items-start xl:items-start">
        <NuxtImg src="/images/img-six-section.png" width="100%" height="100%" class="w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 h-[50vh]"/>
        <div class="w-full sm:w-full md:w-full lg:w-2/3 xl:2/3 flex flex-wrap flex-row justify-between px-6 mb-10 sm:items-center md:items-center lg:items-center xl:items-start">
          <div v-for="_ in 4" class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 md:px-10 md:my-10 flex flex-col justify-start items-center sm:items-center md:items-center lg:items-center xl:items-start">
            <NuxtImg src="/images/ic-videos.svg" class="w-[5vh] h-[5vh]"/>
            <h2 class="text-2xl text-center sm:text-center md:text-center lg:text-start xl:text-start w-max">200+ Modul & Video</h2>
            <h4 class="description">Akses lebih dari 200 modul dan video yang mencakup berbagai topik penting dalam bisnis</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-six {
  @apply mt-10 w-full md:w-[88vw] h-max rounded-2xl relative bg-gradient-to-l from-blue-200 to-blue-50 px-10 py-10;
}

.ornament {
  background-image: url("/images/bg_six_section.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @apply absolute top-0 right-0 h-[30vh] w-[30vh];
}

.description{
  @apply w-full text-center sm:text-center md:text-center lg:text-start xl:text-start !important;
}
</style>