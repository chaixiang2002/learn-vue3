<template>
    <h1>App.vue(爷爷)</h1>
    <label>
        <input v-model="colorVal" value="red" name="color" type="radio">
        红色
    </label>
    
    <label>
        <input v-model="colorVal" value="pink" name="color" type="radio">
        粉色
    </label>
    
    <label>
        <input v-model="colorVal" value="yellow" name="color" type="radio">
        Snow色
    </label>

    <div class="box">

    </div>
    <hr>
    <provideA></provideA>
    
</template>


<script setup lang='ts'>
import {ref,reactive,provide,readonly} from 'vue'
import provideA from './provideA.vue'
const colorVal =ref<string>('red')
provide('color',colorVal)
</script>


<style lang="less" scoped>
.box{
    height: 50px;
    width: 50px;
    border: 1px solid #ccc;

    background:v-bind(colorVal);
}
</style>
<!-- A vue3 template from SnowChar -->