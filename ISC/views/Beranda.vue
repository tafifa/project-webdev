<template>
  <div>
    <h1>Selamat Datang di Halaman Home Vue-Js Latihan </h1>
  </div>
</template>
<script>
export default {
  data : ()=>({
    test : ''
  }),
  mounted() {
    if(this.$store.state.isLogin==false){
      this.$router.push('./login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
