<template>
   <div v-if="!store.isWinner" class="grid grid-cols-2 gap-8">
      <div  v-for="(card) in cards.sort(() => 0.5 - Math.random())" :key="card.id">
         <MemoryCard :id="card.id"/>
      </div>
   </div>
   <div v-else>
      <div class="uppercase font-semibold">
         <ConfettiExplosion :particleCount="200" :force="0.3" :="" />
         <h2 class="block m-auto">Bravo vous savez tout, <span class="lowercase italic">ou presque</span> 🙄, sur moi</h2>
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