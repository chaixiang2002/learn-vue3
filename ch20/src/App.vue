<template>
    <div>
      <el-button type="success" @click="flag=!flag">切换</el-button>
      <A v-if="flag"></A>
      <B v-else></B>
    </div>
</template>


<script setup lang='ts'>
import {ref,reactive} from 'vue'
import A from './components/AA.vue';
import B from './components/BB.vue';
import C from './components/CC.vue';
const flag=ref<boolean>(true)
</script>
 

<style scoped>

</style>
<!-- A vue3 template from SnowChar -->