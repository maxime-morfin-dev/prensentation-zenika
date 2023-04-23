<template>
  <div class="flex flex-col justify-center items-center gap-2">
    <div
      v-for="(information, index) in informations"
      :key="index"
      class="w-full font-medium text-sm"
    >
      <div v-show="information.show" class="bg-white bg-opacity-90 w-full p-4 rounded-md text-zinc-700">
        <div class="flex flex-col items-start justify-start">
         <span>{{ information.icone }}</span>
         <span>{{ information.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useInformationStore } from '@/stores/informationStore'

const store = useInformationStore()
const { informations } = store
</script>
