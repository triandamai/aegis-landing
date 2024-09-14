<script setup lang="ts">
defineProps<{
  services:Array<DataDetailService>
}>()
const {publicServiceUrl} = useFile()
const selected = ref(0)

function onSelectedTab(pos: number) {
  selected.value = pos;
}

</script>

<template>
  <!--  DESKTOP  -->
  <section id="second" class="hidden sm:block md:block lg:block w-svw h-svh px-[6vw]">
    <div class="w-full flex flex-row items-center justify-start">
      <span class="bg-blue-800 rounded-2xl text-white text-6xl px-2 py-1">Layanan</span>
      <span class="text-6xl ml-2">Kami</span>
    </div>
    <div class="w-[40vw] my-6">
      <p class="text-lg">AEGIS menawarkan berbagai layanan yang dirancang untuk membantu bisnis Anda berkembang dan mencapai tujuan
        jangka panjang</p>
    </div>
    <div class="w-full rounded-b-2xl relative">
      <div class="w-full flex flex-row justify-start">
        <template v-for="(tab,idx) in services">
<!--      first    -->
          <div v-if="idx == 0"  class="tab" @click="onSelectedTab(idx)" :class="{'tab-active':selected == idx, 'tab-inactive':selected != idx}">
            <p class="mx-4 my-4">{{tab.name ?? ''}}</p>
            <div v-show="selected == (idx+1)" class="h-full w-[15px] bg-blue-800 absolute right-0"></div>
            <div v-show="selected == (idx+1)" class="h-full w-[15px] bg-white absolute right-0 rounded-br-2xl"></div>
          </div>
<!--     second to end     -->
          <div v-else-if="(idx <= services.length - 1) && (idx > 0) " class="tab" @click="onSelectedTab(idx)"  :class="{'tab-active':selected == idx, 'tab-inactive':selected != idx}">
            <p class="mx-4 my-4 cursor-pointer">{{tab.name}}</p>
            <div v-show="selected == (idx-1)" class="h-full w-[15px] bg-blue-800 absolute left-0"></div>
            <div v-show="selected == (idx-1)" class="h-full w-[15px] bg-white absolute left-0 rounded-bl-2xl"></div>
            <div v-show="selected == (idx+1)" class="h-full w-[15px] bg-blue-800 absolute right-0"></div>
            <div v-show="selected == (idx+1)" class="h-full w-[15px] bg-white absolute right-0 rounded-br-2xl"></div>
          </div>
        </template>

        <div v-if="selected == services.length -1" class="relative flex flex-row justify-start">
          <div class="h-full w-[15px] bg-blue-800 absolute left-0"></div>
          <div  class="h-full w-[15px] bg-white absolute left-0 rounded-bl-2xl"></div>
        </div>
      </div>
      <div
          class="w-full h-[50vh] bg-gradient-to-br from-blue-800 to-blue-600 rounded-b-2xl rounded-tr-2xl flex flex-row justify-between px-10 py-10"
          :class="{'rounded-tl-2xl':selected > 0}">
        <div class="w-[40vw] sm:w-[40vw] md:w-[40vw] lg:w-[60vw] xl:w-[60vw]">
          <h1 class="text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-semibold text-white mb-4">{{services[selected]?.name ?? ''}}</h1>
          <p class="text-lg md:text-lg lg:text-2xl xl:text-2xl text-white">{{services[selected]?.description ?? ''}}</p>
        </div>
        <div class="w-[40vw] sm:w-[40vw] md:w-[40vw] lg:w-[30vw] xl:w-[40vw]">
          <NuxtImg :src="publicServiceUrl(services[selected]?.image ?? '')" width="100%" height="100%" class="w-[40vw] h-full sm:w-[40vw] md:w-[40vw] lg:w-[30vw] xl:w-[30vw]"/>
        </div>
      </div>
    </div>
  </section>
  <!-- MOBILE -->
  <section id="second-mobile" class="block sm:hidden md:hidden lg:hidden w-svw h-max">
    <div class="w-full">
      <div class="mt-8 mb-8">
        <h1 class="w-full text-3xl font-semibold text-center"><span
            class="bg-blue-800 rounded-lg text-white">Layanan</span> Kami</h1>
        <p class="px-2 text-center my-2">AEGIS menawarkan berbagai layanan yang dirancang untuk membantu bisnis Anda
          berkembang dan mencapai tujuan jangka panjang</p>
      </div>
      <div class="w-full px-8 flex flex-col items-center">
        <button v-for="(item,idx) in services" @click="onSelectedTab(idx)" :class="selected == idx ? 'btn-active':'btn-inactive'">
          {{item.name ?? ''}}
        </button>
      </div>
      <div class="mt-2 w-full h-max bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 px-8 py-4">
        <NuxtImg :src="publicServiceUrl(services[selected]?.image ?? '')" width="100%" height="100%" class="w-full h-max sm:h-2/3"/>
        <div class="w-full">
          <h1 class="text-white text-3xl my-2 text-center">{{services[selected]?.name ?? ''}}</h1>
          <p class="text-white text-center">{{services[selected]?.description}}</p>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tab {
  @apply relative flex flex-row justify-start cursor-pointer;
}

.tab-active {
  @apply bg-blue-800 rounded-t-2xl text-white;
}

.tab-inactive {
  @apply bg-white rounded-t-2xl text-gray-950;
}

.btn-active {
  @apply bg-blue-800 text-white w-full border border-blue-800 rounded-lg my-2 py-3;
}

.btn-inactive {
  @apply bg-white text-blue-800 border border-blue-800 rounded-lg w-full my-2 py-3;
}
</style>