<script setup lang="ts">

</script>

<template>
  <NuxtLayout name="landing" v-slot:default="{ packages,service }">
    <ServicePackageHero/>
    <ServicePackageDetailService/>
    <ServicePackageFeatureService/>
    <ServicePackageCTAService/>
  </NuxtLayout>
</template>

<style scoped>

</style>