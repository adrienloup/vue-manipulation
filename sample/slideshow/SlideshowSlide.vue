<template>
  <div v-show="visible">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    index: {type: Number, default: 0}
  },
  computed: {
    visible () {
      return this.index === this.$parent.index
    }
  }
}
</script>
