import { defineStore } from 'pinia'
import { surahList } from './surah_index'
import type { Surah } from './model'


interface PageState {
  page: number,
  surah: Surah|undefined,
  rubeHtml: String,
  surahs: Array<Surah>
}

export const usePagerStore = defineStore("pager", {
  state: () => {
    return <PageState>{
      page: 0,
      surah: undefined,
      rubeHtml: "",
      surahs: []
    }
  },
  actions: {   
    increment() {
      this.page = this.page +1
    },
    toPage(pageNum: number) {
      this.page = pageNum
      this.surah = this.findSurahByPage(pageNum)
      this.loadHTML(pageNum)
    },
    findSurahByPage(pageNum: number) {
      return surahList.find((surah) => {
        return surah.startPage <= pageNum && surah.endPage >= pageNum
      })    
   },
   async loadHTML(pageNo:number) {
      console.log("Loading page " + pageNo)
      const pageFile =  "/rube/rube_" +pageNo + ".html" 
      console.log(pageFile)
      return fetch(pageFile)
                .then( (resp) => {
                    if(resp.status === 200){
                        return resp.text();
                    }
                })
                .then( (data) => {
                    this.rubeHtml = data as string;
                    return data
                })
                .catch( (error) => {
                    console.log(error);
                })
    }
  },
  getters: {
    allSurahs() {
      return surahList;
    }
  }
}
)