<template>
   <div class="grid grid-cols-2 gap-8">
      <MemoryCard  v-for="(card, index) in cards" key="card.index"/>
   </div>
</template>

<script setup lang="ts">
import { onMounted, ref, type DefineComponent, type Ref } from 'vue';
import MemoryCard from './MemoryCard.vue';

const cards:Ref<Array<any>> = ref([])

onMounted(() => {
   for(let i=0; i<=16; i++){
      cards.value.push(i)
   }
})
</script>