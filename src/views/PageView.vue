<script setup lang="ts">

import { ref, computed } from 'vue'

import { useRoute } from 'vue-router';

const route = useRoute();  
const pageNum: number = +route.params.pageno


function getPage(pageNo:number) {
    return "/rube/rube_" +pageNo + ".html"
}

let rubeHtml
function loadHTML(pageNo:number) {
  return fetch(getPage(pageNo))
            .then( (resp) => {
                if(resp.status === 200){
                    return resp.text();
                }
            })
            .then( (data) => {
                console.log(data);
                rubeHtml = data;
                return data
            })
            .catch( (error) => {
                console.log(error);
            })
}

//const rubeHtml = async () => await loadHTML(pageNum);

</script>
<template>
  <div class="row pt-5">
    <div class="float-end text-center"> sayfa {{ $route.params.pageno }} </div>
    <div v-html="rubeHtml"></div>
    <!--<object width='100%' height="800" type="text/html" :data="getPage($route.params.pageno)"></object> -->
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
