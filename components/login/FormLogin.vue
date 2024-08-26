<script setup lang="ts">
</script>

<template>
    <div class="w-[48vw] h-full px-10 flex flex-col justify-between">
      <div></div>
      <h1 class="w-full text-5xl text-center">Login</h1>
      <div>
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
        <span>Belum punya akun?</span>
        <NuxtLink to="/register" class="text-blue-800">Buat akun</NuxtLink>
      </div>
    </div>
</template>

<style scoped>
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