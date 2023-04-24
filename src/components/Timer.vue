<template>
  <div class="flex flex-col w-full items-center m-auto">
    <span class="text-3xl"
      >{{ stopwatch.hours }} : {{ stopwatch.minutes }} : {{ stopwatch.seconds }}</span
    >
    <div class="flex gap-2 mt-2">
      <button @click="stopwatch.start()" class="bg-sky-200 bg-opacity-50 px-2 rounded-sm">
        Start
      </button>
      <button @click="stopwatch.pause()" class="bg-red-200 bg-opacity-50 px-2 rounded-sm">
        Pause
      </button>
      <button @click="stopwatch.reset()" class="bg-green-200 bg-opacity-50 px-2 rounded-sm">
        Reset
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStopwatch } from 'vue-timer-hook'
const autoStart = true
const stopwatch = useStopwatch(0, autoStart)
</script>
