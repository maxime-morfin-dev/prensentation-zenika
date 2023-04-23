<template>
  <div class="flex flex-col justify-center items-center gap-2">
    <div
      class="w-full font-medium text-sm"
      v-show="actualInformation"
    >
      <div class="bg-white bg-opacity-90 w-full p-4 rounded-md text-zinc-700">
        <div class="flex flex-col items-start justify-start">
         <span>{{ actualInformation && actualInformation.icone }}</span>
         <span>{{ actualInformation && actualInformation.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useMemoryStore } from '@/stores/memoryStore';
import { storeToRefs } from 'pinia';

const store = useMemoryStore()
const { actualInformation } = storeToRefs(store)
</script>
