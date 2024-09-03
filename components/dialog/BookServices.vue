<script setup lang="ts">

defineProps(['show'])
const emit = defineEmits(['dismiss'])
const service = useServices()

const {data,error} = useAsyncData(async ()=>{
  const data = await fetch('https://alamat.thecloudalert.com/api/provinsi/get').then(res=>res.json())
  if(data.result) return data.result
  return []
})
const router = useRouter()

async function submit(){
  const result = await service.bookServices()
  if(result){
    emit('dismiss')
    await router.push({path:'/reservation-sent',replace:true})
  }
}
</script>

<template>
  <div v-show="show" class=" fixed w-screen h-screen bg-gray-900 bg-opacity-70 flex flex-col justify-center items-center z-30">
    <div class="w-full h-full sm:w-full sm:h-full md:w-2/3 md:h-max lg:w-1/2 lg:h-max xl:w-1/2 xl:h-max rounded-lg bg-white relative">
      <div class="w-full h-max px-4 py-4">
        <div class="w-full flex flex-row justify-between items-center">
          <h1 class="font-semibold text-lg">Pesan Layanan</h1>
          <IconClose @click="$emit('dismiss')" class="w-[40px] h-[40px] sm:w-[40px] sm:h-[40px] md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px] xl:w-[30px] xl:h-[30px] cursor-pointer"/>
        </div>
        <div class="input-group">
          <label for="phone" class="input-label">Nomor Hp</label>
          <input id="phone" v-model="service.phoneNumber"  type="email" class="input" placeholder="Masukkan Nomor Hp"/>
        </div>
        <div class="input-group">
          <label for="email" class="input-label">Email</label>
          <input id="email" v-model="service.email"  type="email" class="input" placeholder="tes@gmail.com"/>
        </div>
        <div class="input-group">
          <label for="name" class="input-label">Nama Bisnis</label>
          <input id="name" v-model="service.businessName"  type="email" class="input" placeholder="Masukkan nama bisnis"/>
        </div>
        <div class="input-group">
          <label for="type" class="input-label">Jenis Layanan </label>
          <select v-model="service.serviceType" id="type" class="input">
            <option selected value="NONE">Pilih jenis layanan</option>
            <option value="MICRO">Mikro</option>
            <option value="SMALL">Kecil</option>
            <option value="MEDIUM">Menengah</option>
          </select>
        </div>
        <div class="input-group">
          <label for="type" class="input-label">Pilih Lokasi</label>
          <select  id="type" class="input" v-model="service.location">
            <option selected value="NONE">Pilih lokasi</option>
            <option v-for="item in data" :value="item.text">{{item.text}}</option>
          </select>
        </div>
        <div class="w-full rounded-lg bg-gray-200 px-2 py-4">
          <div class="w-full flex flex-row justify-between text-sm">
            <span>Tanggal dan waktu booking:</span>
            <span class="text-end">{{service.bookAt.toLocaleString()}}</span>
          </div>
          <div class="w-full flex flex-row justify-between text-sm">
            <span>Lokasi layanan:</span>
            <span class="text-end">{{service.location}}</span>
          </div>
        </div>
        <div class="w-full flex flex-row justify-between items-center py-4">
          <button @click="$emit('dismiss')" class="w-1/2 bg-white rounded-lg text-blue-800 border border-blue-800 py-2">Batal</button>
          <div class="w-[20px] "></div>
          <button @click="submit" class="w-1/2 bg-blue-800 rounded-lg text-white border border-blue-800 py-2">Pesan Layanan</button>
        </div>
      </div>
    </div>

  </div>
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