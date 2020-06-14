<template lang="pug">
.max-w-sm.rounded.border-solide.shadow-lg.m-auto.flex.relative.items-center
  span.px-4 {{title}}
  span.text-lg.font-bold.px-4.absolute.centerize {{count}}
  .ml-auto
    button.bg-blue-500.rounded.text-white.py-1.px-3.m-1.text-lg(@click="increment") +
    button.bg-red-500.rounded.text-white.py-1.px-3.m-1.text-lg(@click="decrement") -
    span.text-gray-500.cursor-pointer.px-4 x
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

    return { count, increment, decrement }
  }
})
</script>

<style scoped>
.centerize {
  left: 50%;
  transform: translateX(-50%);
}
</style>
