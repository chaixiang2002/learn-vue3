<template>
    <div>
        <button @click="random">random</button>
        <TransitionGroup move-class="mmm" class="wraps" tag="div">
            <div class="items" :key="item.id" v-for="item in list">{{ item.number }}</div>
        </TransitionGroup>
    </div>
</template>


<script setup lang='ts'>
import {ref} from 'vue'
import _ from 'lodash'
let list =ref(Array.apply(null,{length:81} as number[]).map((_,index)=>{
    return{
        id:index,
        number:(index%9)+1
    }
}))
// console.log(list.value);
const random=()=>{
    list.value=_.shuffle(list.value)
}

</script>

<style lang="less" scoped>
.wraps{
    display: flex;
    flex-wrap: wrap;
    width: calc(25px * 9 + 9px);
    .items{
        /**
            宽度为 25 像素。
            高度为 25 像素。
            边框为 1 像素宽，颜色为 #ccc（浅灰色）的实线。
            显示方式为 flex，即弹性盒布局。
            水平居中对齐（通过 justify-content: center 实现）。
            垂直居中对齐（通过 align-items: center 实现）。
        */
        width: 25px;
        height: 25px;
        border: 1px solid #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
.mmm{
    transition: all 1s;
}
</style>
<!-- A vue3 template from SnowChar -->