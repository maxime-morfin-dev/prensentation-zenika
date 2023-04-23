<template>
   <h2 v-show="winArray.length > 0">List des information a mon sujet</h2>
   <div v-for="(information, index) in informations" :key="index">
      <div v-show="information.show">
         {{ information.value }}
      </div>
   </div>
</template>
<script setup lang="ts">
   import { useInformationStore } from '@/stores/informationStore'
   import { useMemoryStore } from '@/stores/memoryStore';

   const store = useInformationStore()
   const memoryStore = useMemoryStore()
   const {informations} = store
   const {winArray} = memoryStore
</script>