<script setup lang="ts">
const props = defineProps<{
  name: string,
  price: string,
  description: string,
  primary: boolean,
  items: Array<string>,
}>()
</script>

<template>
  <div class="w-[20vw] h-[61vh] mx-4 flex flex-row justify-center">
    <div class="relative w-full">
      <div class="absolute bottom-0 flex flex-row justify-center  w-[20vw] h-[60vh] px-2">
        <div :class="{'primary':primary, 'normal':!primary}"
             class=" w-full h-[60vh] flex flex-row justify-center rounded-2xl border border-gray-300">
          <div class="w-full h-full px-8 py-6 flex flex-col justify-between">
            <div class="w-full h-full">
              <div class="h-[23vh] flex flex-col justify-between">
                <div>
                  <h1 class="text-2xl mb-2 mt-4" :class="{'text-white':primary}">{{ name }}</h1>
                  <h1 class="text-3xl mb-2" :class="{'text-white':primary}">{{ price }}</h1>
                  <p :class="{'text-white':primary}">{{ description }}</p>
                </div>
                <div class="w-full h-[1px] bg-gray-200"></div>
              </div>

              <div class="h-[20vh]">
                <div class="w-full">
                  <div v-for="(item,idx) in items" class="my-2 w-full flex flex-row justify-start items-start">
                    <span class="rounded-full w-[20px] h-[20px] flex flex-row justify-center bg-blue-200">
                      <Icon name="uil:check" class="m-auto"/>
                    </span>
                    <span :class="{'text-white':primary}" class="ml-2">{{ item }}</span>
                  </div>
                </div>
              </div>
            </div>
            <button :class="{'btn-start-primary':primary, 'btn-start':!primary}" class="w-full py-1 my-2">Mulai Sekarang
            </button>
          </div>
        </div>
      </div>
      <div v-show="primary" class="absolute w-[20vw] top-0 flex flex-row justify-between">
        <span class="star-left"/>
        <span class="bg-yellow-400 rounded-lg w-full text-center">Rekomendasi kami</span>
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
  @apply bg-gradient-to-b from-blue-700 via-blue-600 to-blue-600;
}

.star-left {
  background-image: url("/images/services/star-left.svg");
  background-size: contain;
  background-repeat: no-repeat;
  @apply w-1/6;
}

.star-right {
  background-image: url("/images/services/star-right.svg");
  background-size: contain;
  background-repeat: no-repeat;
  @apply w-1/6;
}

.btn-start-primary {
  @apply bg-white text-blue-800 border border-blue-800 rounded-lg;
}

.btn-start {
  @apply bg-blue-800 text-white border border-blue-800 rounded-lg;
}

</style>