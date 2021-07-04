<template lang="pug">
#app.text-center
  h1.text-6xl Multiple Counter
  Counter.mb-2(v-for="(counter, i) in counters" :key="i" v-bind="counter" @close="close(i)")
  .max-w-sm.m-auto.text-center.bg-green-400.rounded.text-white.cursor-pointer(@click="addCounter") new counter
  p title list: {{titleListString}}
  p sum of count: {{sumOfCount}}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Counter from './components/Counter.vue'
import { useCounters } from './compositions/counter'

export default defineComponent({
  name: 'App',
  components: {
    Counter
  },
  setup() {
    return {
      ...useCounters()
    }
  }
})
</script>
