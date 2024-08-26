<script setup lang="ts">
import ItemCategory from "~/components/service/ItemCategory.vue";

let data = [
  {
    title:"Mikro",
    price:"Rp199.000",
    description:"Dirancang khusus untuk bisnis kecil atau pemula, paket ini mencakup:",
    primary:false,
    items:[
        "E-Learning",
        "Financial Resporting",
        "Budgeting",
        "Financial Training and Assistance"
    ]
  },
  {
    title:"Kecil",
    price:"Rp199.000",
    description:"Untuk bisnis yang sedang berkembang, paket ini menawarkan",
    primary:true,
    items:[
      "E-Learning",
      "Marketing Plan & Strategy",
      "Market Research",
      "Digital Marketing"
    ]
  },
  {
    title:"Menengah",
    price:"Rp199.000",
    description:"Untuk bisnis yang siap tumbuh lebih jauh, paket ini mencakup",
    primary:false,
    items:[
      "Semua benefit paket Mikro & Kecil",
      "Marketing Plan & Strategy",
      "Financial Modelling",
      "BUssiness Process Analysis"
    ]
  }
]

</script>

<template>
  <section id="third" class="w-svw h-full bg-gradient-to-t from-blue-300">
    <!-- Head-->
    <div class="w-full flex flex-row justify-evenly my-10">
      <div class="text-5xl">
        <span class="bg-primary text-white rounded-2xl">
          Harga Terjangkau
        </span>
        <span>Untuk</span>
        <div class="w-full flex flex-row justify-evenly">
          <span class="text-center">Semua Ukuran Bisnis</span>
        </div>
      </div>
    </div>
    <!--    Subtitle  -->
    <div class="w-full flex flex-row justify-center my-10">
      <p class="w-[40vw] text-center">Kami menawarkan berbagai layanan yang dirancang untuk membantu bisnis dari skala
        mikro hingga menengah
        berkembang dengan cara yang efektif.</p>
    </div>
    <!-- Content-->
    <div class="w-full flex flex-row justify-center">
      <ItemCategory v-for="(item,idx) in data" :name="item.title" :price="item.price" :description="item.description" :primary="item.primary" :items="item.items"/>
    </div>
  </section>
</template>

<style scoped>

</style>