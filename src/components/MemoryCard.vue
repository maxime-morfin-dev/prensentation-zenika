<template>
   <div @click="toggleIsChoose">
      <div v-if="!store.cards[index!].show" class="bg-sky-300 bg-opacity-50 p-4 h-48 rounded-xl">
         Hello memory card
      </div>
      <div v-else class="bg-emerald-300 bg-opacity-50 p-4 h-48 rounded-xl">
         {{ store.cards[index!].value }}
      </div>
   </div>
</template>

<script setup lang="ts">
   import { useMemoryStore } from '@/stores/memoryStore'

   const store = useMemoryStore()
   const props = defineProps({
      index: Number,
   })

   const toggleIsChoose:() => void = () => {
      store.toggleCard(props.index)
   }
</script>