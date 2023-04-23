<template>
   <div @click="toggleIsChoose">
      <div v-if="!isChoose" class="bg-sky-300 bg-opacity-50 p-4 h-48 rounded-xl">
         Hello memory card
      </div>
      <div v-else class="bg-emerald-300 bg-opacity-50 p-4 h-48 rounded-xl">
         {{ value }}
      </div>
   </div>
</template>

<script setup lang="ts">
   import { ref, type Ref,} from 'vue';

   defineProps({
      value: String
   })
   
   const isChoose:Ref<boolean> = ref(false)

   const toggleIsChoose:() => boolean = () => isChoose.value = !isChoose.value
</script>