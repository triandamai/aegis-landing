<script setup lang="ts">
import type {Database} from "~/types/database.types";

const showDialog = ref(false)

const client = useSupabaseClient<Database>()
const router = useRouter()

async function gotoBookService(){
  const isLoggedIn = await  client.auth.getUser()
  if(isLoggedIn.error){
    return router.push({path:'/register'})
  }
  showDialog.value = !showDialog.value
}
</script>

<template>
  <DialogBookServices :show="showDialog" @dismiss="showDialog = false"/>
  <NuxtLayout name="landing">
    <ServiceHero @create-reservation="gotoBookService"/>
    <ServiceSecondSection/>
    <ServiceThirdSection @book-services="gotoBookService"/>
    <ServiceForthSection @create-reservation="gotoBookService"/>
    <ServiceFifthSection/>
    <ServiceSixSection/>
  </NuxtLayout>
</template>