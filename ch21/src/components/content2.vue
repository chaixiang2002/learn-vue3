<template>
    <div class="content">
        <button @click="add">add</button>
        <button @click="pop">pop</button>
        <div class="wraps">
            <TransitionGroup 
                tag="section" 
                enter-active-class="animate__animated animate__zoomInDown"
                leave-active-class="animate__animated animate__zoomOutDown"
            >
                <div class="item" :key="item" v-for="item in list">{{ item }}</div>
            </TransitionGroup>
        </div>
    </div>
</template>


<script setup lang='ts'>
import { ref, reactive } from 'vue'
import "animate.css"
import type { transform } from 'lodash';
const list = reactive<number[]>([1, 2, 3, 4, 5, 6, 7])
const add=()=>{
    list.push(list.length+1)
}
const pop=()=>{
    list.pop()
}
</script>


<style lang="less" scoped>
.wraps {
    display: flex;
    flex-wrap: wrap;
    word-break: break-all;
    border: 1px solid #ccc;

    .item {
        margin: 10px;
    }
}
</style>
<!-- A vue3 template from SnowChar -->