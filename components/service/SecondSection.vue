<script setup lang="ts">
let tabs = [
  {
    title: "Business Development Services",
    content: "Kami membantu Anda merancang strategi pertumbuhan yang kuat, menciptakan peluang baru, dan memperluas jangkauan pasar. Dengan pendekatan kami, bisnis Anda siap menghadapi tantangan dan meraih kesuksesan"
  },
  {
    title: "Operation Services",
    content: "Kami membantu Anda merancang strategi pertumbuhan yang kuat, menciptakan peluang baru, dan memperluas jangkauan pasar. Dengan pendekatan kami, bisnis Anda siap menghadapi tantangan dan meraih kesuksesan"

  },
  {
    title: "Financial Services",
    content: "Kami membantu Anda merancang strategi pertumbuhan yang kuat, menciptakan peluang baru, dan memperluas jangkauan pasar. Dengan pendekatan kami, bisnis Anda siap menghadapi tantangan dan meraih kesuksesan"
  }
]

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
      <p>AEGIS menawarkan berbagai layanan yang dirancang untuk membantu bisnis Anda berkembang dan mencapai tujuan
        jangka panjang</p>
    </div>
    <div class="w-full rounded-b-2xl relative">
      <div class="w-full flex flex-row justify-start">
        <div class="tab" @click="onSelectedTab(0)" :class="{'tab-active':selected == 0, 'tab-inactive':selected != 0}">
          <p class="mx-4 my-4">Business Development Services</p>
          <div v-show="selected == 1" class="h-full w-[15px] bg-blue-800 absolute right-0"></div>
          <div v-show="selected == 1" class="h-full w-[15px] bg-white absolute right-0 rounded-br-2xl"></div>
        </div>
        <div class="tab" @click="onSelectedTab(1)" :class="{'tab-active':selected == 1,'tab-inactive':selected != 1}">
          <p class="mx-4 my-4 cursor-pointer">Operation Services</p>
          <div v-show="selected == 0" class="h-full w-[15px] bg-blue-800 absolute left-0"></div>
          <div v-show="selected == 0" class="h-full w-[15px] bg-white absolute left-0 rounded-bl-2xl"></div>
          <div v-show="selected == 2" class="h-full w-[15px] bg-blue-800 absolute right-0"></div>
          <div v-show="selected == 2" class="h-full w-[15px] bg-white absolute right-0 rounded-br-2xl"></div>
        </div>
        <div class="tab" @click="onSelectedTab(2)" :class="{'tab-active':selected == 2,'tab-inactive':selected!=2}">
          <p class="mx-4 my-4 cursor-pointer"> Financial Services</p>
          <div v-show="selected == 1" class="h-full w-[15px] bg-blue-800 absolute left-0"></div>
          <div v-show="selected == 1" class="h-full w-[15px] bg-white absolute left-0 rounded-bl-2xl"></div>
        </div>
        <div class="relative flex flex-row justify-start">
          <div v-show="selected == 2" class="h-full w-[15px] bg-blue-800 absolute left-0"></div>
          <div v-show="selected == 2" class="h-full w-[15px] bg-white absolute left-0 rounded-bl-2xl"></div>
        </div>
      </div>
      <div
          class="w-full h-[50vh] bg-gradient-to-br from-blue-800 to-blue-600 rounded-b-2xl rounded-tr-2xl flex flex-row justify-between px-10 py-10"
          :class="{'rounded-tl-2xl':selected > 0}">
        <div class="w-[40vw]">
          <h1 class="text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-semibold text-white mb-4">{{tabs[selected].title}}</h1>
          <p class="text-lg md:text-lglg:text-2xl xl:text-2xl text-white">{{tabs[selected].content}}</p>
        </div>
        <div class="w-[40vw]">
          <NuxtImg src="/images/services/bg-bds.png" class="w-[40vw] h-[40vh]"/>
        </div>
      </div>
    </div>
  </section>
  <!-- MOBILE -->
  <section id="second-mobile" class="block sm:hidden md:hidden lg:hidden w-svw">
    <div class="w-full">
      <div class="mt-8 mb-8">
        <h1 class="w-full text-3xl font-semibold text-center"><span
            class="bg-blue-800 rounded-lg text-white">Layanan</span> Kami</h1>
        <p class="px-2 text-center my-2">AEGIS menawarkan berbagai layanan yang dirancang untuk membantu bisnis Anda
          berkembang dan mencapai tujuan jangka panjang</p>
      </div>
      <div class="w-full px-8 flex flex-col items-center">
        <button @click="onSelectedTab(0)" :class="selected == 0 ? 'btn-active':'btn-inactive'">Business Development
          Services
        </button>
        <button @click="onSelectedTab(1)" :class="selected == 1 ? 'btn-active':'btn-inactive'">Operation Services
        </button>
        <button @click="onSelectedTab(2)" :class="selected == 2 ? 'btn-active':'btn-inactive'">Financial Services
        </button>
      </div>
      <div class="mt-2 w-full h-[55vh] bg-gradient-to-br from-blue-700 via-blue-400 to-blue-400 px-8 py-4">
        <NuxtImg src="/images/services/bg-bds.png" class="w-full h-[30vh]"/>
        <div class="w-full">
          <h1 class="text-white text-3xl my-2 text-center">{{tabs[selected].title}}</h1>
          <p class="text-white text-center">{{tabs[selected].content}}</p>

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