<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import { usePagerStore } from '../stores/pager'

const pager = usePagerStore()


defineProps<{
  msg: string,
  pageno: number

}>()

function changePage(e, v = +e.target.value) {
  console.log("page = " + v)
     // c.value = v
      //f.value = v * (9 / 5) + 32

      //router.push({ path: '/home', replace: true })
      pager.toPage(v)
}

</script>

<template>
  <div class="greetings">
    <h3 class="green">{{ msg }}</h3>
    <input type="number" :value="pageno" @change="changePage">  
  
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
