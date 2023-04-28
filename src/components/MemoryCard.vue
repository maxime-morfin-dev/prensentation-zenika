<template>
  <div @click="toggleCardShow(id)" class="cursor-pointer">
    <Transition mode="out-in" :duration="{ enter: 100, leave: 500 }">
      <div
        v-if="!cards.find((card) => card.id == id).show"
        class="bg-zinc-700 bg-opacity-50 p-4 h-32 w-full rounded-sm m-auto"
      />
      <div
        v-else
        class="bg-opacity-50 p-4 h-32 w-full rounded-sm m-auto transition-all ease-linear duration-300"
        :class="
          pairChoice.length == 2 && pairChoice.includes(cards.find((card) => card.id == id))
            ? `bg-red-300`
            : `bg-emerald-300`
        "
      >
        <!-- {{ cards.find((card) => card.id == id).value }} -->
        <img
          :src="cards.find((card) => card.id == id).source"
          :alt="cards.find((card) => card.id == id).alt"
          class="w-full h-28"
        />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useMemoryStore } from '@/stores/memoryStore'
import { storeToRefs } from 'pinia'

defineProps({
  id: Number
})
const store = useMemoryStore()
const { toggleCardShow } = store

const { cards } = storeToRefs(store)
const { pairChoice } = storeToRefs(store)
</script>
