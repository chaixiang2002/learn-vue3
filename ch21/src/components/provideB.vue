<template>
    <h1>provideB(孙子)</h1>
    <div class="box">

    </div>
    <hr>
</template>


<script setup lang='ts'>
import {ref,reactive,inject} from 'vue'
import type { Ref } from 'vue';
const color=inject<Ref<string>>('color')
</script>


<style lang="less" scoped>
.box{
    height: 50px;
    width: 50px;
    border: 1px solid #ccc;
    background:v-bind(color);
    // vue3特有，背景可以绑定setup里的变量   
}
</style>
<!-- A vue3 template from SnowChar -->