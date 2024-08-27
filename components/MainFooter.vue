<script setup lang="ts">

</script>

<template>
  <footer class="w-svw px-[6vw] py-[2vw]">
    <div class="w-[88vw]">
      <div class="w-full flex flex-row justify-between">
        <div class="w-[10vw] bg-white relative">
          <img src="/images/logo.png">
          <div class="h-full w-[10px] bg-primary absolute bottom-0 right-0"></div>
          <div class="h-full w-[10px] bg-white absolute bottom-0 right-0 rounded-br-2xl"></div>
        </div>
        <div class="w-[78vw] bg-primary rounded-tl-2xl rounded-tr-2xl px-10 py-5">
          <div class="bg-white w-full h-[2px] rounded-md"></div>
        </div>
      </div>
      <div class="w-full bg-primary rounded-bl-2xl rounded-tl-2xl rounded-br-2xl px-10 py-10 flex flex-wrap flex-col md:flex-row justify-between items-center md:items-start relative">
        <div class="w-[5vh] h-[5vh]">
          <img src="/images/avatar-footer.png"/>
        </div>
        <div class="w-full h-full flex flex-col justify-between px-10">
          <div class="w-full flex flex-col md:flex-row justify-between">
            <div class="w-full md:w-1/4 text-white">
              <p class="text-lg md:text-2xl mb-2 text-center md:text-start">AEGIS adalah platform pengembangan UMKM yang terintegrasi</p>
              <p class="font-thin text-center md:text-start">Gedung M, Jl. Prof. DR. Selo Soemardjan, Pondok Cina, Kecamatan Beji, Kota Depok,
                Jawa Barat 16424</p>
            </div>
            <div class="text-white flex flex-col justify-between items-center md:items-start">
              <NuxtLink to="/about">Tentang kami</NuxtLink>
              <NuxtLink to="/contact">Kontak</NuxtLink>
              <NuxtLink to="/services">Layanan</NuxtLink>
            </div>
            <div class="text-white flex flex-col justify-between  items-center md:items-start">
              <NuxtLink to="/terms">Syarat dan ketentuan</NuxtLink>
              <NuxtLink to="/privacy-policy">Kebijakan Privasi</NuxtLink>
              <NuxtLink to="/contact">Hubungi Kami</NuxtLink>
            </div>
          </div>
          <div class="mt-10 w-full flex flex-col md:flex-row justify-between text-white  items-center md:items-start">
            <p class="w-full text-center md:text-start">2024 AEGIS ID - ALL RIGHT RESERVED</p>
            <span class="flex flex-row justify-end">
              <img class="mx-2" src="/images/ic-linkedin.svg"/>
              <img class="mx-2" src="/images/ic-fb.svg"/>
              <img class="mx-2" src="/images/ic-ig.svg"/>
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>