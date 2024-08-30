<script setup lang="ts">
const router = useRouter()
onMounted(()=>{
  setTimeout(()=>{
    router.push({path:"/login",replace:true})
  },2000)
})

</script>

<template>
  <NuxtLayout name="landing">
    <section class="w-svw px-[4vw] sm:px-[4vw] md:px-[8vw] lg:px-[8vw] xl:px-[8vw] h-max flex flex-col justify-center items-center">
<!--   DESKTOP   -->
      <div class="hidden sm:hidden md:flex lg:flex xl:flex w-[60vw] h-[50vh] flex-row flex-wrap justify-between relative">
        <div class="w-[20vw] h-[50vh] relative">
          <div class="w-[20vw] h-[10vh] relative bg-white flex flex-row justify-end">
            <div class="w-[5vw] h-[10vh] relative">
              <div class="w-[2vw] h-[2vw] bg-blue-400 absolute bottom-0 right-0"></div>
              <div class="w-[2vw] h-[2vw] bg-white absolute bottom-0 right-0 rounded-br-2xl"></div>
            </div>
            <div class="w-[15vw] h-[10vh] bg-left rounded-tl-2xl"></div>
          </div>
          <div class="w-[32vw] h-[40vh] relative bg-left rounded-l-2xl">

          </div>
        </div>
        <div class=" w-[40vw] h-[50vh] rounded-r-2xl bg-right relative">
          <div class="bg-shape w-full h-full px-10 py-10 z-999">
            <h1 class="text-6xl mb-4">Terimakasih</h1>
            <p class="mb-6 text-2xl">Email Anda telah terverifikasi. Anda akan segera dialihkan ke halaman login.</p>
            <NuxtLink to="/" class="bg-primary rounded-lg text-white py-4 px-6 mt-10">Kembali ke hompage</NuxtLink>
          </div>
        </div>
        <NuxtImg src="/images/bg-contact-sent.webp" class="w-[20vw] h-[50vh] absolute bottom-0"/>
        <NuxtImg src="/images/ic-check.svg" class="absolute top-0 left-0 w-[4vw] h-[4vw]"/>
      </div>
<!--   MOBILE   -->
      <div class="flex sm:flex md:hidden lg:hidden xl:hidden  h-max w-[92vw] sm:w-[92vw] sm:h-[50vh] md:w-[60vw] md:h-[50vh] lg:w-[60vw] lg:h-[50vh] xl:w-[60vw] xl:h-[50vh] flex-row flex-wrap justify-between relative">
        <div class="w-[92vw] h-max sm:w-[92vw] sm:h-[50vh] md:w-[20vw] md:h-[50vh] lg:w-[20vw] lg:h-[50vh] xl:w-[20vw] xl:h-[50vh] relative">
          <div class="w-[92vw] h-[10vh] sm:w-[92vw] sm:h-[10vh] md:w-[20vw] md:h-[10vh] lg:w-[20vw] lg:h-[10vh] xl:w-[20vw] xl:h-[10vh] relative bg-white flex flex-row justify-end">
            <div class="w-[30vw] h-[10vh] sm:w-[30vw] sm:h-[10vh] md:w-[5vw] md:h-[10vh] lg:w-[5vw] lg:h-[10vh] xl:w-[5vw] xl:h-[10vh] relative">
              <div class="w-[2vw] h-[2vw] bg-blue-400 absolute bottom-0 right-0"></div>
              <div class="w-[2vw] h-[2vw] bg-white absolute bottom-0 right-0 rounded-br-2xl"></div>
            </div>
            <div class="w-[62vw] h-[10vh] sm:w-[62vw] sm:h-[10vh] md:w-[15vw] md:h-[10vh] lg:w-[15vw] lg:h-[10vh] xl:w-[15vw] xl:h-[10vh] bg-left rounded-tl-2xl"></div>
          </div>
          <div class="w-[92vw] h-[40vh] sm:w-[92vw] sm:h-[40vh] md:w-[32vw] md:h-[40vh] lg:w-[32vw] lg:h-[40vh] xl:w-[32vw] xl:h-[40vh] relative bg-left rounded-tl-2xl sm:rounded-tl-2xl md:rounded-l-2xl lg:rounded-l-2xl xl:rounded-l-2xl">

          </div>
          <NuxtImg src="/images/bg-contact-sent.webp" class="w-[88vw] h-[50vh] absolute bottom-0"/>
        </div>
        <div class="w-[92vw] h-max bg-right relative">
          <div class="bg-shape flex-flex-row justify-center w-[92vw] h-full">
            <h1 class="text-4xl mb-4 mt-2 text-center">Terimakasih</h1>
            <p class="mb-6 px-2 text-lg text-center">Data Anda telah berhasil kami terima. Tim kami akan segera memproses permintaan
              Anda.</p>
          </div>
          <div class="w-full mb-4 flex flex-row justify-center">
            <NuxtLink to="/contact" class="w-[80vw] bg-primary rounded-lg py-3 text-white text-center">Kembali ke hompage</NuxtLink>
          </div>
        </div>
        <NuxtImg src="/images/ic-check.svg" class="absolute top-0 left-0 w-[20vw] h-[20vw]  sm:w-[15vw] sm:h-[15vw] md:w-[4vw] md:h-[4vw]  lg:w-[4vw] lg:h-[4vw]  xl:w-[4vw] xl:h-[4vw]"/>
      </div>
    </section>
  </NuxtLayout>
</template>
<style scoped>

.bg-shape {
  background-image: url("/images/bg-shape-succes-contact.svg");
  background-repeat: no-repeat;
  background-size: cover;
}

.bg-left{
  background-color: #DAE3FA;
}
.bg-right{
  /*background-color: #CCDBFF;
   background-color: #E3EBFF;
  */
  background: rgb(227,235,255);
  background: linear-gradient(90deg, rgba(227,235,255,1) 0%, rgba(204,219,255,1) 100%);
}

</style>