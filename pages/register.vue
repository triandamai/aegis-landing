<script setup lang="ts">

</script>

<template>
  <NuxtLayout name="landing">
    <section class="w-svw h-[80vh] flex flex-row justify-center">
      <!--      LEFT IMAGE -->
      <div class="w-[48vw] bg-gradient-to-b from-blue-800 via-blue-600 to-blue-400 rounded-r-2xl">
        <div class="container-left">
          <div class="image-left"></div>
          <div class="container-content">
            <img src="/images/logo.png" class="absolute top-0 left-0 h-[2vw] w-[5vw]">
            <div class="absolute w-full bottom-0 pb-10 px-4">
              <h1 class="text-6xl w-full text-start text-white">Percayakan Masalah</h1>
              <h1 class="text-6xl w-full text-start text-white">Bisnismu Kepada Kami</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="w-[4vw]"></div>
      <!--      FORM   -->
      <div class="w-[48vw] h-full px-10 flex flex-col justify-between">
        <div></div>
        <h1 class="w-full text-5xl text-center">Daftar</h1>
        <div>
          <div class="input-group">
            <p class="input-label">Nama Lengkap</p>
            <input type="email" class="input" placeholder="tes@gmail.com"/>
          </div>
          <div class="input-group">
            <p class="input-label">Email</p>
            <input type="email" class="input" placeholder="tes@gmail.com"/>
          </div>
          <div class="input-group">
            <p class="input-label">Password</p>
            <input type="password" class="input" placeholder="password"/>
          </div>
          <div class="my-4 flex flex-row justify-end">
            <NuxtLink to="/forgot-password" class="text-blue-500">Lupa password?</NuxtLink>
          </div>
          <div class="w-full flex flex-row justify-center items-center my-3">
            <div class="w-1/3 h-[1px] bg-gray-300"></div>
            <p class="mx-2 text-gray-500">Atau masuk dengan</p>
            <div class="w-1/3 h-[1px] bg-gray-300"></div>
          </div>
          <div class="w-full flex flex-row justify-center items-center my-4">
            <button><img src="/images/ic-google.svg" class="w-[30px] h-[30px] mr-2"/></button>
            <button><img src="/images/ic-fb.svg" class="w-[36px] h-[36px] ml-2"/></button>
          </div>
          <button class="w-full bg-primary rounded-lg px-2 py-2 text-white hover:bg-blue-700">Kirim</button>
        </div>
        <div class="w-full flex flex-row justify-center">
          <span>Sudah punya akun?</span>
          <NuxtLink to="/login" class="text-blue-800">Buat akun</NuxtLink>
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
  background-image: url("/images/bg-login.png");
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

.input-group {
  @apply my-4;
}
.input-label{
  @apply text-gray-600 my-2;
}

</style>