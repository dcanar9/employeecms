<template>
  <div id="app">
    <SideBar></SideBar>
    <!-- Will render the coponents to the page -->
    <router-view class="content"></router-view>
  </div>
</template>

<script>

  import SideBar from './components/SideBar.vue'
  import { mapActions } from 'vuex'

  export default {
    components:{
      SideBar,
    },
    // importing method from the store
    methods: {
      ...mapActions(["setEmpAction"])
    },
    // what to do when the application is intialized
    created(){
      this.setEmpAction()   // call to get employee data 
    }
  }
</script>

<style>
  .content{
    flex-grow: 1;
    /* padding: 0 2%; */
    /* text-align: center; */
  }
  #app{
    display: flex;
  }
  .title{
    text-align: center;
    padding: 1em 0;
    color:darkolivegreen;
    font-family: 'Raleway',sans-serif; 
    font-weight: 800; 
    text-align: center; 
    text-transform: uppercase; 
    font-size: 3em;
  }
 form div{
   justify-content: center;
 }
 .btn-success {
    color: #fff;
    background-color: darkolivegreen !important;
 }
  
</style>
