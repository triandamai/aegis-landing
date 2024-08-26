<script setup lang="ts">

</script>

<template>

  <section id="six" class="w-svw px-[6vw] relative py-4 mt-10">
    <div class="w-full flex flex-row justify-center">
      <div>
        <h1 class="text-5xl font-semibold">Tumbuh Bersama dan Sukses Bersama
        </h1>
        <h1 class="text-5xl font-semibold w-full text-center mt-4">dengan <span class="bg-primary py-1 px-2 text-white rounded-2xl">AEGIS E-Learning</span>
        </h1>
      </div>
    </div>
    <div class="bg-six">
      <div class="ornament"></div>
      <div class="w-full flex flex-row justify-between">
        <img src="/images/img-six-section.png">
        <div class="h-full">
          <div class="w-full flex flex-row justify-between px-6 mb-10">
            <div class="w-1/2 px-10 cursor-pointer">
              <img src="/images/ic-videos.svg">
              <h2 class="text-2xl my-2">200+ Modul & Video</h2>
              <p>Akses lebih dari 200 modul dan video yang mencakup berbagai topik penting dalam bisnis</p>
            </div>
            <div class="w-1/2 px-10">
              <img src="/images/ic-videos.svg">
              <h2 class="text-2xl my-2">200+ Modul & Video</h2>
              <p>Akses lebih dari 200 modul dan video yang mencakup berbagai topik penting dalam bisnis</p>
            </div>
          </div>
          <div class="w-full flex flex-row justify-between px-6">
            <div class="w-1/2 px-10">
              <img src="/images/ic-videos.svg">
              <h2 class="text-2xl my-2">200+ Modul & Video</h2>
              <p>Akses lebih dari 200 modul dan video yang mencakup berbagai topik penting dalam bisnis</p>
            </div>
            <div class="w-1/2 px-10">
              <img src="/images/ic-videos.svg">
              <h2 class="text-2xl my-2">200+ Modul & Video</h2>
              <p>Akses lebih dari 200 modul dan video yang mencakup berbagai topik penting dalam bisnis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-six {
  @apply mt-10 w-[88vw] h-full rounded-2xl relative bg-gradient-to-l from-blue-200 to-blue-50 px-10 py-10;
}

.ornament {
  background-image: url("/images/bg_six_section.svg");
  background-repeat: no-repeat;
  @apply absolute top-0 right-0 h-[30vh] w-[30vh];
}
</style>