<template>
  <div class="bg-zinc-700 bg-opacity-50 text-white w-full p-8 rounded-sm">
    <div class="flex flex-col items-center justify-start">
      <span
        class="flex justify-center items-center text-2xl bg-white bg-opacity-20 p-5 rounded-full w-8 h-8 mb-2"
        >{{ actualInformation && actualInformation.icone }}</span
      >
      <span class="font-semibold text-start">{{
        actualInformation && actualInformation.value
      }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMemoryStore } from '@/stores/memoryStore'

const store = useMemoryStore()
const { actualInformation } = storeToRefs(store)
</script>
