<script setup lang="ts">
import { ref, type Ref } from 'vue'
import Rules from './components/Rules.vue'
import MemoryGrid from './components/MemoryGrid.vue'
import InformationList from './components/InformationList.vue'
import { useMemoryStore } from './stores/memoryStore'
import { storeToRefs } from 'pinia'

const store = useMemoryStore()
const isMemoryGridShow: Ref<boolean> = ref(false)
const toggleIsMemoryGridShow: () => boolean = () =>
  (isMemoryGridShow.value = !isMemoryGridShow.value)
const {isWinner} = storeToRefs(store)
const {actualInformation} = storeToRefs(store)
</script>

<template>
  <!-- Desktop -->
  <div class="hidden lg:flex gap-8 justify-around items-start h-screen">
    <div class="w-1/3">
      <header>
        <h1
          class="text-2xl font-semibold text-center bg-zinc-700 bg-opacity-50 rounded-md p-4 mt-8"
        >
          Bienvenue sur Maximory ! <span>🚀</span>
        </h1>
      </header>
      <Rules />
      <button
        @click="toggleIsMemoryGridShow"
        class="w-52 m-auto block text-center bg-sky-300 bg-opacity-50 p-4 rounded-md"
        v-show="!isMemoryGridShow"
      >
        Jouer !
      </button>
      <div v-if="!isWinner">
        <div v-if="isMemoryGridShow" class="text-center mb-8">Progress bar here</div>
        <InformationList />
      </div>
      <div v-else>
        <button
        @click="toggleIsMemoryGridShow"
        class="w-52 m-auto block text-center bg-sky-300 bg-opacity-50 p-4 rounded-md"
      >
        Reset !
      </button>
        <div>
          {{ actualInformation && actualInformation.value }}
        </div>
      </div>
    </div>
    <div v-show="isMemoryGridShow" class="w-full">
      <MemoryGrid />
    </div>
  </div>

  <!-- Mobile -->
  <div class="h-screen flex flex-col lg:hidden">
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
      class="w-52 m-auto block text-center bg-sky-300 bg-opacity-50 p-4 rounded-md"
      v-else
    >
      Jouer !
    </button>
  </div>
</template>
