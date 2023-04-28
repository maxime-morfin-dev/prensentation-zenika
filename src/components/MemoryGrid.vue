<template>
  <div v-if="!store.isWinner" class="grid grid-cols-4 gap-2 mx-auto">
    <div v-for="card in cards.sort(() => 0.5 - Math.random())" :key="card.id">
      <MemoryCard :id="card.id" />
    </div>
  </div>
  <div v-else>
    <div class="absolute top-1/2 left-1/2">
      <ConfettiExplosion :particleCount="50" :="" />
    </div>
    <h2
      class="flex flex-col gap-4 m-auto text-xl text-center mt-24 uppercase font-semibold my-auto"
    >
      Bravo vous savez tout sur moi 🎉<span class="lowercase block italic">ou presque...</span>
    </h2>
  </div>
</template>

<script setup lang="ts">
import MemoryCard from './MemoryCard.vue'
import { useMemoryStore } from '@/stores/memoryStore'
import { storeToRefs } from 'pinia'
import ConfettiExplosion from 'vue-confetti-explosion'

const store = useMemoryStore()
const { cards } = storeToRefs(store)
</script>
