<template>
    <div class="sync">
        <div class="sync-content">
            <div><img :src="data.url"></div>
            <div class="sync-pop"></div>
                <div>{{ data.name }}</div>
                <div>&nbsp;{{ data.age }}</div>
        </div>
        <hr>
        <div>{{ data.desc }}</div>
        <div>ccc</div>
    </div>
</template>


<script setup lang='ts'>
import {ref,reactive} from 'vue'
import {axios} from '@/server/axios'
interface Data{
    data:{
        name:string,
        age:number,
        url:string,
        desc:string
    }
}
console.log('ss')
const {data}= await axios.get<Data>('./data.json')
console.log('ss2')

</script>


<style lang="less" scoped>

</style>
<!-- A vue3 template from SnowChar -->