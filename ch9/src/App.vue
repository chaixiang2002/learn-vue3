<template>
<HR color=#987cb9 SIZE=1></HR>
<div>
   <P align=left style="color: chartreuse;"><b>Part: </b></P>
   str:string=>{{ firstName}}--{{  lastName}}<br>
   姓名=>{{ name}}<br>
   姓名2=>{{ name2}}<br>
   <input v-model="firstName" type="text" placeholder="姓"/>
   <input v-model="lastName" type="text" placeholder="名"/>
   <br>
   <button @click="">点击</button>
   <p>tips:</p><br>
</div>
<div>
   <P align=left style="color: chartreuse;"><b>Part: </b></P>
   <table>
      <thead>
         <tr>
            <th>名称</th>
            <th>库存</th>
            <th>单价</th>
            <th>小计</th>
            <th>操作</th>
         </tr>
      </thead>
      <tbody>
         <tr :key="index" v-for="(item,index) in data">
            <td>{{ item.name }}</td>
            <td><button @click="addOrSub(item,false)">-</button>{{ item.num }}<button @click="addOrSub(item,true)">+</button></td>
            <td>{{ item.price }}</td>
            <td>{{ item.price*item.num }}</td>
            <td><button @click="del(index)">删除</button></td>
         </tr>
      </tbody>
      <tfoot>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td align="center" >总价：{{ $total }}</td>
      </tfoot>
      
   </table>
   <button @click="">点击</button>
   <p>tips:data.reduce!!!!!</p><br>
</div>

<div>
   <P align=left style="color: chartreuse;"><b>Part10:监听器 </b></P>
   case1:<input type="text" v-model="message1"/><hr>
   case2:<input type="text" v-model="message2"/><hr>
   case3:<input type="text" v-model="message3.foo.bar.name"/><hr>
   <p>tips:{{ tip3 }}</p><br>
</div>

<div>
   <P align=left style="color: chartreuse;"><b>Part11:监听器effect </b></P>
   case1:<input type="text" v-model="message11"/><hr>
   case2:<input type="text" v-model="message22"/><hr>
   <button @click="stopWatch">停止监听</button>
   <p>tips:{{ tip4 }}</p><br>
</div>

</template>



<!------------------------------------------------------>
<script setup lang='ts'>
import {ref,reactive,computed, watch,watchEffect} from 'vue'
const firstName=ref('')
const lastName=ref('')
const name =computed(()=>{
   return firstName.value+lastName.value
})
//--------------------------------------
const name2 =computed({
   get(){
      return firstName.value+lastName.value
   },
   set(){
      firstName.value+lastName.value
   }
})
//----------------------------------
type Shop={
   name:string,
   num:number,
   price:number,
}
let $total=ref(0)
const data=reactive<Shop[]>([
   {
      name:"上衣",
      num:5,
      price:30,
   },
   {
      name:"裤子",
      num:5,
      price:30,
   },
   {
      name:"鞋",
      num:5,
      price:30,
   },
])
const addOrSub=(item:Shop,type:boolean):void=>{
   if(item.num>1&&!type){
      item.num--;
   }
   if(item.num<999&&type){
      item.num++;
   }
   total()
}
const del=(index:number)=>{
   data.splice(index,1)
   total()
}
const total=()=>{
   $total.value=data.reduce((prev,next)=>{
      return prev+(next.num*next.price)
   },0)
}
total()

//-----
let message1=ref<string>('柴祥')
let message2=ref<string>('SnowChar')
let message3=ref({
   foo:{
      bar:{
         name:'myName'
      }
   }
})
const tip3='1. watch(数据源可以是数组,回调函数)   newVal，oldVal\n'+
           '2. ref如果要监听深层对象，需要加上deep：true\n'+
           '3. reactive不需要加上deep'

   watch([message1,message2],(newVal,oldVal)=>{
      console.log(newVal,oldVal) 
   })

   watch(message3,(newVal,oldVal)=>{
      console.log(newVal,oldVal)
   },{
      deep:true
   })
   watch(()=>message3.value.foo.bar.name ,(newVal,oldVal)=>{
      console.log(newVal,oldVal)
   },{
      deep:true,
      immediate:true,
      flush:"post"
   })
//------------------
let message11=ref('a')
let message22=ref('b')
let tip4='watch是惰性的，只有组件刷新，值改变'+
         'watcheffect是非惰性的'+
         'watchEffect中的回调函数会优先执行'

const stop=watchEffect((callback_)=>{
   console.log('message11=>',message11)
   console.log('message22=>',message22)
   callback_(()=>{
      console.log('before:this is a Callback function')
   })
})
const stopWatch=()=>stop()

</script>
<!--==================================================-->

<!------------------------------------------------------>
<style scoped>
</style>
<!--==================================================-->