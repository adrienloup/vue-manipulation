<template>
  <div>
    <slot></slot>
    <button @click.prevent="prev">prev</button>
    <button @click.prevent="next">next</button>
    <ul>
      <li v-for="n in slidesCount" :key="n.id" :class="{active: n-1 == index}" @click.prevent="goto(n-1)">{{ n }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      index: 0,
      slides: []
    }
  },
  watch: {
    slides (slides) {
      if (this.index >= this.slidesCount) {
        this.index = this.slidesCount - 1
      }
    }
  },
  computed: {
    slidesCount () {
      return this.slides.length
    }
  },
  methods: {
    next () {
      this.index++
      if (this.index >= this.slidesCount) {
        this.index = 0
      }
    },
    prev () {
      this.index--
      if (this.index < 0) {
        this.index = this.slidesCount - 1
      }
    },
    goto (index) {
      this.index = index
    }
  },
  mounted () {
    this.slides = this.$children
  }
}
</script>

<style scoped>
ul{
  display: flex;
  flex-direction: row;
  margin: 5px 0;
  padding: 0;
  list-style-type: none;
}
li{
  width: 10px;
  height: 10px;
  margin-right: 2px;
  background-color: #2d2d2d;
  border-radius: 50%;
  font-size: 0;
}
li.active{
  background-color: #ddd;
}
</style>
