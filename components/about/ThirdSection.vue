<script setup lang="ts">

</script>

<template>
  <section id="third" class="w-svw h-max px-[6vw]">
    <div class="w-[88vw] h-max md:w-[88vw] md:h-max lg:w-[88vw] lg:h-max p-10  flex flex-row flex-wrap justify-between rounded-2xl border border-gray-300">
      <div class="w-full md:w-[88vw] lg:w-[40vw] xl:w-[40vw]">
        <h1 class="text-3xl font-semibold md:text-4xl lg:text-6xl mb-10"><span class="bg-blue-800 rounded-lg text-white">Tujuan</span> Kami</h1>
        <p class=" w-full text-2xl md:text-2xl lg:text-5xl md:w-full lg:w-full">Berkontribusi bagi peningkatan perekonomian di Indonesia melalui pengembangan UMKM</p>
      </div>
      <div class="bg-purpose"></div>
    </div>
  </section>
</template>

<style scoped>
.bg-purpose{
  background-image: url("/images/about/bg-purpose.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @apply w-full h-[40vh] md:w-full md:h-[60vh] lg:w-[40vw] xl:w-[40vw] lg:h-[60vh] mt-4 md:mt-0 lg:mt-0;
}
</style>