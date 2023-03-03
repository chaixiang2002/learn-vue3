<template>
    <h1>provideA(父亲)</h1>
    <button @click="change">换色</button>
    <div class="box">
    </div>
    <hr>
    <ProvideB></ProvideB>
</template>


<script setup lang='ts'>
import {ref,reactive,inject} from 'vue'
import type { Ref } from 'vue';
import ProvideB from './provideB.vue';
const color=inject<Ref<string>>('color')

const change=()=>{
    color!.value='yellow'//非空断言
}
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