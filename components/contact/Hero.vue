<script setup lang="ts">
const contact = useContact()
</script>

<template>
<section id="hero" class="w-svw h-max px-[6vw]">
  <div class="w-[92vw] sm:w-[88vw] md:w-[88vw] lg:w-[88vw] xl:w-[88vw] h-full flex flex-row flex-wrap justify-between">
    <div class="w-[92vw] h-[50vh] sm:w-[40vw] sm:h-[70vh] md:w-[40vw] md:h-[70vh] lg:w-[40vw] lg:h-[70vh] xl:w-[40vw] xl:h-[70vh] relative">
      <div class="w-full h-[65vh] sm:w-full sm:h-[65vh] md:w-full md:h-[65vh] lg:w-full lg:h-[65vh] xl:w-full xl:h-[65vh] relative">
        <div class="w-full h-[8vh] flex flex-row justify-start">
          <div class="w-full h-full relative flex flex-row">
            <div class="w-[70vw] sm:w-[30vw] md:w-[30vw] lg:w-[30vw] xl:w-[30vw] bg-primary h-full rounded-t-2xl"></div>
            <div class="w-[10vw] bg-white h-full relative">
              <div class="absolute left-0 w-[20px] h-full bg-primary"></div>
              <div class="absolute left-0 w-[20px] h-full bg-white rounded-bl-2xl"></div>
            </div>
          </div>
        </div>
        <div class="w-full h-[40vh] sm:h-[57vh] md:h-[57vh] lg:h-[57vh] xl:h-[57vh] bg-gradient-to-b from-blue-800 to-blue-600 rounded-b-2xl rounded-tr-2xl px-10 pb-10 text-white relative">
          <h1 class="text-3xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-6xl mb-10"><span class="text-white">Hubungi</span><span class="bg-white text-blue-800 rounded-lg"> Kami</span></h1>
          <p class="text-lg sm:text-lg md:text-2xl lg:text-3xl xl:text-3xl">Kami senang mendengar dari Anda! Meskipun kami menghargai semua cara komunikasi, ada cara yang lebih mudah untuk terhubung. Kirimkan pesan Anda dan kami akan segera merespons</p>
          <div class="absolute bottom-0 right-0 flex flex-row px-10 py-6">
            <NuxtImg src="/images/ic-fb.svg" class="mx-2"/>
            <NuxtImg src="/images/ic-linkedin.svg" class="mx-2"/>
            <NuxtImg src="/images/ic-ig.svg" class="mx-2"/>
          </div>
        </div>
      </div>
      <NuxtImg src="/images/contact/bg-hero.png" class="w-[15vh] h-[15vh] sm:w-[11vh] sm:h-[11vh] md:w-[11vh] md:h-[11vh] lg:w-[11vh] lg:h-[11vh] xl:w-[11vh] xl:h-[11vh] absolute bottom-0 left-0"/>
    </div>
    <div class="w-[92vw] sm:w-[40vw] md:w-[40vw] lg:w-[40vw] xl:w-[40vw] h-full mb-4">
      <div class="input-group">
        <label for="full-name" class="input-label">Nama Anda</label>
        <input id="full-name" v-model="contact.fullName" placeholder="Rimuru tempest" class="input">
      </div>
      <div class="input-group">
        <label for="email" class="input-label">Email Anda</label>
        <input id="email" v-model="contact.email" placeholder="rimuru@gmail.com" class="input">
      </div>
      <div class="input-group">
        <label for="subject" class="input-label">Subjek </label>
        <select id="subject" v-model="contact.subject" class="input">
          <option selected value="NONE">Pilih subjek pesan</option>
          <option value="SERVICE">Layanan</option>
          <option value="CRITIC">Kritik</option>
          <option value="ADVICE">Saran</option>
        </select>
      </div>
      <div class="input-group">
        <label for="message" class="input-label">Pesan </label>
       <textarea id="message" v-model="contact.message" placeholder="Masukkan pesan" class="input-textarea h-full"/>
      </div>
      <button @click="contact.sendContactUs" class="w-full bg-primary rounded-lg  px-2 py-2 hover:bg-blue-500 text-white">Kirim</button>
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