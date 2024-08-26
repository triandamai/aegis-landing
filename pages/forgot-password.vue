<script setup lang="ts">
import HeaderMain from "~/components/HeaderMain.vue";

import {useScroll} from "~/composables/useScroll";

const {style, init, onScroll} = useScroll()

onMounted(() => {
  window.scrollTo(0, 0)
  init()
})
</script>

<template>
  <NuxtLayout name="landing">
    <section class="w-svw h-[80vh] flex flex-row justify-center">
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
      <LoginFormForgotPassword/>
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