<script setup lang="ts">

</script>

<template>
  <section id="hero" class="w-svw px-[6vw] h-[85vh]">
    <div class=" rounded-2xl w-full h-[70vh] relative">
      <div class="bg-hero"></div>
      <div class="bg-left-hero">
        <div class="w-[50vw] h-full flex flex-col justify-evenly">
          <h1 class="w-[45vw] text-white text-6xl">Ubah Bisnis Anda dengan Layanan Kami</h1>
          <p class="w-[40vw] text-white my-1 text-lg">Ubah cara Anda menjalankan bisnis dengan bantuan AEGIS.ID. Kami menyediakan layanan yang membuat
            pengembangan dan pengelolaan bisnis jadi lebih mudah.</p>
          <button class="px-10 py-2 bg-white rounded-lg my-1 w-1/2">Gabung Sekarang</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-hero {
  background-image: url("/images/services/bg-hero-services.png");
  background-repeat: no-repeat;
  background-size: cover;
  @apply absolute right-0 h-full w-[80vw] rounded-br-2xl;
}
.bg-left-hero{
  @apply absolute left-0 h-full w-[85vw] bg-gradient-to-r from-blue-800 via-blue-800 px-20 py-10 rounded-l-2xl;
}
</style>