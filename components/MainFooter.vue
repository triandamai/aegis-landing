<script setup lang="ts">

</script>

<template>
  <footer
      class="w-svw px-0 sm:px-0 md:px-[6vw] lg:px-[6vw] xl:px-[6vw] py-[2vw] flex flex-row justify-center items-center">
    <div class="w-full sm:w-full md:w-[88vw] lg:w-[88vw] xl:w-[88vw]">
      <!--   MOBILE   -->
      <div class="block sm:block md:hidden lg:hidden xl:hidden flex-row justify-center">
        <NuxtImg class=" w-1/2 h-[6vh]" src="/images/logo.png"/>
      </div>
      <!--   END MOBILE   -->
      <!--      TOP -->
      <div class="w-full flex flex-row justify-between">
        <div class="hidden sm:hidden md:block lg:block xl:block w-[10vw] bg-white relative">
          <NuxtImg src="/images/logo.png"/>
          <div class="h-full w-[10px] bg-blue-800 absolute bottom-0 right-0"></div>
          <div class="h-full w-[10px] bg-white absolute bottom-0 right-0 rounded-br-2xl"></div>
        </div>
        <div
            class="hidden sm:hidden md:block lg:block xl:block w-[78vw] bg-blue-800 rounded-tl-2xl rounded-tr-2xl px-10 py-5">
          <div class="bg-white w-full h-[2px] rounded-md"></div>
        </div>
      </div>
      <!--      END TOP -->
      <div
          class="w-full bg-blue-800 md:rounded-bl-2xl md:rounded-tl-2xl md:rounded-br-2xl lg:rounded-bl-2xl lg:rounded-tl-2xl lg:rounded-br-2xl xl:rounded-bl-2xl xl:rounded-tl-2xl xl:rounded-br-2xl px-10 py-10 flex flex-wrap flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-between items-center md:items-start relative">
        <div class="w-[12vw] h-[12vw] sm:w-[12vw] sm:h-[12vw] md:w-[6vw] md:h-[6vw] lg:w-[7vw] lg:h-[7vw] xl:w-[12vw] xl:h-[12vw] " >
          <NuxtImg src="/images/avatar-footer.png" class="w-full h-full" height="100%" width="100%"/>
        </div>
        <div class="w-[70vw] h-full flex flex-col justify-between px-10">
          <div class="w-full flex flex-col md:flex-row justify-between">
            <div class="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 flex flex-col justify-start items-start text-white">
              <h1 class="text-name">AEGIS adalah platform pengembangan UMKM yang
                terintegrasi</h1>
              <h1 class="text-sub-name">Gedung M, Jl. Prof. DR. Selo Soemardjan, Pondok Cina,
                Kecamatan Beji, Kota Depok,
                Jawa Barat 16424</h1>
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
          <div
              class="hidden sm:hidden md:flex lg:flex xl:flex mt-10 w-full flex-col md:flex-row justify-between text-white  items-center md:items-start">
            <p class="w-full text-center md:text-start">2024 AEGIS ID - ALL RIGHT RESERVED</p>
            <span class="flex flex-row justify-end">
              <NuxtLink to="https://www.facebook.com/profile.php?id=61565034420965" target="_blank"> <NuxtImg
                  class="mx-2" src="/images/ic-linkedin.svg"/></NuxtLink>
              <NuxtLink to="https://www.facebook.com/profile.php?id=61565034420965" target="_blank"><NuxtImg
                  class="mx-2" src="/images/ic-fb.svg"/></NuxtLink>
              <NuxtLink to="https://www.facebook.com/profile.php?id=61565034420965" target="_blank"> <NuxtImg
                  class="mx-2" src="/images/ic-ig.svg"/></NuxtLink>
            </span>
          </div>
          <!--    MOBILE      -->
          <div
              class="flex sm:flex md:hidden lg:hidden xl:hidden mt-10 w-full flex-col md:flex-row justify-between text-white  items-center md:items-start">
            <span class="flex flex-row justify-end">
              <NuxtLink to="https://www.facebook.com/profile.php?id=61565034420965" target="_blank"><NuxtImg
                  class="mx-2 cursor-pointer" src="/images/ic-linkedin.svg"/></NuxtLink>
              <NuxtLink to="https://www.facebook.com/profile.php?id=61565034420965" target="_blank"> <NuxtImg
                  class="mx-2 cursor-pointer" src="/images/ic-fb.svg"/></NuxtLink>
              <NuxtLink to="https://www.facebook.com/profile.php?id=61565034420965" target="_blank"> <NuxtImg
                  class="mx-2 cursor-pointer" src="/images/ic-ig.svg"/></NuxtLink>
            </span>
            <div class="h-[1px] w-full bg-white my-4"></div>
            <p class="w-full text-center md:text-start">2024 AEGIS ID - ALL RIGHT RESERVED</p>
          </div>
          <!--    END MOBILE      -->
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.text-name {
  @apply w-full font-semibold text-lg sm:text-lg md:text-lg lg:text-lg xl:text-xl mb-2 text-center sm:text-center md:text-start lg:text-start xl:text-start !important;
}

.text-sub-name {
  @apply font-normal text-center sm:text-center md:text-start lg:text-start xl:text-start text-sm sm:text-sm md:text-sm lg:text-lg xl:text-xl !important;
}
</style>