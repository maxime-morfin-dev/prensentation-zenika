<template>
  <div class="mt-12 flex flex-col justify-center items-center">
    <span id="timer-a" class="text-3xl"
      >{{ stopwatch.hours }} : {{ stopwatch.minutes }} : {{ stopwatch.seconds }}</span
    >
    <div class="flex gap-2 mt-2">
      <button
        @click="start"
        class="bg-sky-200 bg-opacity-50 px-2 rounded-sm"
        v-show="isStartEnable"
      >
        Start
      </button>
      <button @click="pause" class="bg-red-200 bg-opacity-50 px-2 rounded-sm">Pause</button>
      <button @click="reset" class="bg-green-200 bg-opacity-50 px-2 rounded-sm">Reset</button>
    </div>
  </div>
  <div
    class="flex items-center justify-center mt-8 text-3xl bg-opacity-30 rounded-sm w-12 h-12 mx-auto"
    :class="wrongPairs < 5 ? `bg-transparent` : wrongPairs < 10 ? `bg-orange-300` : `bg-red-300`"
  >
    {{ wrongPairs }}
  </div>
</template>
<script setup lang="ts">
import { useStopwatch } from 'vue-timer-hook'
import { useMemoryStore } from '@/stores/memoryStore'
import { storeToRefs } from 'pinia'
import { watch, ref, onBeforeUnmount } from 'vue'

const autoStart = true
const isStartEnable = ref(false)
const stopwatch = useStopwatch(0, autoStart)

const memoryStore = useMemoryStore()
const { isTimerRunning, wrongPairs, isWinner } = storeToRefs(memoryStore)

onBeforeUnmount(() => {
  if (isWinner.value) {
    console.log('condition gagnante', stopwatch)
    memoryStore.setTotalTimer(stopwatch)
  }
})

watch(isTimerRunning, (newTimer) => {
  newTimer && stopwatch.start()
  !newTimer && stopwatch.pause()
})
const start = () => {
  stopwatch.start()
  isStartEnable.value = false
}
const pause = () => {
  stopwatch.pause()
  memoryStore.toggleTimerRunning()
  isStartEnable.value = true
}
const reset = () => {
  stopwatch.reset()
  memoryStore.resetWinArray()
  isStartEnable.value = false
}
</script>
