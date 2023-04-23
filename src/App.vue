<script setup lang="ts">
import Rules from './components/Rules.vue';
import MemoryGrid from './components/MemoryGrid.vue';
import { ref, type Ref } from 'vue';

const isMemoryGridShow: Ref<boolean> = ref(false)
const toggleIsMemoryGridShow:() =>boolean = () => isMemoryGridShow.value = !isMemoryGridShow.value
</script>

<template>
  <div class="h-screen flex flex-col">
    <header>
      <h1 class="text-2xl font-semibold text-center bg-zinc-700 bg-opacity-50 rounded-md py-4">Bienvenue sur Maximory ! <span>🚀</span></h1>
    </header>
    <Rules/>
    <div v-if="isMemoryGridShow" class="w-full block m-auto text-center">
      <MemoryGrid />
    </div>
    <button @click="toggleIsMemoryGridShow" class="w-52 m-auto block text-center bg-sky-300 bg-opacity-50 p-4 rounded-md" v-else>Jouer !</button>
  </div>
</template>

