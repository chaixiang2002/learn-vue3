<script setup lang="ts">
import {ref,reactive} from 'vue'
const arr:string[]=['a','b','c','d']
arr.splice(2,0,'love')
</script>

<template>
  <div>
    <div v-for="item in arr">
      {{ item }}
    </div>
    <div :key="index" v-for="(item1,index) in arr">
      {{ item1 }}-{{ index }}
    </div>
  </div>


</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
