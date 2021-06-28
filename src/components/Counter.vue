<template lang="pug">
.max-w-sm.rounded.border-solide.bg-gray-100.shadow-lg.m-auto.flex.relative.items-center
  input.text-gray-600.mx-4.px-1.w-32(v-model="counterState.title")
  span.text-lg.font-bold.px-4.absolute.centerize {{counterState.count}}
  .ml-auto
    button.btn.bg-red-500.rounded-l(tabindex="-1" @click="increment") +
    button.btn.bg-blue-500(tabindex="-1" @click="decrement") -
    button.btn.bg-yellow-500.rounded-r(tabindex="-1" @click="reset") 0
    span.text-gray-500.cursor-pointer.px-4(@click="$emit('close')") x
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'Counter',
  props: {
    counterState: {
      type: Object as PropType<{ title: string; count: number }>,
      required: true
    },
    increment: {
      type: Function,
      required: true
    },
    decrement: {
      type: Function,
      required: true
    },
    reset: {
      type: Function,
      required: true
    }
  }
})
</script>

<style scoped>
.centerize {
  left: 50%;
  transform: translateX(-50%);
}
.btn {
  @apply text-white py-1 px-3 my-1 text-lg;
}
</style>
