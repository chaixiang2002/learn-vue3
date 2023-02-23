<template>
  <div class="wraps" >
      <div :style="{height:item.height+'px',background:item.background,top:item.top+'px',left:item.left+'px'}"
        v-for="item in waterList" class="items"></div>
      </div>
</template>

<!------------------------------------------------------>
<script setup lang='ts'>
import {ref,reactive,onMounted} from 'vue'
const props=defineProps<{
  list:any[]
}>()
  const waterList =reactive<any[]>([])
  const init = () => {
  const heightList: any[] = []
  const width = 130;
  const x = document.body.clientWidth
  const column = Math.floor(x / width)//Math.floor向下取整

  /**
   * 1. colmn计算出一行可以放几列，例如可以放8列
   * 2. heightList存放8列的高度
   * 3. 循环所有的元素，前8列直接放在heightList，8列之后，每次找到总高度最短的列加进去并更新此列高度
   */
  for (let i = 0; i < props.list.length; i++) {
      if (i < column) {//前8列
          props.list[i].top = 10;
          props.list[i].left = i * width;
          heightList.push(props.list[i].height + 10)
          waterList.push(props.list[i])
      } else {//8列之后，每次找到总高度最短的列加进去并更新此列高度
          let current = heightList[0]
          let index = 0;
          heightList.forEach((h, inx) => {//遍历一列长度找最小，index为最小列的下标,current为最小列高度,
              if (current > h) {
                  current = h;
                  index = inx;
              }
          })
          console.log(current,'c')
          props.list[i].top = (current + 20);//更新元素顶距
          console.log(props.list[i].top,'top',i)
          props.list[i].left = index * width;//更新元素左距离
          heightList[index] =  (heightList[index] + props.list[i].height + 20);
          waterList.push(props.list[i])
      
      }
  }
  console.log(props.list)
}
onMounted(()=>{
  window.onresize=()=>init()
  init()
})

</script>
<!--==================================================-->

<!--------------------------???------------------------->
<style lang="less" scoped>
.wraps{
  position: relative;//相对定位，的元素的位置相对于自身默认位置
  height: 100%;
  .items{
      position:absolute;//绝对定位，的元素的位置相对于最近的已定位祖先元素
      width: 120px;
  }
}
</style>
<!--==================================================-->