<template>
  <div
    @click="toggleRulesOpen"
    class="my-8 p-4 bg-zinc-700 bg-opacity-50 rounded-sm cursor-pointer"
  >
    <h2 class="font-semibold flex gap-1 items-center justify-start text-lg">
      Règles du jeu <span v-if="!isRulesOpen"><ArrowDown /></span><span v-else><ArrowUp /></span>
    </h2>
    <div v-show="isRulesOpen" class="mt-4">
      <p>Les règles sont <span class="font-bold">simples </span> 🎯:</p>
      <p>
        Parmis toutes ces cartes retournées se trouves des
        <span class="font-bold">paires identiques 👯‍♀️</span>
      </p>
      <p>
        L'idée est de trouver chaque paire qui vous donnera une
        <span class="font-bold">information sur moi 🙋‍♂️</span>
      </p>
      <p>
        A une fois toutes <span class="font-bold">les paires trouvées</span> vous saurez tout ou
        presque sur moi 🍾!
      </p>
      <p><span class="font-bold">⚠️ Attention</span> Le chrono démarre au clic du bouton ⏱️</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArrowDown from './icons/ArrowDown.vue'
import ArrowUp from './icons/ArrowUp.vue'
import { ref, type Ref } from 'vue'

const isRulesOpen: Ref<boolean> = ref(false)
const toggleRulesOpen: () => boolean = () => (isRulesOpen.value = !isRulesOpen.value)
</script>
