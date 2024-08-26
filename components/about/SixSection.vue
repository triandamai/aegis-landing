<script setup lang="ts">

import ItemTeam from "~/components/about/ItemTeam.vue";

let teams = [
  {
    name: "Christian Hosana",
    title: "CEO",
    link: "",
    image: "/images/team/christian-hosana.png"
  },
  {
    name: "Abitama Ramadhan",
    title: "CFO",
    link: "",
    image: "/images/team/abitama-ramadan.png"
  },
  {
    name: "Adeva Bima",
    title: "CMO",
    link: "",
    image: "/images/team/adeva.png"
  },
  {
    name: "Anees Al Kareem",
    title: "CHRO",
    link: "",
    image: "/images/team/anees.png"
  },
  {
    name: "Muhammad Ramaditya",
    title: "Advisor",
    link: "",
    image: "/images/team/ramaditya.png"
  },
  {
    name: "Firly Rizki",
    title: "COO",
    link: "",
    image: "/images/team/firly.png"
  }
]
</script>

<template>
  <section id="third" class="w-svw h-svh relative">
    <!-- Head-->
    <div class="w-full flex flex-row justify-evenly">
      <div class="text-5xl">
        <span class="bg-primary text-white rounded-2xl">
         Tim
        </span>
        <span>Kami</span>
      </div>
    </div>
    <!--    Subtitle  -->
    <div class="w-full flex flex-row justify-center my-2">
      <p class="w-[20vw] text-center">Kenali lebih dekat tim yang bekerja keras untuk mewujudkan visi dan misi kami.</p>
    </div>
    <!-- Content-->
    <div class="w-full h-[60vh] flex flex-row flex-wrap justify-center relative">
      <ItemTeam
          v-for="(team) in teams"
          :title="team.title"
          :image="team.image"
          :name="team.name"
          :social-link="team.link"
      />
    </div>
  </section>
</template>

<style scoped>

</style>