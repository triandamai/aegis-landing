<script setup lang="ts">

</script>

<template>
  <section id="third" class="w-svw px-[6vw] mt-10 relative">
    <div class="w-full">
      <div class="w-[84vw] flex justify-evenly">
        <div class="w-full">
          <p class="text-5xl font-semibold text-center">Kontribusi Besar UMKM Terhadap</p>
          <p class="text-5xl font-semibold text-center mt-4">
            <span class="text-white bg-primary px-2 rounded-2xl">Ekonomi Indonesia</span> dan
            ASEAN
          </p>
        </div>
      </div>
      <!--   jokowi / sri mulyani   -->
      <div class="flex flex-row justify-evenly relative mt-[5vh]">
        <div class="w-[7vw] h-[3vh] bg-blue-200 rounded-2xl absolute top-0 mt-[5vh]"></div>
        <div class="image-left">
          <p class="w-[15vw] text-2xl text-start ml-4">UMKM bertumbuh secara konsisten sebesar 2,5% dari 2015-2019</p>
        </div>
        <div class="image-right">
          <p class="w-[15vw] text-2xl text-start mr-4">UMKM menyerap 97% lapangan kerja dan menyumbang 60% PDB kita.</p>
        </div>
      </div>
    </div>
    <!--  2nd  -->
    <div class="w-full mt-[4vh] flex flex-row justify-between">
      <div class="first-box">
        <h1 class="text-4xl mb-8 ">UMKM adalah Tulang Punggung Ekonomi</h1>
        <p>
          Kekuatan utama di perekonomian Indonesia dan ASEAN, menyerap hampir 97% tenaga kerja dan berkontribusi 60%
          dari PDB. Peran mereka sangat penting dalam pertumbuhan ekonomi dan penciptaan lapangan kerja
        </p>
      </div>
      <div class="second-box">
        <div class="img-second-box"></div>
      </div>
    </div>
    <div class="divider">
      <div class="divider-left"></div>
      <div class="divider-middle">
        <div class="divider-box-left">

        </div>
        <div class="absolute left-0 bottom-0 w-[10vw] h-full bg-white rounded-bl-2xl">

        </div>
        <div class="divider-box-right">

        </div>
        <div class="absolute right-0 top-0 w-[10vw] h-full bg-white rounded-tr-2xl">

        </div>
      </div>
      <div class="divider-right"></div>
    </div>
    <div class="w-full flex flex-row justify-between">
      <div class="third-box">
        <div class="img-third-box"></div>
      </div>
      <div class="forth-box">
        <h1 class="text-4xl mb-8">64 Juta UMKM di Indonesia: 99% dari Total Kegiatan Bisnis</h1>
        <p>
          Indonesia memiliki 64 juta UMKM, yang mencakup 99% dari total kegiatan bisnis di negara ini. UMKM merupakan
          bagian integral dari ekonomi nasional dan sumber utama kegiatan usaha. </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.image-left {
  background-image: url("/images/main/jokowi.png");
  background-repeat: no-repeat;
  background-size: cover;
  @apply w-[44vw] h-[30vh] rounded-b-2xl flex flex-row justify-start items-center mr-[2vw] pt-8;
}

.image-right {
  background-image: url("/images/main/sri-mulyani.png");
  background-repeat: no-repeat;
  background-size: cover;
  @apply w-[44vw] h-[30vh] rounded-b-2xl flex flex-row justify-end items-center ml-[2vw] pt-8;
}

.first-box {
  background-color: #FFF8E0;
  @apply w-[30vw] h-[20vw] p-8 rounded-t-2xl;
}

.second-box {
  background-color: #F4E8FF;
  @apply w-[56vw] h-[20vw] p-8 rounded-t-2xl rounded-bl-2xl;
}

.divider {
  @apply w-[88vw] h-[4vh] flex flex-row justify-between;
}

.divider-left {
  background-color: #FFF8E0;
  @apply w-[30vw] h-full ;
}

.divider-box-left {
  background-color: #FFF8E0;
  @apply absolute left-0 bottom-0 w-[10vw] h-full;
}

.divider-middle {
  @apply w-[28vw] h-full flex flex-row justify-between relative;
}

.divider-right {
  background-color: #F4E8FF;
  @apply w-[30vw] h-[4vh];
}


.divider-box-right {
  background-color: #F4E8FF;
  @apply absolute right-0 top-0 w-[10vw] h-full;
}

.third-box {
  background-color: #FFF8E0;
  @apply w-[56vw] h-[20vw] p-8 rounded-b-2xl;

}

.forth-box {
  background-color: #F4E8FF;
  @apply w-[30vw] h-[20vw] p-8 rounded-b-2xl;
}

.img-second-box {
  background-image: url("/images/second-box.png");
  background-repeat: no-repeat;
  background-size: cover;
  @apply w-[52vw] h-[16vw] rounded-2xl;
}

.img-third-box {
  background-image: url("/images/third-box.png");
  background-repeat: no-repeat;
  background-size: cover;
  @apply w-[52vw] h-[16vw] rounded-2xl;
}
</style>