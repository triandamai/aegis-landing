<script setup lang="ts">
defineProps<{
  services: Array<DataDetailService>
}>()
defineEmits(['create-reservation'])

const selected = ref(0)

function onSelectedTab(pos: number) {
  selected.value = pos;
}
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
    <div class="hidden sm:hidden md:flex lg:flex xl:flex w-[88vw] h-max flex-row justify-evenly">
      <div class="w-[30vw] flex flex-col mr-4">
        <button v-for="(item,idx) in services" @click="onSelectedTab(idx)"
                :class="selected == idx ? 'selected-button':'button' ">{{ item?.name ?? '' }}
        </button>
      </div>
      <div class="w-[50vw] h-max relative bg-white rounded-2xl border border-gray-200">
        <div class="px-4 py-4 w-full">
          <NuxtImg src="/images/services/bg-service.png" class="w-full"/>
        </div>
        <div class="w-full px-10 py-4">
          <h1 class="text-2xl mb-2">{{ services[selected]?.name ?? '' }}</h1>
          <p>{{ services[selected]?.description ?? '' }}.</p>
          <div class="w-full mt-4">
            <div v-for="(item,idx) in services[selected]?.features ?? []"
                 class="w-full flex flex-row justify-start items-center my-4">
              <span><IconCheck class="text-green-600 text-lg rounded-full mr-2"/></span>
              <span>{{ item.name }}</span>
            </div>
          </div>
          <div class="w-full flex flex-row justify-start items-end mb-4 mt-4">
            <span class="text-4xl">Rp{{ services[selected]?.price ?? '' }}</span><span>(sekali bayar)</span>
          </div>
          <button @click="$emit('create-reservation')" class="w-full bg-blue-800 rounded-lg py-2 text-white">Mulai Sekarang</button>
        </div>
      </div>
    </div>
    <!--  MOBILE  -->
    <div class="block sm:block md:hidden lg:hidden xl:hidden">
      <div class="w-full px-8 flex flex-col items-center">
        <button v-for="(item,idx) in services" @click="onSelectedTab(idx)"
                :class="selected == idx ? 'btn-active':'btn-inactive'">{{ item.name }}
        </button>
      </div>
      <div class="px-[4vw]">
        <div class="relative px-4 py-4 bg-white rounded-2xl border border-gray-200">
          <div class="px-4 py-4 w-full h-1/2">
            <NuxtImg src="/images/services/bg-service.png" width="100%" height="100%" class="w-full"/>
          </div>
          <div class="w-[92vw] flex flex-col justify-between items-center">
            <h1 class="text-2xl mb-2 w-full text-start">{{ services[selected]?.name ?? '' }}</h1>
            <p class="w-full text-start">{{ services[selected]?.description ?? '' }}</p>
            <div class="w-full mt-4">
              <div v-for="(item,idx) in services[selected]?.features ?? []" class="w-full flex flex-row my-2">
                <span class="mr-2"><IconCheck class="text-green-600 rounded-full"/></span>
                <span class="text-sm">{{ item.name }}</span>
              </div>
            </div>
            <div class="w-full flex flex-row justify-start items-end mb-4">
              <span class="text-4xl">Rp{{ services[selected]?.price ?? '' }}</span><span>(sekali bayar)</span>
            </div>
            <div class="w-full">
              <button @click="$emit('create-reservation')" class="w-[85vw] bg-blue-800 rounded-lg py-2 text-white">Mulai
                Sekarang
              </button>
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