import { ref, reactive, computed, toRefs } from 'vue'

const useCounter = () => {
  const counterState = reactive({
    title: 'new',
    count: 0
  })
  const increment = () => {
    counterState.count++
  }
  const decrement = () => {
    if (counterState.count > 0) counterState.count--
  }
  const reset = () => {
    counterState.count = 0
  }
  return { counterState, increment, decrement, reset }
}

export const useCounters = () => {
  const counters = reactive([useCounter()])
  const addCounter = () => {
    counters.push(useCounter())
  }
  const close = (index: number) => {
    counters.splice(index, 1)
  }
  const sumOfCount = computed<number>(() =>
    counters.length === 0
      ? 0
      : counters.reduce((prev, { counterState: { count } }) => prev + count, 0)
  )

  return { counters, addCounter, close, sumOfCount }
}
