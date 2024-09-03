<script setup lang="ts">
const login = useLogin()
</script>

<template>
  <NuxtLayout name="landing">
    <section class="w-svw h-max flex flex-row justify-center">
      <!--    LEFT IMAGE    -->
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
      <!--        FORM      -->
      <div class="w-full sm:w-full md:w-[48vw] lg:w-[48vw] xl:w-[48vw] h-full px-[4vw] sm:px-[4vw] md:px-[6vw] lg:px-[6vw] xl:px-[6vw] flex flex-col justify-between items-center mb-8">
        <div></div>
        <h1 class="w-full text-5xl text-center">Login</h1>
        <form class="w-full">
          <div class="input-group">
            <label for="email" class="input-label">Email</label>
            <input autocomplete="email" id="email" required v-model="login.email" type="email" class="input" placeholder="tes@gmail.com"/>
          </div>
          <div class="input-group">
            <label for="password" class="input-label">Password</label>
            <div class="w-full flex flex-row justify-between relative">
              <input autocomplete="current-password" v-model="login.password" required :type="login.showPassword ? 'text' :'password'" id="password" class="input" placeholder="Enter your password">
              <span @click="login.showPassword = !login.showPassword" class="toggle-password">
                <IconEye v-show="login.showPassword" ></IconEye>
                <IconEyeOff v-show="!login.showPassword"></IconEyeOff>
            </span>
            </div>
          </div>
          <div class="my-4 flex flex-row justify-end">
            <NuxtLink to="/forgot-password" class="text-blue-500">Lupa password?</NuxtLink>
          </div>

          <button @click="login.signInEmail" class="w-full bg-blue-800 rounded-lg px-2 py-2 text-white hover:bg-blue-700">
            Login
          </button>
          <div class="w-full flex flex-row justify-center items-center mt-4 mb-4">
            <div class="w-1/4 sm:w-1/4 md:w-1/3 lg:w-1/3 xl:w-1/3 h-[1px] bg-gray-300"></div>
            <p class="mx-1 text-gray-500 ">Atau masuk dengan</p>
            <div class="w-1/4 sm:w-1/4 md:w-1/3 lg:w-1/3 xl:w-1/3 h-[1px] bg-gray-300"></div>
          </div>
          <div class="w-full flex flex-row justify-center items-center my-4">
            <button @click="login.signInGoogle"><NuxtImg src="/images/ic-google.svg" class="w-[30px] h-[30px] mr-2"/></button>
            <button @click="login.signInFacebook"><NuxtImg src="/images/ic-fb.svg" class="w-[36px] h-[36px] ml-2"/></button>
          </div>
        </form>
        <div class="w-full flex flex-row justify-center my-6">
          <span>Belum punya akun?</span>
          <NuxtLink to="/register" class="text-blue-800">Buat akun</NuxtLink>
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
</style>