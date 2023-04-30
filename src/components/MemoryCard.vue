<template>
  <div @click="toggleCardShow(id)" class="cursor-pointer">
    <Transition name="flip" mode="out-in">
      <div
        v-if="!cardToFind.show"
        class="bg-zinc-700 bg-opacity-50 p-4 h-32 w-full rounded-sm m-auto"
      />
      <div
        v-else
        class="flex justify-center items-center bg-opacity-50 p-4 h-32 w-full rounded-sm m-auto transition-all ease-linear duration-300"
        :class="
          pairChoice.length == 2 && pairChoice.includes(cardToFind)
            ? `bg-red-300`
            : `bg-emerald-300`
        "
      >
        <!-- {{ cardToFind.value }} -->
        <img :src="cardToFind.source" :alt="cardToFind.alt" class="w-full h-28" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useMemoryStore } from '@/stores/memoryStore'
import { storeToRefs } from 'pinia'

const props = defineProps({
  id: Number
})
const store = useMemoryStore()
const { toggleCardShow } = store
const { cards, pairChoice } = storeToRefs(store)
const cardToFind = cards.value.find((card) => card.id == props.id)
</script>

<style>
.flip-enter-active,
.flip-leave-active {
  transition: all 0.1s ease-in-out;
}

.flip-enter-from,
.flip-leave-to {
  transform: rotateY(90deg);
}
</style>
