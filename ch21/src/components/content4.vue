<template>
    <input v-model="num.current" step="20" type="number">
    <div>
        {{ num.tweNmber }}
    </div>
</template>


<script setup lang='ts'>
import {ref,reactive,watch} from 'vue'
import gsap from 'gsap'

const num=reactive({
    current:0,
    tweNmber:0
})

watch(()=>num.current,(newVal,oldVal)=>{
    gsap.to(num,{
        duration:1,
        tweNmber:newVal
    })
})
</script>


<style lang="less" scoped>

</style>
<!-- A vue3 template from SnowChar -->