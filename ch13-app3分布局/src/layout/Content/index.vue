<template>
<div class="content">
    内容区域
    <div class="content-items" :key="item" v-for="item in 100">
        {{ item }}
    </div>
</div>
</template>

<!------------------------------------------------------>
<script setup lang='ts'>
import {ref,reactive} from 'vue'
</script>
<!--==================================================-->

<!------------------------------------------------------>
<style lang="less" scoped>
.content{
    flex: 1;
    margin: 20px;
    border: 1px solid #ccc;
    overflow: auto;
    &-items{
        padding: 20px;
        border: 1px solid #ccc;

    }
}
</style>
<!--==================================================-->