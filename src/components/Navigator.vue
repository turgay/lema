<script setup lang="ts">
import router from "@/router";
import { usePagerStore } from '../stores/pager'

const pager = usePagerStore()


const props = defineProps<{
  title: string,
}>()

function getValue(e: Event) {
  if (e && e.target) {
    return (e.target as HTMLInputElement).value
  }
  return 0
}

function changePage(e: Event, pageno = +getValue(e)) {
  goToPage(pageno)
}

function changeSurah(e: Event, pageno = +getValue(e)) {
  if (pageno) goToPage(pageno)
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
  if (pager.page < 10955) {
    goToPage(pager.page as number + 1)
  }
}

</script>

<template>
  <div class="navigator pb-3">
    <label for="page_input" class="text-right px-2">{{ title }} - Sayfa:</label>

    <button type="submit" title="<" @click="prevPage()"> &lt; </button>
    <input class="pageNum" id="page_input" type="number" :value="pager.page" @change="changePage">  
    <button type="submit" @click="nextPage()"> &gt; </button>
  
    <label for="surahList" class="text-right px-2">Sure: </label>
    <input list="surahOptions" id="surahList" placeholder="ara" :value="pager.surah ? (pager.surah.index + '.' + pager.surah.name) : ''"
    @input="changeSurah">
    <datalist id="surahOptions">
      <option v-for="(surah, i) in pager.allSurahs" :key="i" v-bind:value="surah.startPage">{{ surah['index'] }}. {{ surah['name'] }}</option>      
    </datalist>

  </div>
</template>

<style scoped>
.pageNum {
  width: 5em;
  text-align: center;
}
</style>
