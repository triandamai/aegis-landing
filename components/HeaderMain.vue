<script setup lang="ts">

defineProps(['style', 'parent'])
const client = useSupabaseClient()
const session = ref<any | null>(null)
const showMenuMobile = ref(false)
onMounted(() => {
  client.auth.getSession()
      .then(data => {
        if (data.error) {
          session.value = null
        } else {
          if (data.data.session == null) {
            session.value = null
          } else {
            session.value = data;
          }
        }
      }).catch(() => {
    session.value = null
  })
})
</script>

<template>
  <header class="w-full fixed z-10 hidden md:block lg:block xl:block" :class="parent">
    <div
        :class="style"
        class="h-[10vh] bg-white py-2 px-8 flex flex-row justify-between items-center">
      <NuxtLink to="/">
        <NuxtImg src="/images/logo.png"/>
      </NuxtLink>
      <span class="flex flex-row">
        <NuxtLink to="/about" class="mx-4 hover:text-blue-800" :active-class="'text-blue-800'">Tentang kami</NuxtLink>
        <NuxtLink to="/services" class="mx-4 hover:text-blue-800" :active-class="'text-blue-800'">Layanan</NuxtLink>
        <NuxtLink to="/contact" class="mx-4 hover:text-blue-800" :active-class="'text-blue-800'">Kontak</NuxtLink>
      </span>
      <span>
        <NuxtLink to="/login"
                  class="border border-blue-800 text-blue-800 rounded-md my-2 mx-2 py-2 px-4 cursor-pointer hover:bg-blue-100"
                  aria-label="button">Masuk</NuxtLink>
        <NuxtLink to="/register"
                  class="border border-blue-800 bg-primary rounded-md my-2 mx-2 py-2 px-4 text-white cursor-pointer hover:bg-blue-700">Memulai</NuxtLink>
      </span>
    </div>
  </header>
  <!-- MOBILE -->
  <header class="w-full bg-white fixed z-10 block md:hidden lg:hidden xl:hidden">
    <div class="w-full flex flex-row justify-between px-[2vw] py-[1vw]">
      <NuxtLink to="/">
        <NuxtImg src="/images/logo.png" class="h-[5vh] w-[15vh]" width="100%" height="50%"/>
      </NuxtLink>
      <button>
        <IconMenu class="cursor-pointer w-[5vw] h-[10vw]" @click="()=>{showMenuMobile = !showMenuMobile}"/>
      </button>
    </div>
    <!-- MENU MOBILE -->
    <div v-show="showMenuMobile" class="fixed z-30 block h-screen w-screen bg-white flex-col">
      <div class="w-full flex flex-col px-4 py-2">
        <NuxtLink to="/about" class="border-b border-gray-200 py-4">Tentang Kami</NuxtLink>
        <NuxtLink to="/services" class="border-b border-gray-200 py-4">Layanan</NuxtLink>
        <NuxtLink to="/contact" class="border-b border-gray-200 py-4">Kontak</NuxtLink>
        <div v-show="session === null" class="mt-10 w-full flex flex-col">
          <NuxtLink to="/login"
                    class="text-center my-2 px-4 py-3 bg-white border border-blue-800 rounded-lg text-blue-800">Masuk
          </NuxtLink>
          <NuxtLink to="/register"
                    class="text-center my-2 px-4 py-3 bg-blue-800 border border-blue-800 rounded-lg text-white">Memulai
          </NuxtLink>
        </div>
        <div v-show="session !== null" class="mt-10 w-full flex flex-col">
          <div class="w-full flex flex-row justify-start items-center">
            <NuxtImg src="/images/main/dummy-avatar.webp" class="rounded-full"/>
            <h1 class="ml-4">Rimuru</h1>
          </div>
        </div>
      </div>
    </div>
  </header>

</template>

<style scoped>

</style>