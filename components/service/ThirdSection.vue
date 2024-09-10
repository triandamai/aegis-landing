<script setup lang="ts">
import ItemCategory from "~/components/service/ItemCategory.vue";
defineProps<{
  packages:Array<DataDetailPackage>
}>()
defineEmits(['book-services'])
</script>

<template>
  <section id="third" class="w-svw h-max bg-gradient-to-t from-blue-300">
    <!-- Head-->
    <div class="w-full flex flex-row justify-evenly my-10">
      <div class="text-3xl sm:text-4xl md:text-5xl lg:text-5xl">
        <span class="bg-blue-800 text-white rounded-lg">Harga Terjangkau</span><span> Untuk</span>
        <div class="w-full flex flex-row justify-evenly">
          <span class="text-center">Semua Ukuran Bisnis</span>
        </div>
      </div>
    </div>
    <!--    Subtitle  -->
    <div class="w-full flex flex-row justify-center my-10">
      <p class="w-[92vw] sm:w-[40vw] md:w-[40vw] lg:w-[40vw] xl:w-[40vw] text-center">Kami menawarkan berbagai layanan yang dirancang untuk membantu bisnis dari skala
        mikro hingga menengah
        berkembang dengan cara yang efektif.</p>
    </div>
    <!-- Content-->
    <div class="w-full h-max flex flex-row flex-wrap justify-center">
      <ItemCategory
          v-for="(item,idx) in packages"
          :name="item.title ?? ''"
          :price="item.price ?? 0"
          :description="item.subtitle ?? ''"
          :primary="item.recommendation ?? false"
          :items="item.features.map((v) => v.feature?.name ?? '')"
          @select="()=>{$emit('book-services',item)}"
      />
    </div>
  </section>
</template>

<style scoped>

</style>