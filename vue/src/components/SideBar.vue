<template>
  <div class="sidebar">
    <h2>MENU</h2>
    <!-- links will change the content of the page -->
    <router-link to="/">View</router-link>
    <router-link to="/edit">Edit</router-link>
    <router-link to="/add">Add</router-link>
  </div>
</template>

<script>

</script>

<style scoped>
  .sidebar {
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: #f1f1f1;
    /* position: fixed; */
    float: left;
    height: 100vh;
    overflow: auto;
    text-align: center;
  }
  .sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
  font-size: 1.5em;
  }
  /* Links on mouse-over */
  .sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
  }
  .sidebar h2{
    margin: 10% 0;
    color: darkolivegreen
  }
</style>
