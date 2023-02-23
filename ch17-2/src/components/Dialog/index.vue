<template>
    <div>
        <header class="header">
            <slot name="header"></slot>
        </header>
        <main class="main">
            <!-- <slot>匿名插槽：中间</slot> -->
            <div v-for="(item,index) in data">
                <slot :index="index" :data="item"></slot>
            </div>
        </main>
        <footer class="footer">
            <slot name="footer"></slot>
        </footer>

        <div>
            <p>动态插槽</p>
            <div class="header">
                <p>A插槽</p>
                <slot name="aaa"></slot>
            </div>
            <div class="main">
                <p>b插槽</p>
                <slot name="bbb"></slot>
            </div>
            <div class="footer">
                <p>c插槽</p>
                <slot name="ccc"></slot>
            </div>
        </div>
        

    </div>
</template>


<script setup lang='ts'>
import { type } from 'os';
import {ref,reactive} from 'vue'
type names={
    name:string,
    age:number
}
const data=reactive<names[]>([
    {
        name:'snowchar的插件1',
        age:201
    },
    {
        name:'snowchar的插件2',
        age:202
    },
    {
        name:'snowchar的插件3',
        age:203
    },
    {
        name:'snowchar的插件4',
        age:204
    },
    
])
</script>


<style lang="less" scoped>
.header{
    height: 200px;
    background: red;
    color: #fff;
}
.main{
    height: 200px;
    background: green;
    color: #fff;
}
.footer{
    height: 200px;
    background: blue;
    color: #fff;
}
</style>
<!-- A vue3 template from SnowChar -->