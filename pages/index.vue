<script setup lang="ts">
definePageMeta({
  title: "Home"
})

</script>

<template>
  <NuxtLayout name="landing">
    <template #default="{services,callback}">
      <MainHero/>
      <MainSecondSection :services="services"/>
      <MainThirdSection/>
      <MainForthSection :services="services" @create-reservation="(value)=>callback.onBookService(value)" />
      <MainFifthSection/>
      <MainSixSection/>
    </template>
  </NuxtLayout>
</template>