<template>
  <layout></layout>
</template>

<!------------------------------------------------------>
<script setup lang='ts'>
import layout from './layout/index.vue'
</script>
<!--==================================================-->

<!------------------------------------------------------>
<style lang="less" >//!!!!!!!!!!!!!!!!!!!看一下App.vue的style有没有带着scoped，带着的话里面的样式就不会对其他组件生效了
html,
body,
#app {
  height: 100%;
  overflow: hidden;
}
</style>
<!--==================================================-->