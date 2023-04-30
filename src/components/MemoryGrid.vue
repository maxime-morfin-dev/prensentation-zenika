<template>
  <div v-if="!store.isWinner" class="grid grid-cols-4 gap-2 mx-auto bg-transparent">
    <div v-for="card in cards" :key="card.id">
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

    <div class="flex justify-center items-center mt-24 gap-8">
      <div class="flex flex-col items-center justify-center text-center">
        <p class="font-bold text-xl my-4 underline">Temps total :</p>
        <p class="text-3xl font-bold bg-zinc-700 bg-opacity-50 rounded-sm w-full p-8">
          <span class="text-white">{{ totalTimer?.hours }}h</span> :
          <span class="text-sky-200">{{ totalTimer?.minutes }}m</span> :
          <span class="text-green-200">{{ totalTimer?.seconds }}s</span>
        </p>
      </div>
      <div class="flex flex-col items-center justify-center text-center">
        <p class="font-bold text-xl my-4 underline">Nombre d'erreurs :</p>
        <p class="text-red-200 text-3xl font-bold bg-zinc-700 bg-opacity-50 rounded-sm w-full p-8">
          {{ wrongPairs }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MemoryCard from './MemoryCard.vue'
import { useMemoryStore } from '@/stores/memoryStore'
import { storeToRefs } from 'pinia'
import ConfettiExplosion from 'vue-confetti-explosion'

const store = useMemoryStore()
const { cards } = storeToRefs(store)
const { wrongPairs } = storeToRefs(store)
const { totalTimer } = storeToRefs(store)
cards.value = cards.value.sort(() => 0.5 - Math.random())
</script>
