<template>
<P> </P>
<HR color=#987cb9 SIZE=1></HR>
<P align=left style="color: chartreuse;"><b>Part1: to全家桶</b></P>

    <HR color=#987cb9 SIZE=1></HR>
    <div>
        <P align=left style="color: chartreuse;"><b>Part: </b></P>
        str:string=>{{ }}
        <br>
        <button @click="">点击</button>
        <p>tips:</p><br>
    </div>

    <HR color=#987cb9 SIZE=1></HR>
    <div>
        obj:man=>{{ man }}
        <br>
        <button @click="change">修改man.like</button>
        <p>普通的对象是非响应式的，修改值，视图不变</p><br>
    </div>
    <HR color=#987cb9 SIZE=1></HR>
    <div>
        toRef:like=>{{like }}
        <br>
        <button @click="change2">修改like</button>
        <p>toRef的对象要是响应式的，不然没用</p><br>
    </div>
    <HR color=#987cb9 SIZE=1></HR>
    <div>
        toRef:like_rea=>{{like_reactive }}
        <br>
        <button @click="change3">修改like_reactive</button>
        <p>toRef的对象要是响应式的，不然没用</p><br>
    </div>
    <HR color=#987cb9 SIZE=1></HR>
    <div>
    <P align=left style="color: chartreuse;"><b>Part4: toRefs</b></P>

        {{ name4 }}--{{ age4 }}--{{ like4}},
        <br>
        <button @click="change4">修改</button>
        <p>tips:</p><br>
    </div>
    <HR color=#987cb9 SIZE=1></HR>
    <div>
        <P align=left style="color: chartreuse;"><b>Part5:toRaw </b></P>

        <br>
        <button @click="change5">点击</button>
        <p>tips:toRaw把对象解构成非响应式</p><br>
    </div>



<P></P>
<HR color=#987cb9 SIZE=1></HR>
</template>

<!------------------------------------------------------>
<script setup lang='ts'>
import {toRef,reactive,toRefs,toRaw} from 'vue'
const man={
    name:'snow',
    age:22,
    like:'love'
}
const change=()=>{
    man.like='sex'
    console.log(man)
}
//-----------------
const like=toRef(man,'like')
const change2=()=>{
    like.value='sex'
    console.log(like)
}
//-------------------
const man_reactive=reactive({
    name:'snow',
    age:22,
    like:'love',
})
const like_reactive=toRef(man_reactive,'like')
const change3=()=>{
    like_reactive.value='sex'
    console.log(like_reactive)
}
//---------------------------
const man4=reactive({name4:'snow',age4:22,like4:'love'})
const toRefs=<T extends object>(object:T)=>{
    const map:any={}
    for (let key in object){
        map[key]=toRef(object,key)
    }
    return map
}
const {name4,age4,like4}=toRefs(man4)//name4,age4,like4有一定要与对象同名
const change4=()=>{
    // man.like='sex'
    console.log(name4,age4,like4)
    man4.name4='cx1'
    man4.age4=33
    man4.like4='ss'
    console.log(name4,age4,like4)
}
//------------------------------
const man5=reactive({name4:'snow',age4:22,like4:'love'})
const change5=()=>{
    console.log(man5,toRaw(man5))
    console.log('--')
    console.log(man5,man5['__v_raw'])
}



</script>

<!------------------------------------------------------>
<style scoped>

</style>
<!-- A vue3 template from SnowChar -->