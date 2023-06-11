<template>
  <div id="app">
    <router-link to="/">Home</router-link> | <router-link to="/mainstudent">Student</router-link> 
    <router-view/>
    <CreateStudent/>
  </div>
</template>

<script>
import CreateStudent from './views/CreateStudent.vue'

export default {
  name: 'App',
  components: {
    CreateStudent
  }

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
