<template>
<P> </P>
<HR color=#987cb9 SIZE=1></HR>
<P align=left style="color: chartreuse;"><b>Part:reactive</b></P>

    <div>
        <form >
            <input v-model="form.name" type="text"/>
            <br>
            <input v-model="form.age" type="text"/>
            <br>
            <button @click.prevent="submit">提交</button>
            <p> @click.prevent是阻止默认事件，</p>
            <p> 原生的from里面的按钮默认会刷新表单 </p>

            <input v-model="form.name" type="text"/>
            <br>
            <input v-model="form.age" type="text"/>
            <br>
        </form >
    </div>

    <div>
        <P align=left style="color: chartreuse;"><b>Part2:reactive</b></P>
        <ul>
            <li v-for="item in list">{{ item }}</li>
        </ul>
        <button @click="add">添加</button><br>
        <button @click="click2">渲染2</button><br>
        <button @click="click3">渲染3</button><br>
        <p>法1：先解构res，再将res解构后的内容添加到list</p>
    </div>

    <div>
        <P align=left style="color: chartreuse;"><b>Part3:reactive</b></P>
        <ul>
            <li v-for="item in list1.arr">{{ item }}</li>
        </ul>
        <button @click="click11">渲染4</button><br>
        <p>法2：把数组当成一个属性</p>
    </div>

    <div>
        <P align=left style="color: chartreuse;"><b>Part4:readOnly</b></P>
        <ul>
            <li v-for="item in read">{{ item }}</li>
        </ul>
        <button @click="tryChange1">尝试改变1</button><br>
        <button @click="tryChange2">尝试改变1</button><br>
        <p>法2：把数组当成一个属性</p>
    </div>

<P></P>
<HR color=#987cb9 SIZE=1></HR>
</template>

<!------------------------------------------------------>
<script setup lang='ts'>
import {ref,reactive,readonly} from 'vue'

const b=ref('sad')
const a=reactive({//自己推断
    name:'rective-name',
    age:25
})

type M={
    name:string,
    age:number
}
const form=reactive<M>({//自己定义
    name:'rective-name',
    age:25
})
const submit=()=>{

}

//================
let list=reactive<string[]>([])
const add=()=>{
    list.push('EDG')
}
const click2=()=>{
    let res=['a','b','c']
    list=res
    console.log(list)
}
const click3=()=>{
    let res=['a','b','c']
    list.push(...res)//先解构res，再将res解构后的内容添加到list
    console.log(res)
    console.log(list)
}

//--------------------
let list1=reactive<{
    arr:string[]
}>({
    arr:[]
})
const click11=()=>{
    let res=['a','b','c']
    list1.arr=res;
    console.log(res)
    console.log(list1)
}
//--------------------
let objOnly=reactive({name:'cx'})//变量
const read=readonly(objOnly)//创造只读变量read=原来的变量
const tryChange1=()=>{
    // read.name='cx999'
    console.log(read.name)
}
const tryChange2=()=>{
    objOnly.name='cx999'
    console.log(read.name)
}
</script>

<!------------------------------------------------------>
<style scoped>

</style>
<!-- A vue3 template from SnowChar -->