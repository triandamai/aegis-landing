<script setup lang="ts">
defineProps<{
  title: string,
  text: string,
  icon:string,
  slug:string
}>()

const router = useRouter()
const {publicServiceUrl} = useFile()
</script>

<template>
  <div class="w-1/3 py-1 pr-1">
    <NuxtLink :to="`/services/${slug}`" class="my-2 flex flex-row justify-start items-start cursor-pointer">
      <div class="w-1/6 mt-1">
        <NuxtImg :src="publicServiceUrl(icon)" class="w-full"/>
      </div>
      <div class="w-[10px]"/>
      <div class="px-2">
        <span class="w-full flex flex-row items-center font-semibold">{{title}}</span>
        <div>
          <p class="text-sm">{{text}}</p>
        </div>
      </div>
      <div class="w-[10px]"/>
      <div class="w-1/6 mt-1">
        <IconArrowRight/>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>