<template>
  <div id="app">
    <ul>
      <li><router-link :to="{name: 'root'}" exact>Home</router-link></li>
      <li><router-link :to="{name: 'about'}">About</router-link></li>
      <li><router-link :to="{name: 'services'}">services</router-link></li>
      <li><router-link :to="{name: 'contact'}">Contact</router-link></li>
      <li><router-link :to="{name: 'post', params: {id: 1}}">post1</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.router-link-active {
  color: red;
}
</style>
