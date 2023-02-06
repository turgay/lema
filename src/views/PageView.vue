<script setup lang="ts">
import { usePagerStore } from '../stores/pager'

const pager = usePagerStore()


defineProps<{

}>()

function getPage(pageNo:number) {
    return "/rube/rube_" +pageNo + ".html"
  }

</script>
<template>
  <div class="row">
    <h1>Page {{ pager.page }}</h1>
      <object width='100%' height="800" type="text/html" :data="getPage(pager.page)"></object>
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
