<script setup lang="ts">

</script>

<template>
  <section id="forth" class="w-svw h-full bg-gradient-to-b from-blue-300 px-[6vw]">
    <!-- Head-->
    <div class="w-full flex flex-row justify-evenly pt-16 pb-2">
      <div class="text-5xl">
        <span>Layanan yang </span>
        <span class="bg-primary text-white rounded-2xl">
          Disesuaikan
        </span>
        <div class="w-full flex flex-row justify-evenly">
          <span class="text-center">untuk Bisnis Anda</span>
        </div>
      </div>
    </div>
    <!--    Subtitle  -->
    <div class="w-full flex flex-row justify-center mt-4 mb-4">
      <p class="w-[40vw] text-center">Kami menawarkan berbagai layanan yang dirancang untuk membantu bisnis dari skala
        mikro hingga menengah berkembang dengan cara yang efektif.</p>
    </div>
    <!-- Content-->
    <div class="w-[88vw] flex flex-row justify-evenly">
      <div class="w-[30vw]  flex flex-col mr-4">
        <button class="selected-button">Marketing & Digitalization plan</button>
        <button class="button">Financial Planning & Analysis Plan</button>
        <button class="button"> Planning & OPeration Plan</button>
      </div>
      <div class="w-[50vw]  h-[55vh] relative bg-white rounded-2xl border border-gray-200">
        <div class="px-4 py-4">
          <img src="/images/services/bg-service.png">
        </div>
        <div class="w-full px-10 py-4">
          <h1 class="text-2xl mb-2">Marketing & Digitalization plan</h1>
          <p>Rancang strategi pemasaran yang efektif dan manfaatkan digitalisasi untuk menjangkau lebih banyak
            pelanggan.</p>
          <div class="w-full mt-4">
            <div v-for="i in 3">
              <span><Icon name="uil:check" class="bg-green-600"/></span>
              <span>Marketing & Strategiry Research</span>
            </div>
          </div>
          <div class="w-full flex flex-row justify-start items-end mb-4">
            <span class="text-4xl">Rp199.000</span><span>(sekali bayar)</span></div>

          <button class="w-full bg-primary rounded-lg py-2 text-white">Mulai Sekarang</button>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.selected-button {
  @apply bg-blue-800 border border-blue-800 rounded-2xl px-4 py-6 text-white my-2;
}

.button {
  @apply bg-white border border-blue-800 rounded-2xl px-4 py-6 text-blue-800 my-2;
}

.bg-right {
  @apply h-[50vh] w-[50vw] rounded-2xl border border-gray-400;
}

.bg-service {
  background-image: url("/images/services/bg-service.png");
  background-repeat: no-repeat;
  background-size: cover;
  @apply w-[40vw] h-[10vh];
}
</style>