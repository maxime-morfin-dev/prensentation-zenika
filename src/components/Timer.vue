<template>
  <div class="mt-12 flex flex-col justify-center items-center">
    <span id="timer" class="text-3xl"
      >{{ stopwatch.hours }} : {{ stopwatch.minutes }} : {{ stopwatch.seconds }}</span
    >
    <div class="flex gap-2 mt-2">
      <button @click="stopwatch.start()" class="bg-sky-200 bg-opacity-50 px-2 rounded-sm">
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
import { watch } from 'vue'

const autoStart = true
const stopwatch = useStopwatch(0, autoStart)

const store = useMemoryStore()
const { isTimerRunning } = storeToRefs(store)
const { wrongPairs } = storeToRefs(store)
watch(isTimerRunning, (newTimer, oldTimer) => {
  console.log('dans le wathcer')
  !oldTimer && stopwatch.start()
  oldTimer && stopwatch.pause()
})
const pause = () => {
  stopwatch.pause()
  store.toggleTimerRunning()
}
const reset = () => {
  stopwatch.reset()
  store.resetWinArray()
}
</script>
