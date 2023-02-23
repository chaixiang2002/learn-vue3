<template>
    <div class="tree" v-for="item in data" @click.stop="clickTap(item)">
        <input v-model="item.checked" type="checkbox" class="aa"><span>{{ item.name }}</span>
        <snow-tree v-if="item?.children?.length" :data="item?.children"></snow-tree>
    </div>
</template>


<script setup lang='ts'>
import {ref,reactive} from 'vue'
interface Tree{
  name:string,
  checked:boolean,
  children?:Tree[]
}
defineProps<{
    data?:Tree[]
}>()



const clickTap=(item:Tree)=>{
  item.checked=!item.checked
  console.log(item.name)
  console.log(item.checked)
  if(item?.children?.length){
    for(let i=0;i<item.children?.length;i++){
      item.children[i].checked=item.checked
    }
  }

}
</script>

<script lang="ts">
export default{
  name:'snow-tree'
}
</script>


<style lang="less" >
.tree{
  margin: 16px;
}

</style>
<!-- A vue3 template from SnowChar -->