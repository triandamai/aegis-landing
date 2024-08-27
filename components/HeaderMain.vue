<script setup lang="ts">
defineProps(['style','parent'])
</script>

<template>
  <header class="w-full fixed z-10 hidden md:block lg:block xl:block" :class="parent">
    <div
        :class="style"
        class="h-[10vh] bg-white py-2 px-8 flex flex-row justify-between items-center">
      <NuxtLink to="/">
        <NuxtImg src="/images/logo.png" />
      </NuxtLink>
      <span class="flex flex-row">
        <NuxtLink to="/about" class="mx-4 hover:text-blue-800" :active-class="'text-blue-800'">Tentang kami</NuxtLink>
        <NuxtLink to="/services" class="mx-4 hover:text-blue-800" :active-class="'text-blue-800'">Layanan</NuxtLink>
        <NuxtLink to="/contact" class="mx-4 hover:text-blue-800" :active-class="'text-blue-800'">Kontak</NuxtLink>
      </span>
      <span>
        <NuxtLink to="/login"
                  class="border border-blue-800 text-blue-800 rounded-md my-2 mx-2 py-2 px-4 cursor-pointer hover:bg-blue-100"
                  aria-label="button">Masuk</NuxtLink>
        <NuxtLink to="/register"
                  class="border border-blue-800 bg-primary rounded-md my-2 mx-2 py-2 px-4 text-white cursor-pointer hover:bg-blue-700">Memulai</NuxtLink>
      </span>
    </div>
  </header>
  <!-- MOBILE -->
  <header class="w-full bg-white fixed z-10 block md:hidden lg:hidden xl:hidden">
    <div class="w-full flex flex-row justify-between px-[2vw] py-[1vw]">
      <NuxtLink to="/">
        <NuxtImg src="/images/logo.png" class="h-[5vh] w-[15vh]" width="100%" height="50%"/>
      </NuxtLink>
      <button>
        <IconMenu class="w-[5vw] h-[10vw]"/>
      </button>
    </div>
  </header>
</template>

<style scoped>

</style>