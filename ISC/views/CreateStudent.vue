<template>
  <div class="student">
    <h1>Create Student </h1>
    <form @submit.prevent="inputStudents">
        <label>Nama</label><br>
        <input type="text" v-model="name" placeholder="Input nama..." /><br>
        <label>Umur</label><br>
        <input type="number" v-model="age" placeholder="Input umur..." /><br>
        <label>Alamat</label><br>
        <input type="text" v-model="address" placeholder="Input alamat..." /><br>
        <button type="submit">Simpan</button>
    </form>
    <hr>
    Nama : {{name}} / Umur : {{age}} / Address : {{address}}
    <hr>
    <CthTable/>
  </div>
</template>
<script>
  import CthTable from '../components/Table.vue';
  import axios from 'axios'
  export default {
    name: 'CreateStudent',
    components : {
      CthTable
    },
    data: ()=>({
      name : '',
      age : '',
      address : ''
    }),
    methods:{
      inputStudents(){
          var student = {
              'name' : this.name,
              'age' : this.age,
              'address' : this.address,
          };
          axios
          .post(
            "https://62e0c2d598dd9c9df6168603.mockapi.io/helloworld/students",student
          )
          .then((response) => {
            console.log(response);
            this.$router.push('/mainstudent');
          });
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
