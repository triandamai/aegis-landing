<script setup lang="ts">

</script>

<template>
  <NuxtLayout name="landing">
    <template #default="{detailPackages,callback}">
      <ServicePackageHero
          :name="detailPackages?.title"
          :slug="detailPackages?.slug"
      />
      <ServicePackageDetailService
          :name="detailPackages?.title"
          :description="detailPackages?.description"
          :image="detailPackages?.image"/>
      <ServicePackageFeatureService
          :title="detailPackages?.feature_title"
          :subtitle="detailPackages?.feature_sub_title"
          :features="detailPackages?.features"
      />
      <ServicePackageCTAService
          :price="detailPackages?.price ?? 0"
          @create-reservation="() => callback.onBookPackage(detailPackages)"
      />
    </template>
  </NuxtLayout>
</template>

<style scoped>

</style>