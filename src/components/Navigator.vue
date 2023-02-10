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
    <label for="page_input" class="text-right px-2">{{ title }} - Sayfa:</label>

    <button type="submit" title="<" @click="prevPage()"> &lt; </button>
    <input class="pageNum" id="page_input" type="number" :value="pager.page" @change="changePage">  
    <button type="submit" @click="nextPage()"> &gt; </button>
  
    <label for="surahList" class="text-right px-2">Sure: </label>
    <input list="surahOptions" id="surahList" placeholder="ara">
    <datalist id="surahOptions">
      <option v-for="(surah, i) in pager.allSurahs" :key="i">{{ surah['index'] }}. {{ surah['name'] }}</option>
    </datalist>

  </div>
</template>

<style scoped>
.pageNum {
  width: 4em;
  text-align: center;
}
</style>
