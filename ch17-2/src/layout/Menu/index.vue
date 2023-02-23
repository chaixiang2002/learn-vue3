<template>
<div class="menu">
菜单区域
<TreeVue :data="data"></TreeVue>
</div>
</template>

<!------------------------------------------------------>
<script setup lang='ts'>
import {ref,reactive} from 'vue'
import TreeVue from '../../components/Tree.vue';
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
<!--==================================================-->

<!------------------------------------------------------>
<style lang="less" scoped>
.menu{
    width: 200px;
    border-right: 1px solid #ccc;
}
</style>
<!--==================================================-->