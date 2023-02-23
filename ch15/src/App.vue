<template>
    <div>
      <Card></Card>
      <!-- 局部组件 -->
      <CardVue></CardVue>
      <!-- 全局组件 -->

      <!-- -------------------------- -->
      <TreeVue :data="data"></TreeVue>
      <!-- 递归组件 -->
    </div>

    <div style="display: flex;">
      <div @click="switchCom(item,index)" :class="active==index?'active':''" class="tabs" v-for="(item,index) in data2">
          <div>
            {{ item.name }}
          </div>
        </div>
    </div>
    <component :is="markRaw(comId)"></component>

</template>


<script setup lang='ts'>
import {ref,reactive, markRaw, shallowRef} from 'vue'
import Card from './components/Card.vue';
import TreeVue from './components/Tree.vue';
import a from './components/vues/a.vue';
import b from './components/vues/b.vue';
import c from './components/vues/c.vue';
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

//-----------------------------
const comId=shallowRef(a)
const active=ref(0)
const switchCom=(item:any,index:number)=>{
  comId.value=item.com
  active.value=index
}
const data2= reactive([
  {
    name:'A组件',
    com:markRaw(a)
  },
  {
    name:'B组件',
    com:markRaw(b)
  },
  {
    name:'C组件',
    com:markRaw(c)
  },
])

</script>


<style lang="less" >
// *{
//   float: left;
// }
.active{
  background: skyblue;
}
.tabs{
  border: 1px solid #ccc;
  padding: 5px 10px;//上下5px，左右10px
  margin: 5px;
  cursor: pointer;//一些不同的光标,pointer是小手
}

</style>
<!-- A vue3 template from SnowChar -->