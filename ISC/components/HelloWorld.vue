<template>
  <div class="hello">
    <h1>Selamat Datang {{nama}}, Umur saya {{umur}}, tinggi {{tinggi}}, Peserta ISC di Pelatihan PWA dan VueJs</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    nama :'Deni S.',
    umur : '33',
    tinggi : '172',
    url : 'https://img.bit/asa123123/'
  }),
  props: {
    msg: String
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
