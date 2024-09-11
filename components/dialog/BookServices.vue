<script setup lang="ts">
defineProps<{
  show:boolean,
  locations:Array<{id:string,text:string}>,
  business:Array<Business>,
  services:Array<DataDetailService>,
  packages:Array<DataDetailPackage>,
  isPackageReservation: boolean,
}>()


const businessName = defineModel<string>('businessName')
const businessPhoneNumber = defineModel<string>('businessPhoneNumber')
const businessEmail = defineModel<string>('businessEmail')
const businessScale = defineModel<string>('businessScale')

const businessId = defineModel<number|null>("businessId")
const serviceId = defineModel<number|null>("serviceId")
const packageId = defineModel<number|null>("packageId")
const selectedLocation = defineModel("selectedLocation")

const emit = defineEmits(['dismiss','submit'])

</script>

<template>
<ClientOnly>
  <div v-show="show" class="fixed w-screen h-screen bg-gray-900 bg-opacity-70 flex flex-col justify-center items-center z-30">
    <div class="w-max h-full sm:w-full sm:h-full md:w-2/3 md:h-max lg:w-1/2 lg:h-max xl:w-1/2 xl:h-max rounded-lg bg-white relative my-4">
      <div class="w-full h-full rounded-lg relative">
        <div class="w-full absolute top-0 px-4 py-1 bg-white flex flex-row justify-between items-center">
          <h1 class="font-semibold text-lg">Pesan Layanan</h1>
          <IconClose @click="$emit('dismiss')" class="w-[40px] h-[40px] sm:w-[40px] sm:h-[40px] md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px] xl:w-[30px] xl:h-[30px] cursor-pointer"/>
        </div>
        <div class="w-full h-[80svh] overflow-y-scroll px-4 mb-10 mt-6">
          <div v-show="business?.length < 1" class="input-group">
            <label for="phone" class="input-label">Nomor Hp Bisnis</label>
            <input id="phone" v-model="businessPhoneNumber"  type="email" class="input" placeholder="Masukkan Nomor Hp"/>
          </div>
          <div v-show="business?.length < 1" class="input-group">
            <label for="email" class="input-label">Email Bisnis</label>
            <input id="email" v-model="businessEmail"  type="email" class="input" placeholder="tes@gmail.com"/>
          </div>
          <div v-show="business?.length < 1" class="input-group">
            <label for="name" class="input-label">Nama Bisnis</label>
            <input id="name" v-model="businessName"  type="email" class="input" placeholder="Masukkan nama bisnis"/>
          </div>
          <div v-show="business?.length < 1" class="input-group">
            <label for="business-size" class="input-label">Ukuran Bisnis</label>
            <select id="business-size"  v-model="businessScale" class="input">
              <option selected value="NONE" class="text-gray-600">Pilih Ukuran Bisnis</option>
              <option value="MICRO">Mikro</option>
              <option value="SMALL">Kecil</option>
              <option value="MEDIUM">Menengah</option>
            </select>
          </div>
          <div v-show="business?.length > 0" class="input-group">
            <label for="business" class="input-label">Bisnis </label>
            <select v-model="businessId" id="business" class="input">
              <option selected value="0">Pilih bisnis</option>
              <option v-for="item in business" :value="item.id">{{item.business_name}}</option>
            </select>
          </div>
          <div v-show="isPackageReservation" class="input-group">
            <label for="package" class="input-label">Jenis Layanan </label>
            <select v-model="packageId" id="package" class="input">
              <option selected value="0">Pilih jenis layanan</option>
              <option v-for="item in packages" :value="item.id">{{item.title}}</option>
            </select>
          </div>
          <div v-show="!isPackageReservation" class="input-group">
            <label for="service" class="input-label">Jenis Layanan</label>
            <select v-model="serviceId" id="service" class="input">
              <option selected value="0">Pilih jenis layanan</option>
              <option v-for="item in services" :value="item.id">{{item.name}}</option>
            </select>
          </div>
          <div class="input-group">
            <label for="type" class="input-label">Pilih Lokasi</label>
            <select  id="type" class="input" v-model="selectedLocation">
              <option selected value="NONE">Pilih lokasi</option>
              <option v-for="item in locations" :value="item.text">{{item.text}}</option>
            </select>
          </div>
          <div class="w-full rounded-lg bg-gray-200 px-2 py-4">
            <div class="w-full flex flex-row justify-between text-sm">
              <span>Tanggal dan waktu booking:</span>
              <span class="text-end">{{new Date().toLocaleString()}}</span>
            </div>
            <div class="w-full flex flex-row justify-between text-sm">
              <span>Lokasi layanan:</span>
              <span class="text-end">{{(selectedLocation === "NONE" ? 'Belum memilih lokasi': selectedLocation)}}</span>
            </div>
          </div>
        </div>
        <div class="absolute bottom-0 bg-white px-4 rounded-b-lg w-full flex flex-row justify-between items-center py-2">
          <button @click="$emit('dismiss')" class="w-1/2 bg-white rounded-lg text-blue-800 border border-blue-800 py-2">Batal</button>
          <div class="w-[20px] "></div>
          <button @click="$emit('submit')" class="w-1/2 bg-blue-800 rounded-lg text-white border border-blue-800 py-2">Pesan Layanan</button>
        </div>
      </div>
    </div>

  </div>
</ClientOnly>
</template>

<style scoped>
.input{
  @apply w-full rounded-lg border border-gray-300 px-2 py-2;
}
.input-textarea{
  @apply w-full rounded-lg border border-gray-300 px-2 py-2;
}
.input-group{
  @apply my-2;
}
.input-label{
  @apply text-gray-600 my-2;
}
</style>