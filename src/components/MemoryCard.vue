<template>
   <div @click="toggleCardShow(id)" class="cursor-pointer">
      <div v-if="!cards[id!].show" class="bg-sky-300 bg-opacity-50 p-4 h-48 rounded-xl">
         Hello memory card don't show
      </div>
      <div v-else class="bg-emerald-300 bg-opacity-50 p-4 h-48 rounded-xl">
         Hello memory card show
      </div>
   </div>
</template>

<script setup lang="ts">
   import { useMemoryStore } from '@/stores/memoryStore';
import { storeToRefs } from 'pinia';

   const props = defineProps({
      id: Number
   })
   const store = useMemoryStore()
   const {toggleCardShow} = store

   const {cards} = storeToRefs(store)

</script>