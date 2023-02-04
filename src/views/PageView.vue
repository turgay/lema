<script setup lang="ts">
import { usePagerStore } from '../stores/pager'

const pager = usePagerStore()

//document.getElementById("content").innerHTML='<object type="text/html" data="rube_' + ind + '.html" ></object>';

//const pageUrl = "/rube/rube_" +pager.page + ".html"
    
defineProps<{
  //pageNum: number

}>()

function getPage(pageNo:number) {
    return "/rube/rube_" +pageNo + ".html"
  }

</script>
<template>
  <div class="rube">
    <h1>Page {{ pager.page }}</h1>
    <div>
      <object type="text/html" :data="getPage(pager.page)"></object>
    </div>

  </div>
</template>

<style>
@media (min-width: 1024px) {
  .rube {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
