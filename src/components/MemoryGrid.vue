<template>
   <div class="grid grid-cols-2 gap-8">
      <MemoryCard  v-for="(card) in cards" :key="card.id" :index="card.id"/>
   </div>
   
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import MemoryCard from './MemoryCard.vue';
import { useMemoryStore } from '@/stores/memoryStore';

const store = useMemoryStore()
// const cards:Ref<Array<any>> = ref([
//    {id: 1, value: "🚀", show: false},
//    {id: 2, value: "🚀", show: false},
//    {id: 3, value: "🚤", show: false},
//    {id: 4, value: "🚤", show: false},
//    {id: 5, value: "🚁", show: false},
//    {id: 6, value: "🚁", show: false},
// ])
const cards = store.cards

const playerChoices: Ref<Array<any>> = ref([])
const cardCheck:(value:any) => any = (value) => {
   
   if (playerChoices.value.length == 0){
      playerChoices.value.push({value: value[0], show: value[1]})
   }else{
      if(playerChoices.value[0] !== value){
         console.log('bravo');
         
      }else{
         playerChoices.value = []
      }
   }
}

</script>