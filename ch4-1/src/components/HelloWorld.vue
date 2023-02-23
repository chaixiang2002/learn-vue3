<template>
  <div>
      {{ Man }}
  </div>
</template>

<script setup lang='ts'>
import {ref,reactive} from 'vue'
const Man={name:'cx1'}
const change1=()=>{
  Man.name='cx2'
  console.log(Man)
}
</script>

<style scoped>

</style>
<!-- A vue3 template from SnowChar -->