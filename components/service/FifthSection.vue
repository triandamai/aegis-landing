<script setup lang="ts">
import ItemFaq from "~/components/service/ItemFaq.vue";

let faq = reactive([
  {
    question: "Apa itu AEGIS dan layanan apa yang ditawarkan?",
    answer: "AEGIS adalah agensi konsultasi bisnis yang menawarkan layanan strategi bisnis, manajemen operasional, pengembangan pasar, dan solusi manajemen risiko."
  },
  {
    question: "Berapa lama biasanya proyek konsultasi dengan AEGIS berlangsung?",
    answer: "Durasi proyek bervariasi tergantung pada kompleksitas dan kebutuhan klien, namun rata-rata berlangsung antara 3 hingga 6 bulan."
  },
  {
    question: "Apakah AEGIS menawarkan layanan pelatihan atau workshop?",
    answer: "Ya, AEGIS menyediakan pelatihan dan workshop untuk membantu klien meningkatkan keterampilan manajemen dan operasional mereka."
  }
  ,
  {
    question: "Bagaimana AEGIS menentukan biaya konsultasi?",
    answer: "Biaya konsultasi ditentukan berdasarkan cakupan proyek, kompleksitas, dan durasi, serta disesuaikan dengan kebutuhan spesifik klien."
  },
  {
    question: "Apakah AEGIS memiliki spesialisasi industri tertentu?",
    answer: "AEGIS memiliki pengalaman di berbagai industri termasuk teknologi, manufaktur, ritel, dan keuangan."
  },
  {
    question: "Bagaimana cara menghubungi AEGIS untuk konsultasi?",
    answer: "Bagaimana cara menghubungi AEGIS untuk konsultasi? Anda dapat menghubungi AEGIS melalui situs web resmi kami, email, atau telepon untuk mengatur konsultasi awal"
  }
])
</script>

<template>
  <section id="fifth" class="w-svw h-max px-[6vw]">
    <!-- Head-->
    <div class="w-full flex flex-row justify-start pt-16 pb-2">
      <div class="text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-semibold">
         <span class="bg-blue-800 text-white rounded-lg">Pertanyaan</span>
        <span> Tentang AEGIS</span>
      </div>
    </div>
    <!--    Subtitle  -->
    <div class="w-full flex flex-row justify-start mt-4 mb-4">
      <p class="w-full sm:w-[40vw] md:w-[40vw] lg:w-[40vw] xl:w-[40vw] text-center sm:text-center md:text-start lg:text-start xl:text-start">Temukan jawaban atas pertanyaan umum tentang AEGIS.ID di sini. Kami menjawab semua
        pertanyaan Anda tentang layanan, paket, dan cara kami dapat membantu bisnis Anda.</p>
    </div>
    <!-- Content-->
    <div class="w-full flex flex-row justify-evenly flex-wrap">
      <ItemFaq v-for="(item) in faq"  :question="item.question" :answer="item.answer"/>
    </div>
  </section>
</template>

<style scoped>

</style>