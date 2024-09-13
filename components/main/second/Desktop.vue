<script setup lang="ts">
defineProps<{
  services: Array<DataService>
}>()
const head = ref<HTMLDivElement | null>()
const line = ref<HTMLDivElement | null>()

const isDown = ref(false)
const top = ref(0)
const screenY = ref(0)
const scale = computed(() => {
  if (line.value?.clientHeight) {
    if (top.value == 0) return 0.8
    const divide = (top.value / (line.value?.clientHeight))
    if (divide < 0.4) return 0.8
    return divide + 0.8
  } else {
    return 0.8
  }


})

const showDetailServices = computed(() => {
  if (line.value?.clientHeight) {
    let divide = line.value?.clientHeight / 3
    if (top.value < divide) return 0
    if (top.value < (divide * 2)) return 1
    return 2
  }
  return 0
})


function onMove(e: MouseEvent, el: HTMLDivElement) {
  if (isDown.value) {
    if (e.pageY > screenY.value) {
      if (top.value <= el.clientHeight) {
        top.value += e.movementY
      }
    } else if (e.pageY < screenY.value) {

      if (top.value >= 0) {
        top.value += e.movementY
      }
    }
    screenY.value = e.pageY
  }
}

onMounted(() => {
  head.value?.addEventListener("mousedown", () => {
    isDown.value = true
  })
  head.value?.addEventListener('mouseup', () => {
    isDown.value = false
  })

  head.value?.addEventListener('mouseleave', () => {
    isDown.value = false
  })
  head.value?.addEventListener('mousemove', (e) => {
    onMove(e, line.value)
  })
})
</script>

<template>
  <div class="container-second">
    <div class="container-left bg-white">
      <div class="container-left bg-gradient-to-t from-blue-100 pt-[25vh]">
        <div class="w-[10vw] lg:w-[5vw] h-[50vh] flex flex-col justify-center  px-2 ml-[6vw] relative">
          <!--  line  -->
          <div ref="line" class="absolute w-1 h-[40vh] bg-gray-400 opacity-20 rounded-b-2xl mx-2 ">

          </div>
          <div ref="head" :style="{top:`${top}px`}"
               class="absolute w-5 h-[10vh] bg-blue-800 rounded-2xl cursor-pointer">

          </div>

        </div>
        <div class="h-full flex flex-col justify-start pr-30 sm:pr-0 md:pr-0 lg:pr-0 xl:pr-60">
          <div v-for="(service,idx) in services" :key="idx">
            <div class="mt-4" v-show="idx < 3">
              <h1 :class="{'text-3xl text-gray-500': idx != showDetailServices,'text-2xl text-gray-950':idx == showDetailServices}">
                {{ service.name }}</h1>
              <p v-show="idx == showDetailServices">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-right bg-gradient-to-t from-blue-100">
      <div class="map" :style="`background-size: 100% 100%;transform:scale(${scale});transition: 0.5s;`">

      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  z-index: 2;
  @apply hidden md:block lg:block xl:block absolute w-full top-0 text-5xl font-semibold ml-[6vw];
}

.container-second {
  @apply w-screen h-[80vh] hidden md:flex lg:flex xl:flex flex-row justify-evenly;
}

.map {
  background-image: url("/images/map.svg");
  background-repeat: no-repeat;
  @apply w-full h-[60vh];
}

.head-line {
  @apply w-3 md:w-5 lg:w-5 h-[5vh] md:h-[10vh] lg:h-[10vh] bg-blue-800 rounded-2xl;
}

.body-line {
  @apply w-1 h-full bg-gray-400 opacity-20 rounded-b-2xl mx-1 md:mx-2;
}

.container-left {
  z-index: 2;
  @apply w-full md:w-[50vw] lg:w-[50vw] h-[50vh] md:h-full lg:h-full flex flex-row justify-start;
}

.content-left {
  @apply h-full flex flex-col justify-between py-20 md:py-40 lg:py-40 pr-12 md:pr-40 lg:pr-40;
}

.container-right {
  @apply w-full md:w-full lg:w-[50vw] h-[30vh] md:h-full  lg:h-full;
}
</style>