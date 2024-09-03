<script setup lang="ts">
import type {InputState} from "~/common/InputState";

const model = defineModel()
// defineProps<{state:InputState}>()
</script>

<template>
  <div class="input-group">
    <label for="full-name" class="input-label">Nama Anda</label>
    <input id="full-name" v-model="model" placeholder="Rimuru tempest" class="input">
    <span  class="w-full flex flex-row justify-start items-center"><IconWarning class="mr-2"/>Nama tidak sesuai</span>
  </div>
</template>

<style scoped>

</style>