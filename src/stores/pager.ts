//import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const usePagerStore = defineStore("pager", {
  state: () => {
    return {
      page: 11
    }
  },
  actions: {   
    increment() {
      this.page = this.page +1
    },
    toPage(pageNum: number) {
      this.page = pageNum
    }
  }
})