<script setup lang="ts">

import type {User} from "@supabase/auth-js";
import NavPackage from "~/components/header/NavItemPackage.vue";
import NavService from "~/components/header/NavItemServices.vue";

defineProps<{
  style: string,
  parent: string,
  services: Array<DataService>,
  package: Array<DataPackage>
}>()

defineEmits(['refresh'])

const client = useSupabaseClient()
const session = ref<User | null>(null)
const name = ref("")
const showMenuMobile = ref(false)
const showMegaMenu = ref(false)

async function init() {
  const user = await client.auth.getUser();
  if (user.error) {
    session.value = null
  }
  if (user.data) {
    if (user.data.user === null) {
      session.value = null
    } else {
      session.value = user.data.user;
      let split = user.data.user?.user_metadata["full_name"].split(" ")
      if (split.length > 0) {
        name.value = split[0]
      }
    }
  }

}


function signOut() {
  client.auth.signOut().finally(() => {
    init()
  })
}

onMounted(() => {
  init()
  if (import.meta.client) {
    const nav = document.getElementById("services")
    const mega = document.getElementById("container-mega-menu")
    nav?.addEventListener("mouseover", () => {
      showMegaMenu.value = true
    })
    nav?.addEventListener("mouseout", (e) => {
      showMegaMenu.value = false
    })
    mega?.addEventListener("mouseover", () => {
      showMegaMenu.value = true
    })
    mega?.addEventListener("mouseout", (e) => {
      showMegaMenu.value = false
    })
  }
})
</script>

<template>
  <header class="w-full fixed z-10 hidden md:block lg:block xl:block" :class="parent">
    <div :class="style" class="h-[10vh] bg-white flex flex-row justify-between items-center px-8">
      <NuxtLink to="/">
        <NuxtImg src="/images/logo.png"/>
      </NuxtLink>
      <span class="flex flex-row h-full">
        <NuxtLink
            to="/about"
            class="flex flex-col justify-center px-4 mx-4 hover:text-blue-800"
            :active-class="'text-blue-800'">
          Tentang kami
        </NuxtLink>
        <NuxtLink
            class="justify-center h-full px-2 mx-4 hover:text-blue-800 flex flex-row items-center"
            :active-class="'text-blue-800'"
            id="services">
          Layanan&nbsp;
          <IconArrowDown v-show="!showMegaMenu"/>
          <IconArrowUp v-show="showMegaMenu"/>
        </NuxtLink>
        <NuxtLink
            to="/contact"
            class="flex flex-col justify-center px-4  mx-4 hover:text-blue-800"
            :active-class="'text-blue-800'">
          Kontak
        </NuxtLink>
      </span>
      <span v-show="session==null">
        <NuxtLink to="/login"
                  class="border border-blue-800 text-blue-800 rounded-md my-2 mx-2 py-2 px-4 cursor-pointer hover:bg-blue-100"
                  aria-label="button">Masuk</NuxtLink>
        <NuxtLink to="/register"
                  class="border border-blue-800 bg-blue-800 rounded-md my-2 mx-2 py-2 px-4 text-white cursor-pointer hover:bg-blue-700">Daftar</NuxtLink>
      </span>
      <span v-show="session != null" class="flex flex-row justify-start items-center">
        <span class="mr-4">
          <span class="text-gray-500">Hi,</span>
          <span>{{ name }}</span>
        </span>
         <NuxtImg src="https://placehold.co/400" class="rounded-full h-[5vh]"/>
         <button class="h-[5vh] w-[5vh] mx-2" @click="signOut">
              <IconLogOut/>
         </button>
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
        <div v-show="session !== null" class="mt-10 w-full flex flex-row justify-between items-center">
          <div class="w-2/3 flex flex-row justify-start items-center">
            <NuxtImg src="https://placehold.co/400" class="rounded-full w-[20px] h-[20px]"/>
            <h1 class="ml-4">{{ name }}</h1>
          </div>
          <div>
            <button @click="signOut">
              <IconLogOut/>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- MEGA MENU -->
  <div v-show="showMegaMenu"
       class="fixed top-0 w-screen h-max flex flex-row justify-center items-center mt-[10vh]" style="z-index: 20;">
    <div id="container-mega-menu" class="bg-white w-2/3 h-full rounded-2xl shadow-lg shadow-gray-500/40 px-4 py-4">
      <div class="w-full h-2/3 mt-2">
        <h1>PAKET UMKM</h1>
        <div class="w-full h-[1px] bg-gray-300"/>
        <div class="w-full flex flex-row my-2">
          <NavPackage
              v-for="p in package"
              :title="p.title ?? ''"
              :text="p.subtitle ?? ''"
              :icon="p.icon ?? ''"
              :slug="p.slug ?? ''"
              @refresh="()=>$emit('refresh')"
          />
        </div>
      </div>
      <div class="w-full h-max mt-2">
        <h1>LAYANAN KHUSUS</h1>
        <div class="w-full h-[1px] bg-gray-300"/>
        <div class="w-full flex flex-row flex-wrap justify-between items-center my-2">

          <NavService
              v-for="service in services"
              :title="service.name ?? ''"
              :text="service.description ?? ''"
              :icon="service.icon ?? ''"
              :slug="service.slug ?? ''"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>