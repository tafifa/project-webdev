<template>
  <div class="table">
    <hr>
    <button class="btn mr10" @click="setNewData()">Ganti Data</button>
    <button class="btn mr10" @click="resetStudents()">Reset Data</button>
    <button class="btn mr10" @click="visible = !visible">Show/Hide Table</button>
    <button class="btn" @click="students=[]">Kosongkan Data</button>
    <hr>
    <table v-show="visible" class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Address</th>
        </tr>
      </thead>
      <tbody v-if="onlinestudents.length>0">
        <tr v-for="row in onlinestudents" :key="row.id">
          <td>{{row.id}}</td>
          <td>{{row.name}}</td>
          <td>{{row.age}}</td>
          <td>{{row.address}}</td>
        </tr>
      </tbody>
      <tfoot v-if="onlinestudents.length==0">
        <tr>
          <td colspan="4" align="center">Belum ada data</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
<script>
  import axios from 'axios';
  export default{
    name : 'CthTable',
    components: {
      // skip
    },
    mounted (){
      this.getStudents();
    },
    methods : {
      setNewData() {
        localStorage.setItem('students', JSON.stringify(this.students));
        this.students = this.newstudents;
      },
      resetStudents() {
        console.log(localStorage.getItem('students'));
        this.students = JSON.parse(localStorage.getItem('students'));
      },
      getStudents() {
        axios.get(
          "https://62e0c2d598dd9c9df6168603.mockapi.io/helloworld/students"
        )
        .then((response) => {
          this.onlinestudents=response.data;
          // alert(JSON.stringify(this.onlinestudents));
        });
      }
    },
    data: () => ({
      visible : true,
      onlinestudents : [],
      dosens : [],
      students : [
        {
            'id' : '120001',
            'name' : 'Ajie Masalah',
            'age' : '21',
            'address' : 'Jl Ahmad Yani',
        },
        {
            'id' : '120001',
            'name' : 'Ajie Masalah',
            'age' : '21',
            'address' : 'Jl Ahmad Yani',
        },
        {
            'id' : '120001',
            'name' : 'Ajie Masalah',
            'age' : '21',
            'address' : 'Jl Ahmad Yani',
        },
        {
            'id' : '120001',
            'name' : 'Ajie Masalah',
            'age' : '21',
            'address' : 'Jl Ahmad Yani',
        },
      ],
      newstudents :[
        {
          'id' : '120001',
          'name' : 'Ajie Masalah',
          'age' : '21',
          'address' : 'Jl Ahmad Yani',
        },
        {
          'id' : '120001',
          'name' : 'Ajie Masalah',
          'age' : '21',
          'address' : 'Jl Ahmad Yani',
        },
        {
          'id' : '120001',
          'name' : 'Ajie Masalah',
          'age' : '21',
          'address' : 'Jl Ahmad Yani',
        },
      ],
    })
  }
</script>
<style scoped>
.mr10 {
    margin-right: 10px;
}

table {
    border-collapse: collapse;
}

.table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;
}

.table th,
.table td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
}

.table thead th {
    vertical-align: bottom;
    border-bottom: 2px solid #dee2e6;
}

.table tbody + tbody {
    border-top: 2px solid #dee2e6;
}

.table .table {
    background-color: white;
}

.table-sm th,
.table-sm td {
    padding: 0.3rem;
}

.table-bordered {
    border: 1px solid #dee2e6;
}

.table-bordered th,
.table-bordered td {
    border: 1px solid #dee2e6;
}

.table-borderless th,
.table-borderless td,
.table-borderless thead th,
.table-borderless tbody + tbody {
    border: 0;
}

.table-striped tbody tr:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.05);
}

.table-hover tbody tr:hover {
    background-color: rgba(0, 0, 0, 0.075);
}

.btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}

@media screen and
(prefer-reduce-motion: reduce) {
    .btn {
        transition: none;
    }
}

.btn:hover, .btn.focus {
    text-decoration: none;
}

.btn:focus, .btn:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.btn.disabled, .btn:disabled {
    opacity: 0.65;
}

.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}

.btn:not(:disabled):not(.disabled):active,
.btn:not(:disabled):not(.disabled):active {
    background-image: none;
}

</style>