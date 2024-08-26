<script setup lang="ts">

</script>

<template>
    <div class="w-[48vw] h-full px-10 flex flex-col justify-between">
      <div></div>
      <div>
        <div class="w-full flex flex-row justify-center mb-4">
          <img src="/images/logo.png">
        </div>
        <h1 class="w-full text-2xl text-center">Lupa Password</h1>
        <div class="input-group">
          <p>Email</p>
          <input type="email" class="input" placeholder="tes@gmail.com"/>
        </div>
        <button class="w-full bg-primary rounded-lg px-2 py-2 text-white">Kirim</button>
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
</style>