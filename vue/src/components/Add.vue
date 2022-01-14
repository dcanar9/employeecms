<template>
  <div class="">
    <h1 class="title">Add Employee</h1>
    <div>
      <form>
        <div class="row">
          <div class="form-group col-md-1">
            <label>ID:</label>
            <input class="form-control" type="number" v-model="employee.id" required>
          </div>
          <div class="form-group col-md-4">
            <label>Name:</label>
            <input class="form-control" type="text" v-model="employee.name" required>
          </div>
        </div>
        <div class="row">
          <div class="form-group col-md-3">
            <label>Department:</label>
            <input class="form-control" type="text" v-model="employee.dept" required>
          </div>
          <div class="from-group col-md-2">
            <label>Salary:</label>
            <input class="form-control" type="Number" v-model="employee.salary" required>
          </div>
        </div>
        <div class="row">
          <div class="from-group col-md-5">
            <label>Location:</label>
            <input class="form-control" type="text" v-model="employee.location" required>
          </div>
        </div>
        <br>
        <div class="row">
          <input class="col-md-2 btn btn-success" type="submit" value="Add" @click.prevent="addEmp">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default{

    data(){
      return{
        employee: {
          id: null, 
          name: null, 
          dept: null, 
          salary: null,
          location: null
        }
      }
    },
    computed:{
      ...mapState(["employees"]),

      existsID(){
          return this.employees.filter(emp => emp.id == this.employee.id).length > 0
      }
    },
    methods:{
      ...mapActions(["addEmpAction"]),

      addEmp(){
        // make sure fields are all filled out
        switch(null){
          case this.employee.id:
          case this.employee.name:
          case this.employee.dept:
          case this.employee.salary:
          case this.employee.location:
            alert("Please fill out all the field provided")
            return
        }
        // check if the employee id has been used already
        if(!this.existsID){
          console.log("Add: " + JSON.stringify(this.employee))
          this.addEmpAction(this.employee)
          this.employee.id = this.employee.name = this.employee.dept = this.employee.salary = this.employee.location = null
          this.$router.push('/')                // go to viewing employees
          window.location.reload()             // reload page to reflect changes
        }
        // if id is used already tell user
        else{
          alert("User ID is already in use please try another")
          return
        }
      }
    }
  }
</script>


