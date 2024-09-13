<script setup lang="ts">

</script>

<template>
  <NuxtLayout name="landing">
    <template #default="{detailPackages,callback}">
      <ServicePackageHero
          v-show="detailPackages !== null"
          :name="detailPackages?.title"
          :slug="detailPackages?.slug"
      />
      <div class="w-full h-1/3 text-center items-center"  v-show="detailPackages === null">Paket layanan tidak ditemukan</div>
      <ServicePackageDetailService
          v-show="detailPackages !== null"
          :name="detailPackages?.title"
          :description="detailPackages?.description"
          :image="detailPackages?.image"/>
      <ServicePackageFeatureService
          v-show="detailPackages !== null"
          :title="detailPackages?.feature_title"
          :subtitle="detailPackages?.feature_sub_title"
          :features="detailPackages?.features"
      />
      <ServicePackageCTAService
          v-show="detailPackages !== null"
          :price="detailPackages?.price ?? 0"
          @create-reservation="() => callback.onBookPackage(detailPackages)"
      />
    </template>
  </NuxtLayout>
</template>

<style scoped>

</style>