// import vue, the router obj, and the components used throughout the app
import Vue from 'vue'
import VueRouter from 'vue-router'
import Employees from '../components/Employees'
import Add from '../components/Add'
import Edit from '../components/Edit'

// tell application to use this 
Vue.use(VueRouter)

// create router obj and set which path will handle which component 
export default new VueRouter({
    mode: 'history',

    // array for all the routes and their accompannying components
    routes:[
        {path: "/", component: Employees},
        {path: "/add", component: Add},
        {path: "/edit", component: Edit}
    ]
})