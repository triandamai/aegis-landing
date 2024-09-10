<script setup lang="ts">
defineProps<{
  name: string,
  price: number,
  description: string,
  primary: boolean,
  items: Array<string>,
}>()

defineEmits(['select'])

</script>

<template>
  <div class="w-full h-[75vh] sm:w-[50vw] sm:h-[72vh] md:w-[40vw] md:h-[72vh] lg:w-[30vw] lg:h-[72vh] xl:w-[20vw] xl:h-[72vh] mx-4 my-4 flex flex-row justify-center">
    <div class="relative w-full">
      <div class="absolute bottom-0 flex flex-row justify-center  w-full h-[74vh] sm:w-[50vw] sm:h-[70vh] md:w-[40vw] md:h-[70vh] lg:w-[30vw] lg:h-[70vh] xl:w-[20vw] xl:h-[70vh] px-2">
        <div :class="{'primary':primary, 'normal':!primary}" class=" w-full h-[75vh] sm:w-full sm:h-[70vh]  md:w-full md:h-[70vh]  lg:w-full lg:h-[70vh]  xl:w-full xl:h-[75vh] flex flex-row justify-center rounded-2xl border border-gray-300">
          <div class="w-full h-full px-12 py-6 flex flex-col justify-between">
            <div class="w-full h-full">
              <div class="h-1/2 flex flex-col justify-between">
                <div>
                  <h1 class="text-2xl mt-4 mb-4" :class="{'text-white':primary}">{{ name }}</h1>
                  <h1 class="text-3xl mb-2 font-semibold" :class="{'text-white':primary}">Rp{{ price }}</h1>
                  <p class="font-normal text-lg sm:text-sm md:text-sm lg:text-lg" :class="{'text-white':primary}">{{ description }}</p>
                </div>
                <div class="w-full h-[1px] bg-gray-200"></div>
              </div>

              <div class="h-1/2">
                <div class="w-full">
                  <div v-for="(item,idx) in items" class="my-4 w-full flex flex-row justify-start items-start">
                    <span class="rounded-full w-[20px] h-[20px] flex flex-row justify-center">
                      <IconCheckRoundedFilled class="w-full h-full text-blue-800"/>
                    </span>
                    <span :class="{'text-white':primary}" class="ml-2 text-sm sm:text-sm md:text-sm lg:text-lg xl:text-lg">{{ item }}</span>
                  </div>
                </div>
              </div>
            </div>
            <button @click="$emit('select')" :class="{'btn-start-primary':primary, 'btn-start':!primary}" class="w-full py-1 my-2">
              Mulai Sekarang
            </button>
          </div>
        </div>
      </div>
      <div v-show="primary" class="absolute w-full sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[20vw] top-0 sm:top-0 md:top-0 lg:top-0 xl:top-0 flex flex-row justify-between">
        <span class="star-left"/>
        <span class="bg-yellow-400 text-gray-600 font-semibold rounded-lg w-[60vw] h-[5vh] sm:w-full md:w-full lg:w-[60vw] xl:w-[60vw] text-center place-content-center">Rekomendasi kami</span>
        <span class="star-right"/>
      </div>
    </div>
  </div>
</template>
<style scoped>
.normal {
  @apply bg-white;
}

.primary {
  @apply bg-gradient-to-b from-blue-800 via-blue-700 to-blue-600;
}

.star-left {
  background-image: url("/images/services/star-left.svg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  @apply w-[20vw] sm:w-[10vw] md:w-[20vw] lg:w-[15vw];
}

.star-right {
  background-image: url("/images/services/star-right.svg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  @apply w-[20vw] sm:w-[10vw] md:w-[20vw] lg:w-[15vw];
}

.btn-start-primary {
  @apply bg-white text-blue-800 border border-blue-800 rounded-lg py-3;
}

.btn-start {
  @apply bg-blue-800 text-white border border-blue-800 rounded-lg py-3;
}

</style>