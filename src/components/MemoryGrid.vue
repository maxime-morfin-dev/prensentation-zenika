<template>
   <div v-if="!store.isWinner" class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-2 my-8 mx-auto">
      <div  v-for="(card) in cards.sort(() => 0.5 - Math.random())" :key="card.id">
         <MemoryCard :id="card.id"/>
      </div>
   </div>
   <div v-else>
      <div class="uppercase font-semibold my-auto">
         <ConfettiExplosion :particleCount="200" :force="0.3" :="" />
         <h2 class="flex flex-col gap-4 m-auto text-xl text-center mt-24">Bravo vous savez tout  sur moi 🎉<span class="lowercase block italic">ou presque...</span> </h2>
      </div>
   </div>
   
</template>

<script setup lang="ts">
import MemoryCard from './MemoryCard.vue';
import { useMemoryStore } from '@/stores/memoryStore';
import { storeToRefs } from 'pinia';
import ConfettiExplosion from "vue-confetti-explosion";

const store = useMemoryStore()
const {cards} = storeToRefs(store)


</script>