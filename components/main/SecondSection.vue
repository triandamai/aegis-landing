<script setup lang="ts">
import Desktop from "~/components/main/second/Desktop.vue";
import Mobile from "~/components/main/second/Mobile.vue";

defineProps<{
  services:Array<DataService>
}>()
const head = ref<HTMLDivElement | null>()
const line = ref<HTMLDivElement | null>()

const headMobile = ref<HTMLDivElement | null>()
const lineMobile = ref<HTMLDivElement | null>()

const isDown = ref(false)
const top = ref(0)
const screenY = ref(0)
const scale = computed(()=>{
  if(line.value?.clientHeight){
    if(top.value == 0) return 0.8
    const divide = (top.value / (line.value?.clientHeight))
    if(divide < 0.4) return 0.8
    return divide + 0.8
  }else{
    return 0.8
  }
})

const scaleMobile = computed(()=>{
  if(lineMobile.value?.clientHeight){
    if(top.value == 0) return 0.8
    const divide = (top.value / (lineMobile.value?.clientHeight))
    if(divide < 0.4) return 0.8
    return divide + 0.8
  }else{
    return 0.8
  }
})

const showDetailServices = computed(()=>{
  if(line.value?.clientHeight){
    let divide = line.value?.clientHeight/3
    if(top.value < divide) return 0
    if(top.value < (divide*2)) return 1
    return 2
  }
  return 0
})

const showDetailServicesMobile = computed(()=>{
  if(lineMobile.value?.clientHeight){
    let divide = lineMobile.value?.clientHeight/3
    if(top.value < divide) return 0
    if(top.value < (divide*2)) return 1
    return 2
  }
  return 0
})

function onMove(e:MouseEvent,el:HTMLDivElement){
  if (isDown.value) {
    if (e.pageY > screenY.value) {
      if (top.value <= el.clientHeight) {
        top.value += e.movementY
      }
    } else if(e.pageY < screenY.value) {

      if(top.value >= 0) {
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
    onMove(e,line.value)
  })

  //mobile
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
    console.log(e)
    onMove(e,lineMobile.value)
  })
})
</script>

<template>
  <section id="second" class="w-screen min-h-screen relative bg-white">
    <Desktop :services="services"/>
    <Mobile :services="services"/>
    <div class="title">
      <p class="my-2">Platform All-in-One&nbsp;<span class="rounded-2xl bg-blue-800 px-1 text-white">Terintegrasi</span>
      </p>
      <p class="my-2">Untuk UMKN seluruh Indonesia</p>
    </div>
  </section>
</template>

<style scoped>
.title {
  z-index: 2;
  @apply hidden md:block lg:block xl:block absolute w-full top-0 text-5xl font-semibold ml-[6vw];
}

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