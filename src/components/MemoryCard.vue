<template>
   <div @click="toggleIsChoose">
      <div v-if="!show" class="bg-sky-300 bg-opacity-50 p-4 h-48 rounded-xl">
         Hello memory card
      </div>
      <div v-else class="bg-emerald-300 bg-opacity-50 p-4 h-48 rounded-xl">
         {{ value }}
      </div>
   </div>
</template>

<script setup lang="ts">
   import { ref, type Ref } from 'vue'
   const props = defineProps({
      value: String,
      show: Boolean
   })
   const emit = defineEmits(["cardChoose"])
   const show:Ref<boolean> = ref(props.show)
   
   const toggleIsChoose:() => void = () => {
      show.value = !show.value
      emit("cardChoose")
   }
</script>