<script setup lang="ts">

</script>

<template>
<section id="hero" class="w-svw px-[6vw]">
  <div class="w-[88vw] h-full flex felx-row justify-between">
    <div class="w-[40vw] h-[70vh] relative">
      <div class="w-full h-[65vh] relative">
        <div class="w-full h-[8vh] flex flex-row justify-start">
          <div class="w-full h-full relative flex flex-row">
            <div class="w-[30vw] bg-primary h-full rounded-t-2xl"></div>
            <div class="w-[10vw] bg-white h-full relative">
              <div class="absolute left-0 w-[20px] h-full bg-primary"></div>
              <div class="absolute left-0 w-[20px] h-full bg-white rounded-bl-2xl"></div>
            </div>
          </div>
        </div>
        <div class="w-full h-[57vh] bg-primary rounded-b-2xl rounded-tr-2xl px-10 pb-10 text-white relative">
          <h1 class="text-6xl mb-10"><span class="text-white">Hubungi</span><span class="bg-white text-blue-800 rounded-lg"> Kami</span></h1>
          <p class="text-3xl">Kami senang mendengar dari Anda! Meskipun kami menghargai semua cara komunikasi, ada cara yang lebih mudah untuk terhubung. Kirimkan pesan Anda dan kami akan segera merespons</p>
          <div class="absolute bottom-0 right-0 flex flex-row px-10 py-6">
            <img src="/images/ic-fb.svg" class="mx-2">
            <img src="/images/ic-linkedin.svg" class="mx-2">
            <img src="/images/ic-ig.svg" class="mx-2">
          </div>
        </div>
      </div>
      <img src="/images/contact/bg-hero.png" class="w-[11vh] h-[11vh] absolute bottom-0 left-0">
    </div>
    <div class="w-[40vw] h-full">
      <div class="input-group">
        <p class="input-label">Nama Anda</p>
        <input placeholder="Rimuru tempest" class="input">
      </div>
      <div class="input-group">
        <p class="input-label">Email Anda</p>
        <input placeholder="rimuru@gmail.com" class="input">
      </div>
      <div class="input-group">
        <p class="input-label">Subjek </p>
        <select class="input">
          <option selected>Sales</option>
          <option>Tanya</option>
        </select>
      </div>
      <div class="input-group">
        <p class="input-label">Pesan </p>
       <textarea placeholder="Masukkan pesan" class="input-textarea h-full"/>
      </div>
      <button class="w-full bg-primary rounded-lg  px-2 py-2 hover:bg-blue-500 text-white">Kirim</button>
    </div>
  </div>
</section>
</template>

<style scoped>
.input{
  @apply w-full rounded-lg border border-gray-300 px-2 py-2;
}
.input-textarea{
  @apply w-full rounded-lg border border-gray-300 px-2 py-2;
}
.input-group{
  @apply my-2;
}
.input-label{
  @apply text-gray-600 my-2;
}
</style>