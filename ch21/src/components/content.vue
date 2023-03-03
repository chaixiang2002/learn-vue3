<template>
    <div class="content">
        <button @click="flag=!flag">switch</button>
        <Transition name="fade">
            <div v-if="flag" class="box"></div>
        </Transition>
        <p>sad</p>
        <Transition name="fade">
            <div v-if="flag" class="box"></div>
        </Transition>
        <div>自定义动画名</div>
        <Transition :duration="{enter:100,leave:500}" enter-from-class="e-from" enter-active-class="e-active" enter-to-class="e-to" name="fade2">
            <div v-if="flag2" class="box2"></div>
        </Transition>
        <button @click="flag2=!flag2">switch</button>

        <hr>
        <div>animate.css动画库,:duration="{enter:100,leave:500}限制时间</div>
        <button @click="flag3=!flag3">switch</button>
        <Transition enter-active-class="animate__animated animate__backInDown" leave-active-class="animate__animated animate__backOutDown" name="fade2">
            <div v-if="flag3" class="box2"></div>
        </Transition>

        <hr>
        <button @click="flag4=!flag4">switch</button>
        <Transition
            @before-enter="EnterFrom"
            @enter="EnterActive"
            @after-enter="EnterTo"
            @enter-cancelled="EnterCancel"
        >
            <div v-if="flag4" class="box2"></div>
        </Transition>

    </div>
</template>


<script setup lang='ts'>
import {ref,reactive} from 'vue'
import 'animate.css'
import { en } from 'element-plus/es/locale';
const flag=ref<boolean>(true)
const flag2=ref<boolean>(true)
const flag3=ref<boolean>(true)
const flag4=ref<boolean>(true)

const EnterFrom=(el:Element)=>{
    console.log('进入之前')
}
const EnterActive=(el:Element,done:Function)=>{
    console.log('过渡曲线')
    setTimeout(()=>{
        done()
    },3000)
    
}
const EnterTo=(el:Element)=>{
    console.log('过渡完成')
    
}
const EnterCancel=(el:Element)=>{
    console.log('被打断')
    
}
</script>


<style lang="less" scoped>
.box{
    width: 200px;
    height: 200px;
    background: red;
}
.box2{
    width: 200px;
    height: 200px;
    background: bisque;
}

.fade-enter-from{
    width: 0;
    height: 0;
}
.fade-enter-active{
    transition: all 1s ease;
}
.fade-enter-to{
    width: 200px;
    height: 200px;
}

.fade-leave-from{
    width: 200px;
    height: 200px;
}
.fade-leave-active{
    transition: all 3s ease;
}
.fade-leave-to{
    width: 0;
    height: 0;
}



.e-from{
    width: 0;
    height: 0;
    transform: rotate(360degq);
}
.e-active{
    transition: all 0.5s ease;
}
.e-to{
    width: 200px;
    height: 200px;
}

</style>
<!-- A vue3 template from SnowChar --> 