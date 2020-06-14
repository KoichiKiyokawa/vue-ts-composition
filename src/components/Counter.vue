<template lang="pug">
span {{title}}
span {{count}}
button(@click="increment") +1
button(@click="decrement") -1
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
