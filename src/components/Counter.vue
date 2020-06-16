<template lang="pug">
.max-w-sm.rounded.border-solide.bg-gray-100.shadow-lg.m-auto.flex.relative.items-center
  input.text-gray-600.mx-4.px-1.w-32(:value="title")
  span.text-lg.font-bold.px-4.absolute.centerize {{count}}
  .ml-auto
    button.bg-red-500.rounded-l.text-white.py-1.px-3.my-1.text-lg(tabindex="-1" @click="increment") +
    button.bg-blue-500.text-white.py-1.px-3.my-1.text-lg(tabindex="-1" @click="decrement") -
    button.bg-yellow-500.rounded-r.text-white.py-1.px-3.my-1.text-lg(tabindex="-1" @click="reset") 0
    span.text-gray-500.cursor-pointer.px-4(@click="$emit('close')") x
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'Counter',
  props: {
    title: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      required: true
    }
  },
  setup(props, context) {
    const increment = () => {
      context.emit('increment')
    }
    const decrement = () => {
      context.emit('decrement')
    }
    const reset = () => {
      context.emit('reset')
    }

    return { increment, decrement, reset }
  }
})
</script>

<style scoped>
.centerize {
  left: 50%;
  transform: translateX(-50%);
}
</style>
