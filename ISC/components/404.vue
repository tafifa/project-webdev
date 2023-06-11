<template>
  <div class="home">
    <h1>404 </h1>
    <p>Halaman tidak ditemukan Silahkan kembali <router-link to="/">Home</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'PageNotFound',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
    text-align: center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
