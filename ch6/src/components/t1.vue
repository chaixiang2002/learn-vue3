<template>
    <P> </P>
    <HR color=#987cb9 SIZE=1></HR>
    <P align=left style="color: chartreuse;"><b>Part1:</b></P>


    <div>
        {{ Man }}
        <button @click="change1">修改</button>
        <p>非响应式，值改显示不改</p>
    </div>

    <div>
        {{ Man2 }}
        <button @click="change2">修改</button>
        <p>ref，响应式，值改显示也改</p>
    </div>

    <div>
        <button @click="isRef1">Man是ref对象吗？</button>
        <button @click="isRef2">Man2是ref对象吗？</button>
        <p></p>
    </div>

    <div>
        {{ Man3 }}
        <button @click="change3">修改</button>
        {{ Man4 }}
        <button @click="change4">修改</button>
        <p>Tip2: Ref man.value.name每一层都是响应式，shallowRef只有man.value的value层才是响应式</p>
        <p>Tip3:视图层有Ref发生响应变化，该页面的所有shallowRef会随着刷新显示到视图（预改变随后渲染）</p>
    </div>

    <div>
    <P align=left style="color: chartreuse;"><b>Part2:</b></P>
        {{ Man5 }}
        <button @click="change5TriggerRef">修改</button>
        <p>ref=shallowRef+triggerRef</p>
    </div>

    <div>
    <P align=left style="color: chartreuse;"><b>Part3:customRef</b></P>
        {{ obj }}
        <button @click="change6MyRef">修改</button>
        <p></p>
    </div>

    <div>
    <P align=left style="color: chartreuse;"><b>Part4:dom</b></P>
        <div ref="dom1">i am dom</div>
        <button @click="click1">修改</button>
        <p></p>
    </div>

    <P></P>
    <HR color=#987cb9 SIZE=1></HR>
    
</template>
<!----------------------------------------------------------------------------->

<script setup lang='ts'>
import {ref,isRef,shallowRef,triggerRef,customRef} from 'vue'
const Man={name:'cx'}
const change1=()=>{
    Man.name='cx改变'
    console.log(Man)
}

const Man2=ref({name:'cx'})
const change2=()=>{
    Man2.value.name='cx1变'
    console.log(Man)
}

const isRef1=()=>{
    alert(isRef(Man));
}
const isRef2=()=>{
    alert(isRef(Man2));
}

const Man3=shallowRef({name:'cx3'})
const change3=()=>{
    Man3.value.name='cx3变'
    console.log("shallowRef Man3=>"+Man3.value.name)
}

const Man4=shallowRef({name:'cx4'})
const change4=()=>{
    Man4.value={
        name:'cx4变'
    }
    console.log("shallowRef Man4=>"+Man4.value.name)
}

const Man5=shallowRef({name:'cx5'})
const change5TriggerRef=()=>{
    Man5.value.name='cx5变'
    triggerRef(Man5)
    console.log("shallowRef Man4=>"+Man4.value.name)
}
// ---------------------------------------------------
function MyRef<T>(value:T){
    let timer:any
    return customRef((track,trigger)=>{
        return {
            get(){
                track()
                return value
            },
            set(newVal){
                clearTimeout(timer)//防抖动
                timer=setTimeout(()=>{
                    console.log("点了一下按钮！")
                    value=newVal//收集依赖
                    timer=null  
                    trigger()//触发依赖更新
                },500)


            }
        }
    })
}
const obj=MyRef<string>('customRef-cx')
const change6MyRef=()=>{
    obj.value='customRef-cx22'
}
//-------------------------------------
const dom1=ref<HTMLDivElement>()
const click1=()=>{
    console.log(dom1.value?.innerText)   
}
</script>



<style scoped>

</style>
<!-- A vue3 template from SnowChar -->