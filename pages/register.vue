<script setup lang="ts">

</script>

<template>
  <NuxtLayout name="landing">
    <section class="w-svw h-[80vh] flex flex-row flex-wrap justify-center">
      <!--      LEFT IMAGE -->
      <div class="hidden sm:hidden md:block lg:block xl:block w-[48vw] bg-gradient-to-b from-blue-800 via-blue-600 to-blue-400 rounded-r-2xl">
        <div class="container-left">
          <div class="image-left"></div>
          <div class="container-content">
            <NuxtImg src="/images/logo.png" class="absolute top-0 left-0 h-[2vw] w-[5vw]"/>
            <div class="absolute w-full bottom-0 pb-10 px-4">
              <h1 class="text-6xl w-full text-start text-white">Percayakan Masalah</h1>
              <h1 class="text-6xl w-full text-start text-white">Bisnismu Kepada Kami</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden sm:hidden md:block lg:block xl:block w-[4vw]"></div>
      <!--      FORM   -->
      <div class="w-full sm:w-[48vw] md:w-[48vw] lg:w-[48vw] xl:w-[48vw] h-full px-10 flex flex-col justify-between">
        <div></div>
        <h1 class="w-full text-5xl text-center">Daftar</h1>
        <div>
          <div class="input-group">
            <label for="full-name" class="input-label">Nama Lengkap</label>
            <input id="full-name" type="email" class="input" placeholder="tes@gmail.com"/>
          </div>
          <div class="input-group">
            <label for="email" class="input-label">Email</label>
            <input id="email" type="email" class="input" placeholder="tes@gmail.com"/>
          </div>
          <div class="input-group">
            <label for="password" class="input-label">Password</label>
            <input id="password" type="password" class="input" placeholder="password"/>
          </div>
          <div class="input-group flex flex-row relative">
            <input id="has-business" type="checkbox" class="mr-4" placeholder="password"/>
            <label for="has-business" class="input-label">Apakah Anda sudah Memiliki Bisnis?</label>
          </div>
          <div class="input-group">
            <label for="password" class="input-label">Nama Bisnis</label>
            <input id="password" type="text" class="input" placeholder="password"/>
          </div>
          <div class="input-group">
            <label for="phone" class="input-label">Phone</label>
            <input id="phone" type="number" class="input" placeholder="+62 888 8888 8888"/>
          </div>
          <div class="input-group">
            <label for="business-size" class="input-label">Ukuran Bisnis</label>
            <select id="business-size" class="input-select">
              <option selected>Pilih Ukuran Bisnis</option>
              <option>Kecil</option>
              <option>Besar</option>
            </select>
          </div>
          <div class="w-full flex flex-row justify-center items-center my-3">
            <div class="w-1/3 h-[1px] bg-gray-300"></div>
            <p class="mx-2 text-gray-500">Atau daftar dengan</p>
            <div class="w-1/3 h-[1px] bg-gray-300"></div>
          </div>
          <div class="w-full flex flex-row justify-center items-center my-4">
            <button><NuxtImg src="/images/ic-google.svg" class="w-[30px] h-[30px] mr-2"/></button>
            <button><NuxtImg src="/images/ic-fb.svg" class="w-[36px] h-[36px] ml-2"/></button>
          </div>
          <button class="w-full bg-primary rounded-lg px-2 py-2 text-white hover:bg-blue-700">Kirim</button>
        </div>
        <div class="w-full flex flex-row justify-center">
          <span>Sudah punya akun?</span>
          <NuxtLink to="/login" class="text-blue-800">Masuk</NuxtLink>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>
<style scoped>
.container-left {
  @apply w-full h-full flex flex-row justify-center items-center relative;
}

.image-left {
  background-image: url("/images/bg-login.webp");
  background-repeat: no-repeat;
  background-size: cover;
  @apply w-[40vw] h-[35vw] rounded-b-2xl;
}

.container-content {
  @apply w-[40vw] h-[35vw] absolute flex flex-col justify-center;
}
.input {
  @apply w-full border border-gray-300 rounded-lg px-2 py-3;
}

.input-select {
  @apply w-full border border-gray-300 rounded-lg px-2 py-3;
}

.input-group {
  @apply my-4;
}
.input-label{
  @apply text-gray-600 my-2;
}

</style>