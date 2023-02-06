<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import router from "@/router";



defineProps<{
  title: string,
  pageNum: number,
}>()

function changePage(e, pageno = +e.target.value) {
  router.push({path: `/rube/${pageno}`})
}

</script>

<template>
  <div class="greetings">
    <label for="page_input" class="text-light px-2">{{ title }}</label>
    <input id="page_input" type="number" :value="pageNum" @change="changePage">  
  
  </div>
</template>
