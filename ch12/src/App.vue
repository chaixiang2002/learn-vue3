<template>
<hr color=#987cb9 SIZE=3/>
<div>
   <p align=left style="color: chartreuse;"><b>Part12: 组件</b></p>
   <P1 v-if="flag"></P1>
   <button @click="flag=!flag">创建/销毁</button>
   <div ref="div" >{{ str }}</div>
   str:string=>{{ }}
   <br>
   <button @click="change">点击</button>
   <div v-html="tip1"></div><br>
</div>
</template>

<!------------------------------------------------------>
<script setup lang='ts'>
import {ref,reactive,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted,onRenderTracked,onRenderTriggered} from 'vue'
import P1 from './components/P1.vue' 
const flag=ref<Boolean>(false)
console.log('setup')
const str=ref<string>('snowchar')
const div=ref<HTMLDivElement>()
let tip1='1. setup语法糖是没有onBeforeCreate,onCreate这两给阶段的<br>'+
         '2. vue3不需要注册components:,只需import即用<br>'+
         '3. onBeforeMount读不了dom，onMounted可以读dom<br>'
//
const change=()=>{
  str.value='我被改了！'
}
onBeforeMount(()=>{
  console.log('组件挂载前===>',div.value)
})
onMounted(()=>{
  console.log('组件挂载完成时===>',div.value)
})
onBeforeUpdate(()=>{
  console.log('组件更新前===>',str.value,div.value)
  console.log('组件更新前===>',div.value?.innerText)
})
onUpdated(()=>{
  console.log('组件更新完成时===>',str.value,div.value)
  console.log('组件更新完成时===>',div.value?.innerText)
})
onBeforeUnmount(()=>{
  console.log('组件卸载前===>')
})
onUnmounted(()=>{
  console.log('组件卸载完成时===>')
})

onRenderTracked((e)=>{
  console.log(e)
})
onRenderTriggered((e)=>{
  console.log(e)
})
</script>
<!--==================================================-->

<!------------------------------------------------------>
<style lang="less" scoped>
</style>
<!--==================================================-->