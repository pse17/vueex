<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="sidebar">
      <ul>
        <li><router-link class="link" to="/report/rep7">Rep co-7</router-link></li>
        <li><router-link class="link" to="/report/rep8">Rep co-8</router-link></li>
      </ul>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.sidebar {
  float: left;
  width: 20%;
  padding-left: 0.1%;
  text-align: left;
}
.content {
  float: left;
  width: 70%;
  padding-left: 0.1%;
  text-align: left;
}
ul {
  list-style: none;
}
</style>
