<script setup lang="ts">
let tabs = [
  "Business Development Services",
  "Operation Services",
  "Financial Services"
]

const selected = ref(0)

function onSelectedTab(pos: number) {
  selected.value = pos;
}

</script>

<template>
  <section id="second" class="w-svw px-[6vw]">
    <div class="w-full flex flex-row items-center justify-start my-4">
      <span class="bg-primary rounded-2xl text-white text-6xl px-2 py-1">Layanan</span>
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
      <div class="w-full bg-gradient-to-br from-blue-800 to-blue-600 rounded-b-2xl rounded-tr-2xl flex flex-row justify-between px-10 py-10"
           :class="{'rounded-tl-2xl':selected > 0}">
        <div class="w-[40vw]">
          <h1 class="text-3xl text-white mb-4">Business Development Services</h1>
          <p class="text-lg text-white">Kami membantu Anda merancang strategi pertumbuhan yang kuat, menciptakan peluang
            baru, dan memperluas
            jangkauan pasar. Dengan pendekatan kami, bisnis Anda siap menghadapi tantangan dan meraih kesuksesan</p>
        </div>
        <div>
          <img src="/images/services/bg-bds.png"/>
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


</style>