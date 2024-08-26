<script setup lang="ts">
let data:Array<{name:string,web:string,avatar:string,message:string,position:'top'|'bottom'}> = [
  {
    name: "Michelle",
    web: "aegis.com",
    avatar: "/images/main/dummy-avatar.png",
    message: "AEGIS sangat membantu kami dalam mengelola anggaran dan memprediksi pertumbuhan bisnis. Tim mereka sangat profesional dan responsif.”",
    position:'top'
  },
  {
    name: "Michelle",
    web: "aegis.com",
    avatar: "/images/main/dummy-avatar.png",
    message: "AEGIS sangat membantu kami dalam mengelola anggaran dan memprediksi pertumbuhan bisnis. Tim mereka sangat profesional dan responsif.”",
    position:'bottom'
  },
  {
    name: "Michelle",
    web: "aegis.com",
    avatar: "/images/main/dummy-avatar.png",
    message: "AEGIS sangat membantu kami dalam mengelola anggaran dan memprediksi pertumbuhan bisnis. Tim mereka sangat profesional dan responsif.”",
    position:'top'
  },
  {
    name: "Michelle",
    web: "aegis.com",
    avatar: "/images/main/dummy-avatar.png",
    message: "AEGIS sangat membantu kami dalam mengelola anggaran dan memprediksi pertumbuhan bisnis. Tim mereka sangat profesional dan responsif.”",
    position:'bottom'
  },
  {
    name: "Michelle",
    web: "aegis.com",
    avatar: "/images/main/dummy-avatar.png",
    message: "AEGIS sangat membantu kami dalam mengelola anggaran dan memprediksi pertumbuhan bisnis. Tim mereka sangat profesional dan responsif.”",
    position:'top'
  }
]
</script>

<template>
  <section id="fifth" class="w-svw pl-[6vw]">
    <div class="w-full flex flex-row justify-center">
      <div class="mb-6">
        <h1 class="text-5xl font-semibold">Apa kata mereka tentang <span
            class="bg-primary py-1 px-2 text-white rounded-2xl">AEGIS</span>
        </h1>
      </div>
    </div>
    <div class="w-screen flex flex-row overflow-x-clip">
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