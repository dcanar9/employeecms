<template>
  <div>
    <h1 class="title">Edit Employees</h1>
    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Department</th>
          <th scope="col">Salary</th>
          <th scope="col">Location</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(employee, i) in employees" :key="i">
          <th  scope="row" class="align-middle"> {{ employee.id }} </th>
          <td class="align-middle"> {{ employee.name }} </td>
          <td class="align-middle"> {{ employee.dept }} </td>
          <td class="align-middle"> $ {{ employee.salary }} </td>
          <td class="align-middle"> {{ employee.location }} </td>
          <td>
            <button class="btn btn-success" @click="beginEdit(employee)">Edit</button>
            <button style="margin-left: 10px" class="btn btn-danger" @click="deleteEmpAction(employee)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Pop up for when user would like to edit the employee -->
    <div id="editEmpPopUp" style="display:none;">
      <form>
        <div class="row">
          <div class="form-group col-md-3">
            <label>ID:</label>
            <input class="form-control" type="number" v-model="formEmp.id" required>
          </div>
          <div class="form-group col-md-5">
            <label>Name:</label>
            <input class="form-control" type="text" v-model="formEmp.name" required>
          </div>
        </div>
        <div class="row">
          <div class="form-group col-md-4">
            <label>Department:</label>
            <input class="form-control" type="text" v-model="formEmp.dept" required>
          </div>
          <div class="from-group col-md-4">
            <label>Salary:</label>
            <input class="form-control" type="Number" v-model="formEmp.salary" required>
          </div>
        </div>
        <div class="row">
          <div class="from-group col-md-8">
            <label>Location:</label>
            <input class="form-control" type="text" v-model="formEmp.location" required>
          </div>
        </div>
        <br>
        <div class="row">
          <input class="col-md-2 btn btn-success" type="submit" value="Add" @click.prevent="updateEmp">
          <input class="col-md-2 btn btn-dark" type="submit" value="Close" @click.prevent="togglePopUp">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  // helper function to get data from store
  import {mapState, mapActions} from 'vuex'

  export default {
    data(){
      return{
        formEmp: {
          id: null, 
          name: null, 
          dept: null, 
          salary: null,
          location: null
        }
      }
    },
    // pass data from store to component
    computed: {
      ...mapState(["employees"]),

      // check for mathching id and non matching mongo id
      existsID(){
          return this.employees.filter(emp => (emp.id == this.formEmp.id && emp._id != this.formEmp._id)).length > 0
      }
    }, 
    methods:{
      ...mapActions(["deleteEmpAction", "updateEmpAction"]),

      togglePopUp(){
        if(document.getElementById("editEmpPopUp").style.display == "none"){
          document.getElementById("editEmpPopUp").style.display = "block"
        }
        else{document.getElementById("editEmpPopUp").style.display = "none"}
        
      },

      // Will pre fill form and show pop up
      beginEdit(employee){
        this.formEmp = Object.assign(this.formEmp, employee) 
        this.togglePopUp()      // toggle the edit user pop up
      },

      updateEmp(){
        // make sure the id is not in use (except if its fro the same obj)
        if(!this.existsID){
          this.updateEmpAction(this.formEmp)   // update db
          this.togglePopUp()                    
          window.location.reload()             // reload page to reflect changes
        }
        else{
          alert("User ID is already in use please try another")
          return
        }
      }
    }
  }
</script>

<style scoped>
  #editEmpPopUp{
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
</style>

