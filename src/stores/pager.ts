import { defineStore } from 'pinia'
import { surahList } from './surah_index'


export const usePagerStore = defineStore("pager", {
  state: () => {
    return {
      page: 0,
      surah: {},
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
      // const pageFile = ((pageNo >= 2050) ? "/rube/rube_" +pageNo + ".html" : "/1_rube/" +pageNo + ".html")
      const pageFile =  "/rube/rube_" +pageNo + ".html" 
      console.log(pageFile)
      return fetch(pageFile)
                .then( (resp) => {
                    if(resp.status === 200){
                        return resp.text();
                    }
                })
                .then( (data) => {
                    console.log(data);
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