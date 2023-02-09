//import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const usePagerStore = defineStore("pager", {
  state: () => {
    return {
      page: 0,
      rubeHtml: ""
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
    getPage(pageNo:number) {
      return "/rube/rube_" +pageNo + ".html"
    },
    async loadHTML(pageNo:number) {
      return fetch(this.getPage(pageNo))
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
  }
})