<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
import HeaderMain from "~/components/HeaderMain.vue";
import {useScroll} from "~/composables/useScroll";
import type {Database} from "~/types/database.types";

const {style, styleParent, init, onScroll} = useScroll()
const {alert, close} = useAlert()
const {loading} = useLoading()
const landing = useLanding()
useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

const data = useAsyncData(async () => {
  landing.getServices()
  landing.getPackage()
  landing.getDetailPackage()
  landing.getDetailServices()
})


function openFormReservation(){
  landing.getServices()
  landing.getPackage()
  landing.getBusiness()
}


function getLocations(){
  landing.getLocations()
}

onMounted(() => {
  window.scrollTo(0, 0)
  init()
  document.documentElement.classList.add("light")
})


const client = useSupabaseClient<Database>()
const router = useRouter()

async function gotoBookService() {
  const isLoggedIn = await client.auth.getUser()
  if (isLoggedIn.error) {
    return router.push({path: '/register'})
  }
  getLocations()
  openFormReservation()
  landing.showDialogCreateReservation = true
}

const callback = {
  onBookService: function (service:DataDetailService) {
    landing.serviceId = service.id
    landing.isPackageReservation = false
    gotoBookService()
  },
  onBookPackage: function(packages:DataDetailPackage){
    landing.packageId = packages.id
    landing.isPackageReservation = true
    gotoBookService()

  }
}
</script>

<template>
  <DialogBookServices
      :show="landing.showDialogCreateReservation"
      v-model:business-name="landing.businessName"
      v-model:business-email="landing.businessEmail"
      v-model:business-phone-number="landing.businessPhoneNumber"
      v-model:business-scale="landing.businessScale"
      v-model:business-id="landing.businessId"
      v-model:service-id="landing.serviceId"
      v-model:package-id="landing.packageId"
      v-model:selected-location="landing.location"

      :locations="landing.locations"
      :services="landing.services"
      :packages="landing.package"
      :is-package-reservation="landing.isPackageReservation"
      :business="landing.business"
      @dismiss="landing.showDialogCreateReservation = false"
      @submit="landing.sendReservation"
  />
  <main v-on:scroll="onScroll" class="w-screen h-screen relative overflow-x-hidden overflow-y-scroll">
    <div v-show="loading" class="fixed top-0 right-0 bg-gray-600 bg-opacity-50 z-50 h-screen w-screen">
      <div class="w-full h-full relative flex flex-row justify-center items-center">
        <div class="loader"></div>
      </div>
    </div>
    <div v-show="alert.show"
         class="fixed top-0 right-0 z-40 w-[88vw] mt-[10vh] md:mt-[4vh] lg:mt-[4vh] xl:mt-[4vh] md:w-[30vw] lg:w-[30vh] xl:w-[30vh] mx-10">
      <!--   SUCCESS   -->
      <div v-if="alert.type == 'success'"
           class="bg-green-100 border border-green-400 py-2 px-4 rounded-lg relative shadow-gray-300">
        <div class="w-full flex flex-row justify-between items-center">
          <p class="opacity-100 text-green-700">{{ alert.message }}</p>
          <span class="absolute right-0 mr-4  flex flex-row justify-end items-center" @click="close"><IconClose/></span>
        </div>
      </div>
      <!--  INFO    -->
      <div v-if="alert.type == 'info'"
           class="bg-blue-100 border border-blue-400 py-2 px-4 rounded-lg relative shadow-gray-300">
        <div class="w-full flex flex-row justify-between items-center">
          <p class="opacity-100 text-blue-600">{{ alert.message }}</p>
          <span class="absolute right-0 mr-4  flex flex-row justify-end items-center cursor-pointer" @click="close"><IconClose/></span>
        </div>
      </div>
      <!--   ERROR   -->
      <div v-if="alert.type == 'error'"
           class="bg-red-100 border border-red-400 text-red-700 py-2 px-4 rounded-lg relative shadow-gray-300">
        <div class="w-full flex flex-row justify-between items-center">
          <p class="opacity-100 text-red-700">{{ alert.message }}</p>
          <span class="absolute right-0 mr-4  flex flex-row justify-end items-center cursor-pointer" @click="close"><IconClose/></span>
        </div>
      </div>
      <!--   WARNING   -->
      <div v-if="alert.type == 'warning'"
           class="bg-orange-100 border border-orange-400 text-red-700 py-2 px-4 rounded-lg relative shadow-gray-300">
        <div class="w-full flex flex-row justify-between items-center">
          <p class="opacity-100 text-orange-700">{{ alert.message }}</p>
          <span class="absolute right-0 mr-4  flex flex-row justify-end items-center cursor-pointer" @click="close"><IconClose/></span>
        </div>
      </div>
    </div>
    <HeaderMain
        :style="style"
        :parent="styleParent"
        :services="landing.services"
        :package="landing.package"
        @refresh="() => {data.refresh()}"
    />
    <div class="pt-[10vh] sm:pt-[10vh] md:pt-[15vh] lg:pt-[15vh] xl:pt-[15vh]"></div>
   <slot
        :services="landing.services"
        :packages="landing.package"
        :detail-packages="landing.detailPackage"
        :detail-services="landing.detailService"
        :loading-packages="landing.loadingDetailPackage"
        :callback="callback"
    />
    <MainFooter/>
  </main>
</template>
<style scoped>
.loader {
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
  @apply border-blue-800 h-[40px] w-[40px] bg-blue-800;
}

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>