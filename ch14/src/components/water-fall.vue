<template>
  <div>
    <div>子集</div>
    <div>值：{{ title }}</div>
    <div>值：{{ arr }}</div>
  </div>

  <div>
    <button @click="send">給父组件传值1</button>
    <button @click="send2">給父组件传值2</button>
  </div>

</template>

<!------------------------------------------------------>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
// //没有TS的写法
// const props=defineProps({//接受父组件传过来的值defineProps
//   title:{
//     type:String,
//     default:"默认值"
//   }
// })
//
//有TS的写法
// const props=defineProps<{
//   title:string,
//   arr:number[]
// }>()
//
//TS独有带默认值写法
withDefaults(defineProps<{
  title:string,
  arr:number[]
}>(),{
  arr:()=>[666]
})
//-------------传值给父组件
//通用写法
// const emit=defineEmits(['on-click'])

//TS写法
const emit=defineEmits<{
  (e:"on-click",name:string):void
}>()

const send=()=>{
  emit('on-click','2b')
}
const send2=()=>{
  emit('on-click','来点鹰酱震撼！')
}
//------------
//给父组件暴露一些方法
defineExpose({
  name:'暴露给父组件 我的名字',
  open:()=>{
    console.log('this is open function')
  }
})
</script>
<!--==================================================-->

<!--------------------------???------------------------->
<style lang="less" scoped></style>
<!--==================================================-->