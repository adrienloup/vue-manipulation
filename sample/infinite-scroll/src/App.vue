<template>
  <div id="app">
    <Comment
      v-for="item in items"
      v-bind="item"
      v-bind:key="item.id"
    />
    <observer v-on:intersect="intersected"/>
  </div>
</template>

<script>
import Comment from './components/Comment'
import Observer from './components/Observer'

export default {
  name: 'App',
  components: {
    Comment,
    Observer
  },
  data () {
    return {
      items: [],
      page: 1
    }
  },
  methods: {
    async intersected () {
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${this.page++}`)
      const items = await response.json()
      this.items = [...this.items, ...items]
    }
  }
}
</script>

<style>
*, html, body {
  margin: 0;
  padding:  0;
}
body {
  background: hsl(211, 20%, 97%);
  font: 16px/1.6 -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  color: #000;
}
</style>
