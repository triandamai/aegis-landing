<script setup lang="ts">
import ItemCategory from "~/components/service/ItemCategory.vue";
defineEmits(['book-services'])

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
  <section id="third" class="w-svw h-max bg-gradient-to-t from-blue-300">
    <!-- Head-->
    <div class="w-full flex flex-row justify-evenly my-10">
      <div class="text-3xl sm:text-4xl md:text-5xl lg:text-5xl">
        <span class="bg-blue-800 text-white rounded-lg">Harga Terjangkau</span><span> Untuk</span>
        <div class="w-full flex flex-row justify-evenly">
          <span class="text-center">Semua Ukuran Bisnis</span>
        </div>
      </div>
    </div>
    <!--    Subtitle  -->
    <div class="w-full flex flex-row justify-center my-10">
      <p class="w-[92vw] sm:w-[40vw] md:w-[40vw] lg:w-[40vw] xl:w-[40vw] text-center">Kami menawarkan berbagai layanan yang dirancang untuk membantu bisnis dari skala
        mikro hingga menengah
        berkembang dengan cara yang efektif.</p>
    </div>
    <!-- Content-->
    <div class="w-full h-max flex flex-row flex-wrap justify-center">
      <ItemCategory
          v-for="(item,idx) in data"
          :name="item.title"
          :price="item.price"
          :description="item.description"
          :primary="item.primary"
          :items="item.items"
          @select="()=>{$emit('book-services',item)}"
      />
    </div>
  </section>
</template>

<style scoped>

</style>