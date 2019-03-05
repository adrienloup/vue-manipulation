<template>
  <div class="lightbox" v-if="image" @click="close">
    <transition :name="transition">
      <lightbox-image :image="image" :key="image"></lightbox-image>
    </transition>
    <div class="lightbox__close">Close</div>
    <div class="lightbox__next" @click.stop.prevent="next">Next</div>
    <div class="lightbox__prev" @click.stop.prevent="prev">Prev</div>
  </div>
</template>

<script>
import './LightboxDirective'
import LightboxImage from './LightboxImage.vue'
import store from './LightboxStore'
export default {
  components: {
    LightboxImage
  },
  data () {
    return {
      state: store.state,
      direction: 'next'
    }
  },
  methods: {
    close () {
      store.close()
    },
    next () {
      this.direction = 'next'
      store.next()
    },
    prev () {
      this.direction = 'prev'
      store.prev()
    }
  },
  computed: {
    image () {
      if (this.state.index !== false) {
        return this.state.images[this.state.index]
      }
    },
    transition () {
      return 'lightbox-' + this.direction
    }
  }
}
</script>

<style src="./lightbox.scss" lang="scss"></style>
