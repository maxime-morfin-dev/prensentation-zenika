<template>
  <div class="bg-white bg-opacity-20 text-white w-full p-8 rounded-3xl rounded-tl-none">
    <div class="flex flex-col items-start justify-start">
      <span>{{ actualInformation && actualInformation.icone }}</span>
      <span>{{ actualInformation && actualInformation.value }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMemoryStore } from '@/stores/memoryStore'

const store = useMemoryStore()
const { actualInformation } = storeToRefs(store)
</script>
