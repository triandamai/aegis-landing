<script setup lang="ts">
let data: Array<{ name: string, web: string, avatar: string, message: string, position: 'top' | 'bottom' }> = [
  {
    name: "Michelle",
    web: "aegis.com",
    avatar: "/images/main/dummy-avatar.webp",
    message: "AEGIS sangat membantu kami dalam mengelola anggaran dan memprediksi pertumbuhan bisnis. Tim mereka sangat profesional dan responsif.”",
    position: 'top'
  },
  {
    name: "Michelle",
    web: "aegis.com",
    avatar: "/images/main/dummy-avatar.webp",
    message: "AEGIS sangat membantu kami dalam mengelola anggaran dan memprediksi pertumbuhan bisnis. Tim mereka sangat profesional dan responsif.”",
    position: 'bottom'
  },
  {
    name: "Michelle",
    web: "aegis.com",
    avatar: "/images/main/dummy-avatar.webp",
    message: "AEGIS sangat membantu kami dalam mengelola anggaran dan memprediksi pertumbuhan bisnis. Tim mereka sangat profesional dan responsif.”",
    position: 'top'
  },
  {
    name: "Michelle",
    web: "aegis.com",
    avatar: "/images/main/dummy-avatar.webp",
    message: "AEGIS sangat membantu kami dalam mengelola anggaran dan memprediksi pertumbuhan bisnis. Tim mereka sangat profesional dan responsif.”",
    position: 'bottom'
  },
  {
    name: "Michelle",
    web: "aegis.com",
    avatar: "/images/main/dummy-avatar.webp",
    message: "AEGIS sangat membantu kami dalam mengelola anggaran dan memprediksi pertumbuhan bisnis. Tim mereka sangat profesional dan responsif.”",
    position: 'top'
  }
]
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
    <div class="w-screen flex flex-row overflow-x-scroll no-scrollbar">
      <div class="min-w-max">
        <div class="w-[4vw] "></div>
      </div>
      <MainItemTestimony
          v-for="item in data"
          :name="item.name"
          :web="item.web"
          :avatar="item.avatar"
          :message="item.message"
          :avatar-position="item.position"
      />
    </div>
  </section>
</template>

<style scoped>

</style>