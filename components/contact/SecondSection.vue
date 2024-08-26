<script setup lang="ts">

import ItemContact from "~/components/contact/ItemContact.vue";
</script>

<template>
  <section id="second" class="w-svw bg-gray-200 h-[50vh] px-[6vw]">
    <div class="w-[88vw] h-[50vh] flex flex-row justify-between items-center">
      <ItemContact
          name="Hubungi sales kami"
          description="Masih bingung memilih paket yang tepat? Hubungi tim kami membantu Anda menemukan pilihan terbaik untuk pertumbuhan bisnis Anda.",
          icon="/images/ic-wa.svg"
      />
      <ItemContact
          name="Hubungi support kami"
          description="Perlu bantuan? Tim dukungan kami siap membantu Anda. Jangan ragu untuk menghubungi kami dan dapatkan solusi cepat untuk setiap masalah yang Anda hadapi."
          icon="/images/ic-gmail.svg"
      />
    </div>
  </section>
</template>

<style scoped>

</style>