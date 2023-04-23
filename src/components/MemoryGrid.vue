<template>
   <div class="grid grid-cols-2 gap-8">
      <MemoryCard  v-for="(card) in cards" :key="card.id" :value="card.value"/>
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

</script>