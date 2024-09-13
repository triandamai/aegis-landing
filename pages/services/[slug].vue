<script setup lang="ts">

</script>

<template>
  <NuxtLayout name="landing">
    <template #default="{detailServices,callback}">
      <ServiceServicesHero
          v-show="detailServices !== null"
          :name="detailServices?.name"
          :slug="detailServices?.slug"
      />
      <div class="w-full h-1/3 text-center items-center"  v-show="detailServices === null">Layanan tidak ditemukan</div>
      <ServiceServicesDetailService
          v-show="detailServices !== null"
          :name="detailServices?.name"
          :description="detailServices?.description"
          :image="detailServices?.image"/>
      <ServiceServicesFeatureService
          v-show="detailServices !== null"
          :title="`Benefit ${detailServices?.name}`"
          :subtitle="detailServices?.description"
          :features="detailServices?.features"
      />
      <ServiceServicesCTAService
          v-show="detailServices !== null"
          :price="detailServices?.price ?? 0"
          @create-reservation="() => callback.onBookService(detailServices)"
      />
    </template>
  </NuxtLayout>
</template>

<style scoped>

</style>