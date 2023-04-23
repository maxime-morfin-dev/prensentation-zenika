<template>
   <h2>List des information a mon sujet</h2>
   <div v-for="(information, index) in informations" :key="index">
      <div v-show="information.show">
         {{ information.value }}
      </div>
   </div>
</template>
<script setup lang="ts">
   import { useInformationStore } from '@/stores/informationStore'

   const store = useInformationStore()
   const {informations} = store
</script>