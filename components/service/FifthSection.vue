<script setup lang="ts">
let faq = reactive([
  {
    question: "Pertanyaan 11",
    answer: "Ini adalah jawaban untuk pertanyaan 1",
    open: false
  },
  {
    question: "Pertanyaan 11",
    answer: "Ini adalah jawaban untuk pertanyaan 1",
    open: false
  },
  {
    question: "Pertanyaan 11",
    answer: "Ini adalah jawaban untuk pertanyaan 1",
    open: false
  }
  ,
  {
    question: "Pertanyaan 11",
    answer: "Ini adalah jawaban untuk pertanyaan 1",
    open: false
  },
  {
    question: "Pertanyaan 11",
    answer: "Ini adalah jawaban untuk pertanyaan 1",
    open: false
  },
  {
    question: "Pertanyaan 11",
    answer: "Ini adalah jawaban untuk pertanyaan 1",
    open: false
  }
])
</script>

<template>
  <section id="fifth" class="w-svw h-max px-[6vw]">
    <!-- Head-->
    <div class="w-full flex flex-row justify-start pt-16 pb-2">
      <div class="text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-semibold">
         <span class="bg-primary text-white rounded-lg">Pertanyaan</span>
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
      <div v-for="(item) in faq" class="w-full sm:w-[42vw] md:w-[42vw] lg:w-[42vw] xl:w-[42vw] py-4 border border-gray-200 m-2 rounded-2xl">
        <div class=" w-full px-4 py-4 flex flex-row justify-between items-center">
          <h1 class="text-2xl sm:text-5xl md:text-5xl lg:text-5xl text-gray-800">Pertanyaan</h1>
          <span class="ml-2 w-[50px] h-[50px] bg-blue-200 rounded-md p-1 flex flex-row justify-center items-center"><IconPlus class="w-full h-full text-gray-600"/></span>
        </div>
        <div v-show="item.open">
          <h1 class="text-gray-800">{{ item.question }}</h1>
          <p>{{ item.answer }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>