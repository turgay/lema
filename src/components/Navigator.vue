<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import router from "@/router";
import { usePagerStore } from '../stores/pager'

const pager = usePagerStore()


const props = defineProps<{
  title: string,
}>()

function changePage(e, pageno = +e.target.value) {
  goToPage(pageno)
}

function goToPage(pageno: number) {
  router.push({path: `/rube/${pageno}`})
  pager.toPage(pageno)
}

function prevPage() {
  if (pager.page > 1) {
    goToPage(pager.page as number - 1)
  }
}

function nextPage() {
  goToPage(pager.page as number + 1)
}

</script>

<template>
  <div class="navigator pb-3">
    <label for="page_input" class="text-right px-2">{{ title }}:</label>
    <button type="submit" title="<" @click="prevPage()"> &lt; </button>
    <input class="pageNum" id="page_input" type="number" :value="pager.page" @change="changePage">  
    <button type="submit" @click="nextPage()"> &gt; </button>
  
  </div>
</template>

<style scoped>
.pageNum {
  width: 5em;
  text-align: center;
}
</style>
