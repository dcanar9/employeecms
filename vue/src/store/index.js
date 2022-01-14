// import the vue modules
import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

// variables we will use in our actions
const baseURL = "http://localhost:3000"
const employeesURL = `${baseURL}/employees`

// tell view we want to use this plugin in the application 
Vue.use(Vuex)

// creating a vuex store item so we may pass data around the application easier
export default new Vuex.Store({
    strict: true, 

    // global array where the employees will be stored
    state:{
        employees: []
    },

    mutations:{
        // will update the data within the store for us
        setEmployees(state, employees){
            state.employees = employees
        }
    },

    // call to the mutation functions 
    actions:{
        async setEmpAction(context){
            context.commit("setEmployees", (await Axios.get(employeesURL)).data)
        },
        
        async addEmpAction(context, employee){
            await Axios.post(employeesURL, employee)                             // tell api to add to db
            context.commit("setEmployees", (await Axios.get(employeesURL)).data) // update data in app
        },
        
        async deleteEmpAction(context, employee){
            
            // confirm user would like to delete
            if(confirm("Are you sure you would like to delete\nEmployee: " + employee.name)){
                console.log('Deleting ' + JSON.stringify(employee))
                await Axios.delete(employeesURL+`/${employee._id}`)
                context.commit("setEmployees", (await Axios.get(employeesURL)).data) // update data in app
            }
        },
        
        async updateEmpAction(context, employee){
            console.log("updating employee " + JSON.stringify(employee))
            await Axios.put(employeesURL+`/${employee._id}`, employee)
            context.commit("setEmployees", (await Axios.get(employeesURL)).data) // update data in app
        }
    }


})