<template>
  <div @click.stop class="lightbox__inside">
    <div v-if="loading" class="lightbox__loading">Loading...</div>
    <transition name="lightbox-fade">
      <img :src="src" :key="src" class="lightbox__image">
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    image: String
  },
  data () {
    return {
      loading: true,
      src: false
    }
  },
  mounted () {
    let image = new window.Image()
    image.onload = _ => {
      this.loading = false
      this.src = this.image
    }
    image.src = this.image
  }
}
</script>
