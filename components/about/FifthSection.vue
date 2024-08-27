<script setup lang="ts">

import ItemMission from "~/components/about/ItemMission.vue";
</script>

<template>
  <section id="fifth" class="w-svw h-max">
    <!-- Head-->
    <div class="w-full flex flex-row justify-evenly my-10">
      <div class="text-3xl font-semibold md:text-5xl lg:text-5xl">
        <span class="bg-primary text-white rounded-lg">Misi</span>
        <span> Kami</span>
      </div>
    </div>
    <!--    Subtitle  -->
    <div class="w-full flex flex-row justify-center my-10">
      <p class="w-[88vw] md:w-[20vw] lg:w-[20vw] text-center">Kami memiliki dua misi utama yang menjadi fokus dalam setiap usaha kami</p>
    </div>
    <!-- Content-->
    <div class="w-full flex flex-row flex-wrap justify-center">
      <ItemMission
          icon="/images/about/ic-mission1.svg"
          description="Memajukan UMKM untuk Bersaing Secara Internasional"
      />
      <ItemMission
          icon="/images/about/ic-mission2.svg"
          description="Menyediakan Layanan Terintegrasi untuk Kemajuan UMKM"
      />
      <ItemMission
          icon="/images/about/ic-mission2.svg"
          description="Menyediakan Layanan Terintegrasi untuk Kemajuan UMKM"
      />
    </div>
  </section>
</template>

<style scoped>

</style>