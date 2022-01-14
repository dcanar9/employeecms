<template>
  <div>
    <h1 class="title">Employees</h1>
    <table class="table table-striped">
      <thead class="thead-dark">
        <tr class="tableHeaders">
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Department</th>
          <th scope="col">Salary</th>
          <th scope="col">Location</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(employee, i) in employees" :key="i" @click="viewEmployee(employee)">
          <th  scope="row" class="align-middle"> {{ employee.id }} </th>
          <td class="align-middle"> {{ employee.name }} </td>
          <td class="align-middle"> {{ employee.dept }} </td>
          <td class="align-middle"> $ {{ employee.salary }} </td>
          <td class="align-middle"> {{ employee.location }} </td>
        </tr>
      </tbody>
    </table>
    <div id="empCard">
      <h2 style="text-align:center;text-decoration:underline;">Employee Card</h2>
      <h3 class="cardHeading">ID: </h3><h3> {{ viewEmp.id }}</h3><br>
      <h3 class="cardHeading">Employee: </h3><h3> {{ viewEmp.name }}</h3><br>
      <h3 class="cardHeading">Department: </h3><h3> {{ viewEmp.dept }}</h3><br>
      <h3 class="cardHeading">Salary: </h3><h3> {{ viewEmp.salary }}</h3><br>
      <h3 class="cardHeading">Location: </h3><h3> {{ viewEmp.location }}</h3><br>
      <input style="margin-left:43%;" class="col-md-2 btn btn-dark" value="Close" @click.prevent="toggleEmpView">
    </div>
  </div>
</template>

<script>
  // helper function to get data from store
  import {mapState} from 'vuex'

  export default {
    data(){
      return{
        viewEmp:{
          id: null,
          name: null,
          dept: null,
          salary: null, 
          location: null,
        }
      }
    },
    // pass data from store to component
    computed: {
      ...mapState(["employees"])
    },
    methods:{
      toggleEmpView(){
        // toggle pop up
        if(document.getElementById("empCard").style.display == "none"){
          document.getElementById("empCard").style.display = "block"
        }
        else{document.getElementById("empCard").style.display = "none"}
      },
      viewEmployee(employee){
        this.viewEmp = Object.assign(this.viewEmp, employee) 
        this.toggleEmpView()
        
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  tr:hover:not(.tableHeaders){
    background-color: beige;
  }
  #empCard{
    display: none;
    border: 2px solid gray;
    padding: 50px 60px;
    background-color: white;
    border-radius: 15px;
    position: fixed;
    top: 30%;
    left: 30%;
    height: 40%;
    width: 40%;
    box-shadow: -10px 10px black;
  }

  #empCard h3{
    display: inline-block;
    line-height: 1.2em;
  }

  .cardHeading{
    color:darkolivegreen;
    font-weight: bolder;
    margin-right: 10px
  }
</style>
