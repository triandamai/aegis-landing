<script setup lang="ts">
const forgotPassword = useForgotPassword()
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
        <div class="w-full">
          <div class="input-group">
            <label for="password">Password</label>
            <div class="w-full flex flex-row justify-between relative">
              <input v-model="forgotPassword.password" required :type="forgotPassword.showPassword ? 'text' :'password'" id="password" class="input" placeholder="Enter your password">
              <span @click="forgotPassword.showPassword = !forgotPassword.showPassword" class="toggle-password">
                <IconEye v-show="forgotPassword.showPassword" ></IconEye>
                <IconEyeOff v-show="!forgotPassword.showPassword"></IconEyeOff>
            </span>
            </div>
          </div>
          <div class="input-group">
            <label for="password">Confirm Password</label>
            <div class="w-full flex flex-row justify-between relative">
              <input v-model="forgotPassword.confirmPassword" required :type="forgotPassword.showConfirmPassword ? 'text' :'password'" id="password" class="input" placeholder="Enter your password">
              <span @click="forgotPassword.showConfirmPassword = !forgotPassword.showConfirmPassword" class="toggle-password">
                <IconEye v-show="forgotPassword.showConfirmPassword" ></IconEye>
                <IconEyeOff v-show="!forgotPassword.showConfirmPassword"></IconEyeOff>
            </span>
            </div>
          </div>
          <button @click="forgotPassword.setPassword" class="w-full bg-primary rounded-lg px-2 py-2 text-white hover:bg-blue-700">
            Kirim
          </button>
        </div>
        <div class="w-full flex flex-row justify-center my-6">
          <span>Belum punya akun?</span>
          <NuxtLink to="/register" class="text-blue-800">Daftar sekarang</NuxtLink>
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

.input-group {
  @apply my-4 flex flex-col;
}

.input-label {
  @apply text-gray-600 my-2;
}

.toggle-password {
  position: absolute;
  transform: translateY(-50%);
  right: 0;
  top: 50%;
  cursor: pointer;
  @apply px-2;
}

</style>