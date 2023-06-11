<template>
  <div class="student">
    <h1>Login User</h1>
    <form @submit.prevent="loginNow">
        <label>Nama</label><br>
        <input type="text" v-model="name" placeholder="Input nama..." /><br>
        <label>Password</label><br>
        <input type="password" v-model="age" placeholder="Input password..." /><br>
        <button type="submit">Login</button>
    </form>
  </div>
</template>
<script>
  import axios from 'axios'
  // import { threadId } from 'worker_threads'
  export default {
    username: 'Login',
    data: ()=>({
      username : '',
      password : '',
    }),
    mounted() {
      this.$store.commit('setLogin', true);
    },
    methods:{
      loginNow(){
          var user = {
              username : this.username,
              password : this.password,
          };
          axios
          .post(
            "https://62e0c2d598dd9c9df6168603.mockapi.io/helloworld/users",user
          )
          .then((response) => {
            console.log(response);
            this.users = JSON.stringify('response.data.user');
            this.$store.commit('setUsers', this.users);
            this.$store.commit('setLogin', true);
            this.$router.push('/;')
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
