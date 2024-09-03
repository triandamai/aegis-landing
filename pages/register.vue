<script setup lang="ts">
const register = useRegister()
</script>

<template>
  <NuxtLayout name="landing">
    <section class="w-svw h-max flex flex-row flex-wrap justify-center">
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
            <input id="full-name"  v-model="register.fullName" type="email" class="input" placeholder="Nama lengkap"/>
          </div>
          <div class="input-group">
            <label for="email" class="input-label">Email</label>
            <input id="email"  v-model="register.email" type="email" class="input" placeholder="john@example.com"/>
          </div>
          <div class="input-group">
            <label for="password">Password:</label>
            <div class="w-full flex flex-row justify-between relative">
              <input v-model="register.password" required :type="register.showPassword ? 'text' :'password'" id="password" class="input" placeholder="Enter your password">
              <span @click="register.showPassword = !register.showPassword" class="toggle-password">
                <IconEye v-show="register.showPassword" ></IconEye>
                <IconEyeOff v-show="!register.showPassword"></IconEyeOff>
            </span>
            </div>
          </div>
          <div class="input-group-checkbox flex flex-row relative">
            <input id="has-business" v-model="register.hasBusiness" type="checkbox" class="mr-4" placeholder="password"/>
            <label for="has-business" class="input-label">Apakah Anda sudah Memiliki Bisnis?</label>
          </div>
          <div v-show="register.hasBusiness">
            <div class="input-group">
              <label for="business-name" class="input-label">Nama Bisnis</label>
              <input id="business-name" v-model="register.businessName" type="text" class="input" placeholder="Masukkan nama bisnis"/>
            </div>
            <div class="input-group">
              <label for="phone" class="input-label">Phone</label>
              <input id="phone"  v-model="register.businessPhone" type="text" class="input" placeholder="+62 888 8888 8888"/>
            </div>
            <div class="input-group">
              <label for="business-size" class="input-label">Ukuran Bisnis</label>
              <select id="business-size"  v-model="register.businessSize" class="input">
                <option selected value="NONE" class="text-gray-600">Pilih Ukuran Bisnis</option>
                <option value="MICRO">Mikro</option>
                <option value="SMALL">Kecil</option>
                <option value="MEDIUM">Menengah</option>
              </select>
            </div>
          </div>
          <div class="w-full flex flex-row justify-center items-center my-3">
            <div class="w-1/4 sm:w-1/4 md:w-1/3 lg:w-1/3 xl:w-1/3 h-[1px] bg-gray-300"></div>
            <p class="mx-1 text-gray-500 ">Atau daftar dengan</p>
            <div class="w-1/4 sm:w-1/4 md:w-1/3 lg:w-1/3 xl:w-1/3 h-[1px] bg-gray-300"></div>
          </div>
          <div class="w-full flex flex-row justify-center items-center my-4">
            <button @click="register.signInGoogle"><NuxtImg src="/images/ic-google.svg" class="w-[30px] h-[30px] mr-2"/></button>
            <button @click="register.signInFacebook"><NuxtImg src="/images/ic-fb.svg" class="w-[36px] h-[36px] ml-2"/></button>
          </div>
          <button @click="register.signUpEmail" class="w-full bg-blue-800 rounded-lg px-2 py-2 text-white hover:bg-blue-700">Kirim</button>
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


.input-group-checkbox {
  @apply my-4;
}

</style>