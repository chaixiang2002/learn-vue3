<template>
    <div>
      <Card></Card>
      <!-- 局部组件 -->
      <CardVue></CardVue>
      <!-- 全局组件 -->

      <!-- -------------------------- -->
      <TreeVue :data="data"></TreeVue>
    </div>
</template>


<script setup lang='ts'>
import {ref,reactive} from 'vue'
import Card from './components/Card.vue';
import TreeVue from './components/Tree.vue';
//递归组件
interface Tree{
  name:string,
  checked:boolean,
  children?:Tree[]
}

const data=reactive<Tree[]>([
  {
    name:'1',
    checked:false,
    children:[
      {
      name:'1-1',
      checked:false,
      }
    ]
  },
  {
    name:'2',
    checked:false,
  }, 
  {
    name:'3',
    checked:false,
    children:[
      {
        name:'3-1',
        checked:false,
        children:[
          {
          name:'3-1-1',
          checked:false,
          },
          {
          name:'3-1-2',
          checked:false,
          },
          {
          name:'3-1-3',
          checked:false,
          }
        ]
      }
    ]
  },  
  {
    name:'4',
    checked:false,
  },
])

</script>


<style lang="less" >
// *{
//   float: left;
// }

</style>
<!-- A vue3 template from SnowChar -->