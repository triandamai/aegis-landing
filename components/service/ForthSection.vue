<script setup lang="ts">
const selected = ref(0)

function onSelectedTab(pos: number) {
  selected.value = pos;
}

defineEmits(['create-reservation'])
</script>

<template>
  <section id="forth" class="w-svw h-max bg-gradient-to-b from-blue-300 md:px-[6vw] lg:px-[6vw] xl:px-[6vw] pt-10">
    <!-- Head-->
    <div class="w-full flex flex-row justify-evenly pt-16 pb-2">
      <div class="text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-semibold">
        <span>Layanan yang </span>
        <span class="bg-blue-800 text-white rounded-lg">
          Disesuaikan
        </span>
        <div class="w-full flex flex-row justify-evenly">
          <span class="text-center">untuk Bisnis Anda</span>
        </div>
      </div>
    </div>
    <!--    Subtitle  -->
    <div class="w-full flex flex-row justify-center mt-4 mb-4">
      <p class="w-full sm:w-[40vw] md:w-[40vw] lg:w-[40vw] xl:w-[40vw] text-center">Kami menawarkan berbagai layanan
        yang dirancang untuk membantu bisnis dari skala
        mikro hingga menengah berkembang dengan cara yang efektif.</p>
    </div>
    <!-- Content-->
    <!--  DESKTOP  -->
    <div class="hidden sm:hidden md:flex lg:flex xl:flex w-[88vw] flex-row justify-evenly">
      <div class="w-[30vw] flex flex-col mr-4">
        <button class="selected-button">Marketing & Digitalization plan</button>
        <button class="button">Financial Planning & Analysis Plan</button>
        <button class="button"> Planning & OPeration Plan</button>
      </div>
      <div class="w-[50vw] h-[55vh] relative bg-white rounded-2xl border border-gray-200">
        <div class="px-4 py-4">
          <NuxtImg src="/images/services/bg-service.png"/>
        </div>
        <div class="w-full px-10 py-4">
          <h1 class="text-2xl mb-2">Marketing & Digitalization plan</h1>
          <p>Rancang strategi pemasaran yang efektif dan manfaatkan digitalisasi untuk menjangkau lebih banyak
            pelanggan.</p>
          <div class="w-full mt-4">
            <div v-for="i in 3" class="w-full flex flex-row justify-start items-center">
              <span><IconCheck class="bg-green-600 text-lg rounded-full mr-2"/></span>
              <span>Marketing & Strategiry Research</span>
            </div>
          </div>
          <div class="w-full flex flex-row justify-start items-end mb-4 mt-4">
            <span class="text-4xl">Rp199.000</span><span>(sekali bayar)</span></div>

          <button class="w-full bg-blue-800 rounded-lg py-2 text-white">Mulai Sekarang</button>

        </div>
      </div>
    </div>
    <!--  MOBILE  -->
    <div class="block sm:block md:hidden lg:hidden xl:hidden">
      <div class="w-full px-8 flex flex-col items-center">
        <button @click="onSelectedTab(0)" :class="selected == 0 ? 'btn-active':'btn-inactive'">Business Development
          Services
        </button>
        <button @click="onSelectedTab(1)" :class="selected == 1 ? 'btn-active':'btn-inactive'">Operation Services
        </button>
        <button @click="onSelectedTab(2)" :class="selected == 2 ? 'btn-active':'btn-inactive'">Financial Services
        </button>
      </div>
      <div class="px-[4vw]">
        <div class="relative px-4 py-4 bg-white rounded-2xl border border-gray-200">
          <div class="px-4 py-4">
            <NuxtImg src="/images/services/bg-service.png"/>
          </div>
          <div class="w-[92vw] flex flex-col justify-between items-center">
            <h1 class="text-2xl mb-2 w-full text-start">Marketing & Digitalization plan</h1>
            <p class="w-full text-start">Rancang strategi pemasaran yang efektif dan manfaatkan digitalisasi untuk
              menjangkau lebih banyak
              pelanggan.</p>
            <div class="w-full mt-4">
              <div v-for="i in 3" class="w-full flex flex-row my-2">
                <span class="mr-2"><IconCheck class="bg-green-600 rounded-full"/></span>
                <span class="text-sm">Marketing & Strategiry Research</span>
              </div>
            </div>
            <div class="w-full flex flex-row justify-start items-end mb-4">
              <span class="text-4xl">Rp199.000</span><span>(sekali bayar)</span>
            </div>
            <div class="w-full">
              <button @click="$emit('create-reservation')" class="w-[85vw] bg-blue-800 rounded-lg py-2 text-white">Mulai Sekarang</button>
            </div>
          </div>
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

.btn-active {
  @apply bg-blue-800 text-white w-full border border-blue-800 rounded-lg my-2 py-3;
}

.btn-inactive {
  @apply bg-transparent text-blue-800 border border-blue-800 rounded-lg w-full my-2 py-3;
}

</style>