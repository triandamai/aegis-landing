<script setup lang="ts">

</script>

<template>
  <NuxtLayout name="landing">
    <template #default="{packages,services,callback}">
      <ServiceHero @create-reservation="()=>callback.onBookService({id:0})"/>
      <ServiceSecondSection :services="services"/>
      <ServiceThirdSection :packages="packages" @create-reservation="(value)=>callback.onBookPackage(value)"/>
      <ServiceForthSection :services="services" @create-reservation="(value)=>  callback.onBookService(value)"/>
      <ServiceFifthSection/>
      <ServiceSixSection/>
    </template>
  </NuxtLayout>
</template>