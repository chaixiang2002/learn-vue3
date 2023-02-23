<template>
    <div class="parent">
      <h1>我是父级</h1>
        <Teleport  :disable="true" to="body">
          <a></a>
          <div>此时a组件的样式跟body靠齐，相对位置是相对与body,而不是父组件</div>
          <div>disable="true"可以控制是否传送</div>
        </Teleport>
    </div>

    <div>
      <el-button @click="flag=!flag" type="success" :icon="Check" circle />
      
      <KeepAlive>
        <ele v-if="flag"></ele>
        <rate v-else></rate>
      </KeepAlive>

    </div>
</template>


<script setup lang='ts'>
import {ref,reactive,onMounted,onUnmounted,onDeactivated,onActivated} from 'vue'
import a from './components/a.vue';
import b from './components/b.vue';
import ele from './components/ele.vue';
import rate from './components/rate.vue';
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
const flag=ref<boolean>(true)

</script>


<style>
*{
  padding: 0;
  margin: 0;
}

.parent{
  background:yellow;
  height: 50vh;/** vh是针对视口的单位，100vh就是可视部分的一半长度，50就是一般 */
}

</style>
<!-- A vue3 template from SnowChar -->