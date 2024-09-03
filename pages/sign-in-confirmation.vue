<script setup lang="ts">
import type {Database} from "~/types/database.types";

const loading = useLoading()
const route = useRoute()
const router = useRouter()
const client = useSupabaseClient<Database>()
onMounted(()=>{
  const code = route.query.code
  if(code){
    setTimeout(()=>{
      router.push({path:"/",replace:true})
    },1000)
  }
})
</script>

<template>
  <NuxtLayout name="landing">
    <section class="w-svw h-[60vh] flex flex-col justify-center items-center">
      <NuxtImg src="/images/logo.png" class="w-[10vw]"/>
      <NuxtImg src="/images/bg-otp-sent.png" class="w-[20vw]"/>
      <h1 class="text-2xl font-semibold">Memverifikasi login!</h1>
      <p class="text-lg">Mohon tunggu beberapa saat, Anda akan diarahkan ke halaman utama.</p>
    </section>
  </NuxtLayout>
</template>
