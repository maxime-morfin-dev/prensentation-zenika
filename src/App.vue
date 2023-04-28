<script setup lang="ts">
import { ref, type Ref } from 'vue'
import Rules from './components/Rules.vue'
import MemoryGrid from './components/MemoryGrid.vue'
import InformationList from './components/InformationList.vue'
import { useMemoryStore } from './stores/memoryStore'
import { storeToRefs } from 'pinia'
import Github from './components/icons/Github.vue'
import Timer from './components/Timer.vue'

const store = useMemoryStore()
const isMemoryGridShow: Ref<boolean> = ref(false)
const toggleIsMemoryGridShow: () => boolean = () =>
  (isMemoryGridShow.value = !isMemoryGridShow.value)
const { isWinner } = storeToRefs(store)
const resetAll = () => {
  location.reload()
}
</script>

<template>
  <!-- Desktop -->
  <header class="flex items-center">
    <h1 class="text-2xl font-semibold text-start p-8 pl-0 w-full relative">
      Bienvenue sur Maximory ! <span>🚀</span>
    </h1>
    <div class="relative">
      <div class="absolute -top-1 -left-1 z-10">
        <span class="relative flex h-2 w-2">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-700 opacity-75"
          ></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
      </div>
      <a href="https://github.com/maxime-morfin-dev/prensentation-zenika" class=""><Github /></a>
    </div>
  </header>
  <div class="hidden lg:flex gap-8 justify-around items-start">
    <div class="w-1/3">
      <Rules />
      <button
        @click="toggleIsMemoryGridShow"
        class="m-auto block text-center bg-emerald-300 bg-opacity-50 p-4 rounded-sm w-full animate-pulse"
        v-show="!isMemoryGridShow"
      >
        Jouer !
      </button>
      <div v-if="!isWinner">
        <!-- <div v-if="isMemoryGridShow" class="text-center mb-8 bg-white bg-opacity-50 px-4 py-1 rounded-sm">Progress bar here</div> -->
        <InformationList />
        <Timer v-if="isMemoryGridShow" />
      </div>
      <div v-else>
        <button
          @click="resetAll"
          class="m-auto block text-center bg-emerald-300 bg-opacity-50 p-4 rounded-sm w-full"
        >
          Reset !
        </button>
        <div class="mt-8">
          <InformationList />
        </div>
      </div>
    </div>
    <div v-show="isMemoryGridShow" class="w-full">
      <MemoryGrid />
    </div>
  </div>

  <!-- Mobile -->
  <div class="h-screen flex flex-col lg:hidden">
    <div
      class="text-center bg-zinc-700 bg-opacity-50 p-4 rounded-sm flex flex-col justify-center items-center my-8"
    >
      <span>😅</span>
      Pour une meilleure experience utilisateur
      <span class="line-through italic bg-white bg-opacity-50 rounded-sm p-1"
        >(et pas du tout par flemme)</span
      >
      le jeux n'est disponible qu'en format desktop !
    </div>
    <p class="my-8 text-sm text-center text-opacity-50 italic">Promis c'est mieux vraiment ...</p>
  </div>
</template>
