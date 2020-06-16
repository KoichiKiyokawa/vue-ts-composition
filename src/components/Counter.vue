<template lang="pug">
.max-w-sm.rounded.border-solide.bg-gray-100.shadow-lg.m-auto.flex.relative.items-center
  input.text-gray-600.mx-4.px-1.w-32(:value="title")
  span.text-lg.font-bold.px-4.absolute.centerize {{count}}
  .ml-auto
    button.bg-red-500.rounded-l.text-white.py-1.px-3.my-1.text-lg(@click="increment") +
    button.bg-blue-500.text-white.py-1.px-3.my-1.text-lg(@click="decrement") -
    button.bg-yellow-500.rounded-r.text-white.py-1.px-3.my-1.text-lg(@click="reset") 0
    span.text-gray-500.cursor-pointer.px-4(@click="onClose") x
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

type Props = {
  title: string
}

export default defineComponent({
  props: { title: String },
  setup() {
    const count = ref(0)
    const increment = () => {
      count.value++
    }
    const decrement = () => {
      if (count.value >= 1) count.value--
    }
    const reset = () => {
      count.value = 0
    }

    return { count, increment, decrement, reset }
  }
})
</script>

<style scoped>
.centerize {
  left: 50%;
  transform: translateX(-50%);
}
</style>
