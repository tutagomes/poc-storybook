<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <br><br>
    <div style='width: 100%; text-align: center'>
      <Login style='width: 40%;margin: auto; ' v-model='credentials'/>
    </div>
  </div>
</template>

<script>
import Login from './components/Login.vue'

export default {
  name: 'App',
  components: {
    Login
  },
  data() {
    return {
      credentials: {
        password: '',
        email: ''
      }
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
