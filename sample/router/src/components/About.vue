<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>{{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'waiting...'
    }
  },
  beforeRouteEnter (route, redirect, next) {
    console.log('beforeEnter')
    window.setTimeout(_ => {
      next(vm => {
        vm.msg = 'About'
      })
    }, 1000)
  },
  beforeRouteLeave (route, redirect, next) {
    console.log('beforeLeave')
    if (window.confirm('Are you sure about that?')) {
      next()
    }
  }
}
</script>
