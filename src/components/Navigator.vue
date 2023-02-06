<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import { usePagerStore } from '../stores/pager'
import router from "@/router";


const pager = usePagerStore()


defineProps<{
  title: string
}>()

function changePage(e, pageno = +e.target.value) {
  pager.toPage(pageno)
  router.push({path: `/page/${pageno}`})
}

</script>

<template>
  <div class="greetings">
    <label for="page_input" class="text-light px-2">{{ title }}</label>
    <input id="page_input" type="number" :value="pager.page" @change="changePage">  
  
  </div>
</template>
