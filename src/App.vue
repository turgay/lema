<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navigator from './components/Navigator.vue'
</script>

<template>
<div id="app">

<header>
  <!-- Fixed navbar -->
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Fixed navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>      
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
                <a class="nav-link" href=""> <RouterLink to="/">Home</RouterLink></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href=""> <RouterLink to="/about">About</RouterLink></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href=""> <RouterLink to="/rube">Ruhul Beyan</RouterLink></a>
            </li>
                <li class="nav-item">
                <a class="nav-link" href=""><RouterLink to="/page/11">page 11</RouterLink></a>
            </li>
        </ul>
        <div class="d-flex px-4">
            <Navigator title="Rûḥu'l-Beyân" page-num="$route.params.pageno"/> 
        </div>
        <form class="d-flex">         
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</header>

<!-- Begin page content -->
<main class="flex-shrink-0">
  <div class="container">
    <h2 class="mt-5">Ruhul Beyan</h2>     
    <RouterView />
  </div>
</main>

<footer class="footer mt-auto py-3 bg-light">
  <div class="container">
    <span class="text-muted">Place sticky footer content here.</span>
  </div>
</footer>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');

</style>
