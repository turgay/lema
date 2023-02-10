import { defineStore } from 'pinia'
import { surahList } from './surah_index'


export const usePagerStore = defineStore("pager", {
  state: () => {
    return {
      page: 0,
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
      this.loadHTML(pageNum)
    },
    async loadHTML(pageNo:number) {
      return fetch("/rube/rube_" +pageNo + ".html")
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
})