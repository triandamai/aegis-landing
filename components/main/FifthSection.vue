<script setup lang="ts">
let data: Array<{ name: string, web: string, avatar: string, message: string, position: 'top' | 'bottom' }> = [
  {
    name: "Michelle 1",
    web: "aegis.com",
    avatar: "/images/main/dummy-avatar.webp",
    message: "AEGIS sangat membantu kami dalam mengelola anggaran dan memprediksi pertumbuhan bisnis. Tim mereka sangat profesional dan responsif.”",
    position: 'top'
  },
  {
    name: "Michelle 2",
    web: "aegis.com",
    avatar: "/images/main/dummy-avatar.webp",
    message: "AEGIS sangat membantu kami dalam mengelola anggaran dan memprediksi pertumbuhan bisnis. Tim mereka sangat profesional dan responsif.”",
    position: 'bottom'
  },
  {
    name: "Michelle 3",
    web: "aegis.com",
    avatar: "/images/main/dummy-avatar.webp",
    message: "AEGIS sangat membantu kami dalam mengelola anggaran dan memprediksi pertumbuhan bisnis. Tim mereka sangat profesional dan responsif.”",
    position: 'top'
  },
  {
    name: "Michelle 4",
    web: "aegis.com",
    avatar: "/images/main/dummy-avatar.webp",
    message: "AEGIS sangat membantu kami dalam mengelola anggaran dan memprediksi pertumbuhan bisnis. Tim mereka sangat profesional dan responsif.”",
    position: 'bottom'
  },
  {
    name: "Michelle 5",
    web: "aegis.com",
    avatar: "/images/main/dummy-avatar.webp",
    message: "AEGIS sangat membantu kami dalam mengelola anggaran dan memprediksi pertumbuhan bisnis. Tim mereka sangat profesional dan responsif.”",
    position: 'top'
  },
  {
    name: "Michelle 6",
    web: "aegis.com",
    avatar: "/images/main/dummy-avatar.webp",
    message: "AEGIS sangat membantu kami dalam mengelola anggaran dan memprediksi pertumbuhan bisnis. Tim mereka sangat profesional dan responsif.”",
    position: 'bottom'
  }
]



function scrollInfinite() {

    const flavoursContainer = document.getElementById('flavoursContainer');
    const flavoursScrollWidth = flavoursContainer?.scrollWidth ?? 0;
    self.setInterval(() => {
      const first = document.querySelector('#flavoursContainer div') as any;


      if (first !== null) {
        if (!isElementInViewport(first)) {
          flavoursContainer?.appendChild(first);
          flavoursContainer?.scrollTo(flavoursContainer.scrollLeft - first.offsetWidth, 0);
        }
        if (flavoursContainer?.scrollLeft !== flavoursScrollWidth) {
          flavoursContainer?.scrollTo(flavoursContainer.scrollLeft + 1, 0);
        }
      }
    }, 15);
}

function isElementInViewport(el: Element) {
  const rect = el.getBoundingClientRect();
  return rect.right > 0;
}

function getCss(idx: number, length: number): string {
  return ''
}
onMounted(()=>{
  if(import.meta.client) {
    scrollInfinite()
  }
})
</script>

<template>
  <section id="fifth" class="w-svw h-max mt-20">
    <div class="w-full flex flex-row justify-center">
      <div class="mb-6">
        <h1 class="text-3xl text-center md:text-5xl font-semibold">Apa kata mereka tentang
          <span class="bg-blue-800 py-1 px-2 text-white rounded-2xl">AEGIS</span>
        </h1>
      </div>
    </div>
    <div id="flavoursContainer" class="w-screen h-full flex flex-row overflow-x-hidden no-scrollbar">
      <MainItemTestimony
          v-for="(item,idx) in data"
          :name="item.name"
          :web="item.web"
          :avatar="item.avatar"
          :message="item.message"
          :avatar-position="item.position"
          :css="getCss(idx,data.length)"
      />
    </div>
  </section>
</template>

<style>

</style>