<script setup lang="ts">

</script>

<template>
  <section id="third" class="w-svw md:px-[6vw] lg:px-[6vw] xl:px-[6vw] mt-10 relative">
    <div class="w-full">
      <div class="w-full md:w-[84vw] flex justify-evenly">
        <div class="w-full text-2xl md:text-5xl lg:text-5xl font-semibold">
          <p class="text-center">Kontribusi Besar UMKM Terhadap</p>
          <p class="text-center mt-4">
            <span class="text-white bg-blue-800 px-2 rounded-lg md:rounded-2xl lg:rounded-2xl">Ekonomi Indonesia</span>
            dan
            ASEAN
          </p>
        </div>
      </div>
      <!--   jokowi / sri mulyani   -->
      <!--      DESKTOP    -->
      <div class="hidden sm:hidden md:flex lg:flex flex-row justify-evenly relative mt-[5vh]">
        <div class=" md:w-[7vw] md:h-[3vh] lg:w-[7vw] lg:h-[3vh] bg-blue-200 rounded-2xl absolute top-0 mt-[5vh]"></div>
        <div class="image-left">
          <p class="w-[15vw] text-2xl sm:text-lg md:text-lg lg:text-lg xl:text-3xl text-start ml-4">UMKM bertumbuh secara konsisten sebesar 2,5% dari 2015-2019</p>
        </div>
        <div class="image-right">
          <p class="w-[15vw] text-2xl sm:text-lg md:text-lg lg:text-lg xl:text-3xl  text-start mr-4">UMKM menyerap 97% lapangan kerja dan menyumbang 60% PDB kita.</p>
        </div>
      </div>
      <!--   MOBILE   -->
      <div class="block  sm:block md:hidden lg:hidden mt-[5vh]">
        <div class="md:w-[7vw] md:h-[3vh] lg:w-[7vw] lg:h-[3vh] bg-blue-200 rounded-2xl absolute top-0 mt-[5vh]"></div>
        <div class="w-full h-[40vh] flex flex-col justify-between">
          <div class="image-left-mobile"></div>
          <p class="text-start bg-blue-100 px-[4vw] py-2">UMKM bertumbuh secara konsisten sebesar 2,5% dari 2015-2019</p>
        </div>
        <div class="w-full h-[40vh] flex flex-col justify-between">
          <div class="image-right-mobile"></div>
          <p class="text-start bg-blue-100 px-[4vw] py-2">UMKM menyerap 97% lapangan kerja dan menyumbang 60% PDB kita.</p>

        </div>
      </div>
    </div>
    <!--  2nd  -->
    <!--    DESKTOP   -->
    <div class="w-full hidden sm:hidden md:block lg:block xl:block">
      <div class="w-full mt-[4vh] flex flex-row justify-between">
        <div class="first-box">
          <h1 class="text-lg sm:text-2xl md:text-lg lg:text-2xl xl:text-4xl mb-1">UMKM adalah Tulang Punggung Ekonomi</h1>
          <p class="text-sm sm:text-sm md:text-sm lg:text-lg xl:text-lg">
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
          <div class="divider-box-right">

          </div>
          <div class="absolute left-0 w-full h-full bg-white rounded-bl-2xl  rounded-tr-2xl">

          </div>
        </div>
        <div class="divider-right"></div>
      </div>
      <div class="w-full flex flex-row justify-between">
        <div class="third-box">
          <div class="img-third-box"></div>
        </div>
        <div class="forth-box">
          <h1 class="text-lg sm:text-2xl md:text-lg lg:text-2xl xl:text-4xl mb-1">64 Juta UMKM di Indonesia: 99% dari Total Kegiatan Bisnis</h1>
          <p class="text-sm sm:text-sm md:text-sm lg:text-lg xl:text-lg">
            Indonesia memiliki 64 juta UMKM, yang mencakup 99% dari total kegiatan bisnis di negara ini. UMKM merupakan
            bagian integral dari ekonomi nasional dan sumber utama kegiatan usaha. </p>
        </div>
      </div>
    </div>
    <!--  MOBILE  -->
    <div class="w-full block sm:block md:hidden lg:hidden xl:hidden mt-4">
      <div class="w-full h-max">
        <div class="w-full h-[45vh] bg-yellow-50 rounded-t-2xl rounded-br-2xl px-4 py-4">
          <h1 class="text-3xl text-gray-600">UMKM adalah Tulang Punggung Ekonomi</h1>
          <p class="my-2 font-normal text-gray-600">Kekuatan utama di perekonomian Indonesia dan ASEAN, menyerap hampir 97% tenaga kerja dan berkontribusi
            60% dari PDB. Peran mereka sangat penting dalam pertumbuhan ekonomi dan penciptaan lapangan kerja</p>
          <NuxtImg src="/images/third-box.png" class="rounded-lg h-[26vh] w-full" width="100%"/>
        </div>
        <div class="w-full h-[2vh] flex flex-row justify-between">
          <div class="w-[48vw]  bg-yellow-50 rounded-b-2xl"></div>
          <div class="w-[52vw]  bg-white relative">
            <div class="absolute top-0 left-0 w-[2vh] h-[2vh] bg-yellow-200 "></div>
            <div class="absolute top-0 left-0 w-[2vh] h-[2vh] bg-white rounded-tl-lg"></div>
          </div>
        </div>
      </div>
      <div class="w-full h-[45vh] ">
        <div class="w-full h-[2vh] flex flex-row justify-between">
          <div class="w-[52vw] bg-white relative">
            <div class="absolute bottom-0 right-0 w-[2vh] h-[2vh] bg-purple-50"></div>
            <div class="absolute bottom-0 right-0 w-[2vh] h-[2vh] bg-white rounded-br-lg"></div>
          </div>
          <div class="w-[48vw] bg-purple-50 rounded-t-2xl"></div>
        </div>
        <div class="w-full h-[45vh] bg-purple-50 rounded-b-2xl rounded-tl-2xl  px-4 py-4">
          <NuxtImg src="/images/second-box.png" class="rounded-lg h-[24vh] w-full mb-2" width="100%"/>
          <h1 class="text-3xl text-gray-600">64 Juta UMKM di Indonesia: 99% dari Total Kegiatan Bisnis</h1>
          <p class="my-2 text-gray-600">Indonesia memiliki 64 juta UMKM, yang mencakup 99% dari total kegiatan bisnis di negara ini. UMKM merupakan bagian integral dari ekonomi nasional dan sumber utama kegiatan usaha.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

