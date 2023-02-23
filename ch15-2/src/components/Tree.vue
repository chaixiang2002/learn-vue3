<template>
    <div v-for="item in data" >
        <input v-model="item.checked" type="checkbox" class="aa"><span>{{ item.name }}</span>
        <Tree v-if="item?.children?.length" :data="item?.children"></Tree>
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
</script>


<style lang="less" >
.aa{
  float: left;
}

</style>
<!-- A vue3 template from SnowChar -->