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
    <h1 class="text-2xl font-semibold text-start rounded-md p-8 pl-0 w-full">
      Bienvenue sur Maximory ! <span>🚀</span>
    </h1>
    <div>
      <a href="https://github.com/maxime-morfin-dev/prensentation-zenika"><Github /></a>
    </div>
  </header>
  <div class="hidden lg:flex gap-8 justify-around items-start">
    <div class="w-1/3">
      <Rules />
      <button
        @click="toggleIsMemoryGridShow"
        class="m-auto block text-center bg-sky-300 bg-opacity-50 p-4 rounded-md w-full"
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
          class="m-auto block text-center bg-sky-300 bg-opacity-50 p-4 rounded-md w-full"
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
  <!-- <div class="h-screen flex flex-col lg:hidden">
    <header>
      <h1 class="text-2xl font-semibold text-center bg-zinc-700 bg-opacity-50 rounded-md py-4 mt-8">
        Bienvenue sur Maximory ! <span>🚀</span>
      </h1>
    </header>
    <Rules />
    <InformationList />
   
    <div v-if="isMemoryGridShow">
      <MemoryGrid />
    </div>
    <button
      @click="toggleIsMemoryGridShow"
      class="m-auto block text-center bg-sky-300 bg-opacity-50 p-4 rounded-md"
      v-else
    >
      Jouer !
    </button>
  </div> -->
</template>
