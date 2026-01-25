<script setup>
  import footor from './component/footor.vue';
</script>

<template>
  <div style="background-color: #BFC6C4;">
    <h1>KRISH</h1>
<nav>
  <!-- use of router  -->
    <RouterLink to="/">About</RouterLink> 
    <RouterLink to="/Contact">Contact</RouterLink>
    <RouterLink to="/Skills">Skills</RouterLink>
    <RouterLink to="/Experience">Experience</RouterLink>
  </nav>
  </div>
  <main style="background-color: #E8E2D8;">
    <!-- <routerView /> is used to displauy the matched component for the given route. -->
    <RouterView />
  </main>
  <div class="footor">
    <footor />
  </div>
</template>
<style scoped>
h1{
  margin-left: 20px;
}
  .footor{
    background-color: #BFC6C4;
    padding: 10px;
    justify-content: center;
    align-items: center;
    margin: 0%;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
  }
  div nav{
    display: flex;
    gap: 25px;
    font-family: Arial, sans-serif;
  }
  a{
    text-decoration: none;
    font-weight: bold;
    font-size: 25px;
    color: black;
  }

</style>
