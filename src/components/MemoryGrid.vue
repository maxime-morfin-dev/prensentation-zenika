<template>
   <div class="grid grid-cols-2 gap-8">
      <MemoryCard  v-for="(card) in cards" :key="card.id" :value="card.value" @card-choose="cardCheck(card.value)"/>
   </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import MemoryCard from './MemoryCard.vue';

const cards:Ref<Array<any>> = ref([
   {id: 1, value: "🚀", show: false},
   {id: 2, value: "🚀", show: false},
   {id: 3, value: "🚤", show: false},
   {id: 4, value: "🚤", show: false},
   {id: 5, value: "🚁", show: false},
   {id: 6, value: "🚁", show: false},
])

const playerChoice: Ref<Array<any>> = ref([])

const cardCheck:(value: String) => any = (value: String) => {
   
   if (playerChoice.value.length == 0){
      console.log('playerChoice length is 0');
      playerChoice.value.push(value)
   }else{
      if(playerChoice.value[0] !== value){
         playerChoice.value = []
      }
   }
}

</script>