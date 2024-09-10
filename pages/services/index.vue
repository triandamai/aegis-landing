<script setup lang="ts">

</script>

<template>
  <NuxtLayout name="landing">
    <template #default="{packages,services,callback}">
      <ServiceHero @create-reservation="()=>{
         callback.onBookService({sa:''})
      }"/>
      <ServiceSecondSection :services="services"/>
      <ServiceThirdSection :packages="packages" @book-services="()=>{
        callback.onBookService({sa:''})
      }"/>
      <ServiceForthSection :services="services" @create-reservation="()=>{
         callback.onBookService({sa:''})
      }"/>
      <ServiceFifthSection/>
      <ServiceSixSection/>
    </template>
  </NuxtLayout>
</template>