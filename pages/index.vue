<script setup lang="ts">
definePageMeta({
  title: "Home"
})

</script>

<template>
  <NuxtLayout name="landing">
    <template #default="{services}">
      <MainHero/>
      <MainSecondSection/>
      <MainThirdSection/>
      <MainForthSection :services="services" />
      <MainFifthSection/>
      <MainSixSection/>
    </template>
  </NuxtLayout>
</template>