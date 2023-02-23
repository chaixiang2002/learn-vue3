<template>
  <div class="wraps"><hr color=#987cb9 SIZE=3/><p align=left style="color: chartreuse;"><b>Part: </b></p>
    <div :style="{height:item.height+'px',background:item.background,left:item.left+'px',top:item.top+'px'}" v-for="item in waterList" class="items"></div>
  </div><p>tips:</p><br><hr color=#987cb9 SIZE=3/>
</template>

<!------------------------------------------------------>
<script setup lang='ts'>
import {ref,reactive, onMounted} from 'vue'
const props=defineProps<{
  list:any[]
}>()
const waterList=reactive<any[]>([])
const init=()=>{
  const width=130
  const x=document.body.clientWidth
  const column=Math.floor(x/width)
  console.log(column)

  for(let i=0;i<props.list.length;i++){
    if(i<column){
      props.list[i].left=i*length;
      props.list[i].top=20;
      waterList.push(props.list[i])
    }
  }
}
onMounted(()=>{
  init()
})
</script>
<!--==================================================-->

<!--------------------------???------------------------->
<style lang="less" scoped>
.wraps{
  position: relative;
  .items{
    position: absolute;
    width: 120px;
  }
}
</style>
<!--==================================================-->