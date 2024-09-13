<script setup lang="ts">
defineProps<{
  services: Array<DataService>
}>()

const headMobile = ref<HTMLDivElement | null>()
const lineMobile = ref<HTMLDivElement | null>()

const isDown = ref(false)
const top = ref(0)
const screenY = ref(0)
const scale = computed(() => {
  if (lineMobile.value?.clientHeight) {
    if (top.value == 0) return 0.8
    const divide = (top.value / (lineMobile.value?.clientHeight))
    if (divide < 0.4) return 0.8
    return divide + 0.8
  } else {
    return 0.8
  }
})

const showDetailServicesMobile = computed(() => {
  if (lineMobile.value?.clientHeight) {
    let divide = lineMobile.value?.clientHeight / 3
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
  headMobile.value?.addEventListener("mousedown", () => {
    isDown.value = true
  })
  headMobile.value?.addEventListener('mouseup', () => {
    isDown.value = false
  })

  headMobile.value?.addEventListener('mouseleave', () => {
    isDown.value = false
  })
  headMobile.value?.addEventListener('mousemove', (e) => {
    onMove(e, lineMobile.value)
  })
})
</script>

<template>
  <div class="container-mobile">
    <div class="container-right-mobile bg-gradient-to-t from-blue-100">
      <div class="map" :style="`background-size: 100% 100%;transform:scale(${scale});transition: 0.5s;`">

      </div>
    </div>
    <div class="container-left-mobile bg-white">
      <div class="container-left-mobile bg-gradient-to-b from-blue-100">
        <div class="w-[10vw] h-1/2 flex flex-col justify-start px-2 ml-[6vw] relative">
          <!--  line  -->
          <div id="line" ref="lineMobile" class="body-line absolute">

          </div>
          <div id="head" ref="headMobile" :style="{top:`${top}px`}" class="head-line absolute cursor-pointer">

          </div>

        </div>
        <div class="content-left-mobile">
          <div v-for="(service,idx) in services" :key="idx">
            <div class="mt-0" v-show="idx < 3">
              <h1 :class="{'text-3xl text-gray-500': idx != showDetailServicesMobile,'text-2xl text-gray-950':idx == showDetailServicesMobile}">
                {{ service.name }}</h1>
              <p v-show="idx == showDetailServicesMobile">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-second {
  @apply w-screen h-[80vh] hidden md:flex lg:flex xl:flex flex-row justify-evenly;
}

.container-mobile {
  @apply w-svw h-[80vh] flex flex-row flex-wrap md:hidden lg:hidden xl:hidden;
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

.container-left-mobile {
  z-index: 2;
  @apply w-full md:w-[50vw] lg:w-[50vw] h-[50vh] md:h-full lg:h-full flex flex-row justify-start;
}

.content-left {
  @apply h-full flex flex-col justify-between py-20 md:py-40 lg:py-40 pr-12 md:pr-40 lg:pr-40;
}

.content-left-mobile {
  @apply h-full flex flex-col justify-between py-2 md:py-40 lg:py-40 pr-12 md:pr-40 lg:pr-40;
}

.container-right {
  @apply w-full md:w-full lg:w-[50vw] h-[30vh] md:h-full  lg:h-full;
}

.container-right-mobile {
  @apply w-full md:w-full lg:w-[50vw] h-[50vh] md:h-full  lg:h-full;
}
</style>