<script setup lang="ts">
   import ArrowDown from './icons/ArrowDown.vue';
   import ArrowUp from './icons/ArrowUp.vue';
   import { ref, type Ref } from 'vue';

   const isRulesOpen:Ref<boolean> = ref(false)
   const toggleRulesOpen:() => boolean = () => isRulesOpen.value = !isRulesOpen.value
</script>
<template>
   <div @click="toggleRulesOpen" class="my-8 p-4 bg-zinc-700 bg-opacity-50 rounded-md cursor-pointer">
      <h2 class="font-semibold flex gap-1 items-center justify-start">Règles du jeu <span v-if="!isRulesOpen"><ArrowDown/></span><span v-else><ArrowUp/></span></h2>
      <div v-show="isRulesOpen" class="mt-4">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque exercitationem eius doloribus quis perspiciatis reprehenderit enim quos magni incidunt porro minus pariatur odit mollitia, et accusamus, sapiente in tenetur eaque.
   </div>
   </div>
</template>
