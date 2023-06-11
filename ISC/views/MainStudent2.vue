<template>
  <div>
    <h1>Data Student</h1>
    <cthTable/>
  </div>
</template>
<script>
  import cthTable from '../components/Table.vue';
  export default{
    name : 'MainStudent2',
    components : {
      cthTable
    }
  }
</script>
<style scoped>
  .h1 {
    font-weight: bold;
  }
</style>