<script setup lang="ts">
defineProps<{
  price:number|null
}>()

defineEmits(['create-reservation'])


</script>

<template>
  <section class="w-svw min-h-[30vh] h-max mt-10 sm:px-[6vw] md:px-[6vw] lg:px-[6vw] bg-gradient-to-br from-blue-800 via-blue-600 to-blue-500">
    <div class="w-full py-12 flex flex-row flex-wrap justify-center">
      <div class="w-1/2">
        <h1 class="text-5xl font-semibold text-white text-center">Harga mulai dari Rp{{price ?? '0'}}/Bulan</h1>
      </div>
      <div class="w-1/2">
        <div>
          <h1 class="text-white text-lg my-2">Jangan Tunda Lagi, Kembangkan Bisnis Anda Bersama AEGIS. Daftar Sekarang!</h1>
        </div>
        <div class="w-full flex flex-row flex-wrap justify-start">
          <button @click="$emit('create-reservation')" class="bg-white border border-white px-4 py-2 rounded-lg text-blue-600">
            Daftar Gratis
          </button>
          <div class="w-[10px]"/>
          <NuxtLink to="/contact" class="px-4 py-2 rounded-lg border border-white bg-transparent text-white">
            Hubungi Kami
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>