.image-left {
  background-image: url("/images/main/jokowi.webp");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @apply w-[44vw] h-[30vh] rounded-b-2xl flex flex-row justify-start items-center mr-[2vw] pt-8;
}

.image-right {
  background-image: url("/images/main/sri-mulyani.webp");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @apply w-[44vw] h-[30vh] rounded-b-2xl flex flex-row justify-end items-center ml-[2vw] pt-8;
}

.image-left-mobile {
  background-image: url("/images/main/jokowi.webp");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @apply w-full h-full flex flex-row justify-start items-center;
}

.image-right-mobile {
  background-image: url("/images/main/sri-mulyani.webp");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @apply w-full h-full flex flex-row justify-end items-center;
}

.first-box {
  background-color: #FFF8E0;
  @apply w-[30vw] h-[20vw] sm:w-[30vw] sm:h-[20vw] md:w-[30vw] md:h-[40vh] lg:w-[30vw] lg:h-[40vh] xl:w-[40vw] xl:h-[40vh] p-8 rounded-t-2xl;
}

.second-box {
  background-color: #F4E8FF;
  @apply w-[56vw] h-[20vw] sm:w-[56vw] sm:h-[20vw] md:w-[56vw] md:h-[40vh] lg:w-[56vw] lg:h-[40vh] xl:w-[46vw] xl:h-[40vh] p-8 rounded-t-2xl rounded-bl-2xl;
}

.divider {
  @apply w-[88vw] h-[4vh] sm:w-[88vw] sm:h-[4vh] md:w-[88vw] md:h-[4vh] lg:w-[88vw] lg:h-[4vh] xl:w-[88vw] xl:h-[4vh] flex flex-row justify-between;
}

.divider-left {
  background-color: #FFF8E0;
  @apply w-[30vw] sm:w-[30vw] md:w-[30vw] lg:w-[30vw] xl:w-[40vw] h-full ;
}

.divider-box-left {
  background-color: #FFF8E0;
  @apply absolute left-0 bottom-0 w-[10vw] sm:w-[10vw] md:w-[10vw] lg:w-[10vw] xl:w-[4vw] h-full;
}

.divider-middle {
  @apply w-[28vw] sm:w-[28vw] md:w-[28vw] lg:w-[28vw] xl:w-[8vw] h-full flex flex-row justify-between relative;
}

.divider-right {
  background-color: #F4E8FF;
  @apply w-[30vw] sm:w-[30vw] md:w-[30vw] lg:w-[30vw] xl:w-[40vw] h-full;
}


.divider-box-right {
  background-color: #F4E8FF;
  @apply absolute right-0 top-0 w-[10vw] sm:w-[10vw] md:w-[10vw] lg:w-[10vw] xl:w-[4vw] h-full;
}

.third-box {
  background-color: #FFF8E0;
  @apply w-[56vw] h-[20vw] sm:w-[56vw] sm:h-[20vw] md:w-[56vw] md:h-[40vh] lg:w-[56vw] lg:h-[40vh] xl:w-[46vw] xl:h-[40vh] p-8 rounded-b-2xl rounded-tr-2xl;

}

.forth-box {
  background-color: #F4E8FF;
  @apply w-[30vw] h-[20vw] sm:w-[30vw] sm:h-[20vw] md:w-[30vw] md:h-[40vh] lg:w-[30vw] lg:h-[40vh] xl:w-[40vw] xl:h-[40vh] p-8 rounded-b-2xl;
}

.img-second-box {
  background-image: url("/images/second-box.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @apply w-[52vw] h-[16vw] sm:w-[52vw] sm:h-[16vw] md:w-[50vw] md:h-[28vh] lg:w-[52vw] lg:h-[30vh] xl:w-[40vw] xl:h-[30vh] rounded-2xl;
}

.img-third-box {
  background-image: url("/images/third-box.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @apply w-[52vw] h-[16vw] sm:w-[52vw] sm:h-[16vw] md:w-[50vw] md:h-[28vh] lg:w-[52vw] lg:h-[30vh] xl:w-[40vw] xl:h-[30vh] rounded-2xl;
}
</style>