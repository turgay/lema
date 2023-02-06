<script setup lang="ts">

defineProps<{

}>()

function getPage(pageNo:number) {
    return "/rube/rube_" +pageNo + ".html"
  }

</script>
<template>
  <div class="row pt-5">
    <div class="float-end text-center"> sayfa {{ $route.params.pageno }} </div>
    <object width='100%' height="800" type="text/html" :data="getPage($route.params.pageno)"></object>
  </div>
</template>

<style>
  object {
    font-family: "Merriweather", Helvetica, Arial;
    font-size: 14px;
    background-color: amber;
    font-style: bold;
  }
</style>
