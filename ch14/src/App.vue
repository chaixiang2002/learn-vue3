<template>
  <div><hr color=#987cb9 SIZE=3/><p align=left style="color: chartreuse;"><b>Part: </b></p>
    <div>父级</div>
    <hr>
    <waterFall ref="waterFallvalue" @on-click="getName" :arr="[1,2,3]" :title="name"></waterFall>
  </div><hr color=#987cb9 SIZE=3/>

  <div><hr color=#987cb9 SIZE=3/><p align=left style="color: chartreuse;"><b>Part: </b></p>
    <waterFall2 :list="list"></waterFall2>
      <div>tips{{ tip1 }}</div>
  </div><hr color=#987cb9 SIZE=3/>
</template>


<script setup lang='ts'>
import waterFall from './components/water-fall.vue';
import waterFall2 from './components/water-fall2.vue';
import {ref,reactive, onMounted} from 'vue'
const waterFallvalue =ref<InstanceType<typeof waterFall>>()
let name='SnowChar'

onMounted(()=>{
  console.log(waterFallvalue.value?.name)
  waterFallvalue.value?.open()
})
const getName=(name:string)=>{
  console.log(name,'====>我是父组件')
}
//----------------------------------
const tip1='2. 瀑布流组件'
const list=[
  {
    height:300,
    background:'red'
  },
  {
    height:400,
    background:'pink'
  },
  {
    height:500,
    background:'blue'
  },
  {
    height:300,
    background:'red'
  },
  {
    height:300,
    background:'red'
  },
  {
    height:300,
    background:'red'
  },
]

</script>


<style lang="less" scoped>
</style>