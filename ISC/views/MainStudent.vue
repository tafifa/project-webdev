<template>
  <div>
    <h1>Data Student</h1>
    <CthTable/>
    
  </div>
</template>
<script>
  import CthTable from '../components/Table.vue';
  export default{
    name : 'MainStudent',
    components : {
      CthTable
    }
  }
</script>
<style scoped>
  .h1 {
    font-weight: bold;
  }
</style>