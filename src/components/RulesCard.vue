<template>
  <div
    @click="toggleRulesOpen"
    class="mb-8 p-4 bg-zinc-700 bg-opacity-50 rounded-sm cursor-pointer overflow-hidden flex flex-col justify-center items-start"
  >
    <h2 class="font-semibold flex gap-1 items-center justify-start text-lg">
      Règles du jeu
      <Transition mode="out-in">
        <span v-if="!isRulesOpen"><ArrowDown /></span><span v-else><ArrowUp /></span>
      </Transition>
    </h2>
    <Transition>
      <div v-show="isRulesOpen" class="h-full">
        <p>Les règles sont <span class="font-bold">simples </span> 🎯:</p>
        <p>
          Parmis toutes ces cartes retournées se trouvent des
          <span class="font-bold">paires identiques 👯‍♀️</span>
        </p>
        <p>
          L'idée est de trouver chaque paire qui vous donnera une
          <span class="font-bold">information sur moi 🙋‍♂️</span>
        </p>
        <p>
          Une fois toutes <span class="font-bold">les paires trouvées</span> vous saurez tout ou
          presque sur moi 🍾!
        </p>
        <p><span class="font-bold">⚠️ Attention</span> Le chrono démarre au clic du bouton ⏱️</p>
        <p>
          Lorsque vous trouverez un paire, il se mettra sur
          <span class="font-bold">⏸️ pause automatiquement </span> pour vous laisser le
          <span class="font-bold">temps de lire 📚</span>
        </p>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import ArrowDown from './icons/ArrowDown.vue'
import ArrowUp from './icons/ArrowUp.vue'
import { ref, watch } from 'vue'
import { useMemoryStore } from '@/stores/memoryStore'
import { storeToRefs } from 'pinia'

const store = useMemoryStore()
const { isTimerRunning } = storeToRefs(store)

watch(isTimerRunning, () => {
  isRulesOpen.value = false
})

const isRulesOpen = ref(false)
const toggleRulesOpen = () => (isRulesOpen.value = !isRulesOpen.value)
</script>
<style>
.v-enter-active,
.v-leave-active {
  transition: all 1s ease-in-out;
  max-height: 300px;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  max-height: 0px;
}
</style>
