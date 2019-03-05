<template>
  <div>
    <h1>{{ msg }}</h1>
    <ul>
      <li><router-link :to="{name: 'pagea'}">PageA</router-link></li>
      <li><router-link :to="{name: 'pageb'}">PageB</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      msg: 'Contact'
    }
  }
}
</script>
