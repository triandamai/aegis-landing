<script setup lang="ts">
import ItemServiceFeature from "~/components/service/package/ItemServiceFeature.vue";
defineProps<{
  title: string|null;
  subtitle:string|null;
  features:Array<DataDetailFeaturePackage> | null ;
}>()

</script>

<template>
  <section class="w-svw h-max sm:px-[6vw] md:px-[6vw] lg:px-[6vw]">
    <div class="w-full mb-4">
      <h1 class="text-4xl font-bold">{{title ?? ''}}</h1>
      <p>{{subtitle}}</p>
    </div>
    <div class="w-full flex flex-row flex-wrap justify-center">
      <ItemServiceFeature
          v-for="item in features"
          :title="item.feature?.name ?? ''"
          :subtitle="item.feature?.description ?? ''"
          :image="item.feature?.image ?? ''"
      />
    </div>
  </section>
</template>

<style scoped>

</style>