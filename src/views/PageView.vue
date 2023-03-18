<script setup lang="ts">

import { usePagerStore } from '../stores/pager'
import Navigator from '../components/Navigator.vue'

import { useRoute } from 'vue-router'

const route = useRoute()

const pager = usePagerStore()

console.log("route.params.pageno")
console.log(route.params.pageno)
pager.toPage(+route.params.pageno)


</script>
<template>
  <div class="row pt-5">
    <Navigator title="Rûḥu'l-Beyân" :pageNum="pager.page"/>
    <div class="rube" v-html="pager.rubeHtml"></div>
  </div>
</template>

<style>
  rube {
    font-family: "Merriweather", Helvetica, Arial;
    font-size: 14px;
    background-color: amber;
    font-style: bold;
  }
</style>
