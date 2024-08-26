<script setup lang="ts">

import ItemPricipal from "~/components/about/ItemPricipal.vue";
</script>

<template>
  <section id="second" class="w-svw h-full">
    <!-- Head-->
    <div class="w-full flex flex-row justify-evenly my-10">
      <div class="text-5xl">
        <span class="bg-primary text-white rounded-2xl">
         Prinsip
        </span>
        <span>Kami</span>
      </div>
    </div>
    <!--    Subtitle  -->
    <div class="w-full flex flex-row justify-center my-10">
      <p class="w-[40vw] text-center">Prinsip-prinsip ini membantu kami memberikan layanan terbaik untuk UMKM</p>
    </div>
    <!-- Content-->
    <div class="w-full flex flex-row justify-center">
      <ItemPricipal
          body-style="from-yellow-200 to-yellow-50"
          footer-style="from-yellow-100 to-yellow-50"
          cutout-color="bg-yellow-50"
          title="Innovation"
          icon="/images/about/ic-innovation.svg"
          description="Kami selalu mencari cara-cara baru dan kreatif untuk membantu UMKM berkembang."
      />
      <ItemPricipal
          body-style="from-red-200 to-red-50"
          footer-style="from-red-100 to-red-50"
          cutout-color="bg-red-50"
          title="Self Improvement"
          icon="/images/about/ic-self-improvement.svg"
          description="Kami berkomitmen untuk selalu meningkatkan kualitas layanan untuk bisa tumbuh dan sukses."/>

      <ItemPricipal
          body-style="from-green-200 to-green-50"
          footer-style="from-green-100 to-green-50"
          cutout-color="bg-green-50"
          title="Collaoration"
          icon="/images/about/ic-collaboration.svg"
          description="Kami percaya bahwa kerja sama yang baik membawa hasil yang lebih besar dan lebih kuat."/>

    </div>
  </section>
</template>

<style scoped>

</style>