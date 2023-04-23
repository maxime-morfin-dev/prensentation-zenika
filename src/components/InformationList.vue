<template>
  <div class="flex flex-col justify-center items-center gap-2">
    <div
      class="w-full font-medium text-sm"
      v-show="actualInformation"
    >
      <InformationCard />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useMemoryStore } from '@/stores/memoryStore';
import { storeToRefs } from 'pinia';
import InformationCard from './InformationCard.vue';

const store = useMemoryStore()
const { actualInformation } = storeToRefs(store)
</script>
