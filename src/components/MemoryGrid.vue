<template>
   <div class="grid grid-cols-2 gap-8">
      <div  v-for="(card) in cards" :key="card.id">
         <MemoryCard :id="card.id"/>
      </div>
   </div>
   
</template>

<script setup lang="ts">
import MemoryCard from './MemoryCard.vue';
import { useMemoryStore } from '@/stores/memoryStore';
import { storeToRefs } from 'pinia';

const store = useMemoryStore()
const {cards} = storeToRefs(store)


</script>