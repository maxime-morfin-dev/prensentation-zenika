<template>
  <div class="flex flex-col justify-center items-center gap-2">
    <Transition mode="out-in" :duration="{ enter: 2000, leave: 1000 }">
      <div class="w-full font-medium text-sm" v-show="actualInformation">
        <InformationCard />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useMemoryStore } from '@/stores/memoryStore'
import { storeToRefs } from 'pinia'
import InformationCard from './InformationCard.vue'

const store = useMemoryStore()
const { actualInformation } = storeToRefs(store)
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: all 1s ease;
  max-height: 500px;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  max-height: 0px;
}
</style>
