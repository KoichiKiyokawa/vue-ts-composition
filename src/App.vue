<template lang="pug">
#app.text-center
  h1.text-6xl Multiple Counter
  // TODO: .syncで配列変更できない。。。
  Counter.mb-2(v-for="(counter, i) in counters" :key="i" v-bind="counter" @increment="increment(i)" @decrement="decrement(i)" @reset="reset(i)" @close="close(i)")
  .max-w-sm.m-auto.text-center.bg-green-400.rounded.text-white.cursor-pointer(@click="addCounter") new counter
  span sum of count: {{sumOfCount}}
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue'
import Counter from './components/Counter.vue'

type tCounter = {
  title: string
  count: number
}

const getInitialCounter = (): tCounter => ({
  title: 'new',
  count: 0
})

export default defineComponent({
  name: 'App',
  components: {
    Counter
  },
  setup() {
    const counters = reactive<tCounter[]>([getInitialCounter()])
    const addCounter = () => {
      counters.push(getInitialCounter())
    }
    const increment = (index: number) => {
      counters[index].count++
    }
    const decrement = (index: number) => {
      if (counters[index].count >= 0) counters[index].count--
    }
    const reset = (index: number) => {
      counters[index].count = 0
    }
    const close = (index: number) => {
      counters.splice(index, 1)
    }

    const sumOfCount = computed<number>(() =>
      counters.length === 0
        ? 0
        : counters
            .map(({ count }) => count)
            .reduce((prev, current) => prev + current)
    )

    return {
      counters,
      addCounter,
      increment,
      decrement,
      reset,
      close,
      sumOfCount
    }
  }
})
</script>
