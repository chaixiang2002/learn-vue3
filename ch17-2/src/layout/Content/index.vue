<template>
    <div class="content">
        <DialogVUe>
            <template #header><!-- <template v-slot:header>的简写 -->
                <div>插入上间</div>
            </template>
            <template #default="{ data,index}"><!-- <template v-slot="{ data,index}"> -->
                <div> {{ data.name}} -- {{ data.age}}--{{ index }} </div>
            </template>
            <template #footer><!-- <template v-slot:footer> -->
                <div> 插入下间 </div>
            </template>

            <!-- 动态插槽 -->
            <template #[name]>
                <div class="hello">hello,我在这来打我呀</div>
            </template>
        </DialogVUe>
        <button @click="change">换位</button>
    </div>
</template>

<!------------------------------------------------------>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import DialogVUe from '../../components/Dialog/index.vue';
let name=ref('aaa')
const change=()=>{
    console.log(name)
    if(name.value=='aaa'){
        name.value='bbb'
        console.log('=>',name)
    }
    else if(name.value=='bbb'){
        name.value='ccc'
        console.log('=>',name)
    }
    else if(name.value=='ccc'){
        name.value='aaa'
        console.log('=>',name)
    }
}
</script>
<!--==================================================-->

<!------------------------------------------------------>
<style lang="less" scoped>
.content {
    flex: 1;
    margin: 20px;
    border: 1px solid #ccc;
    overflow: auto;

    &-items {
        padding: 20px;
        border: 1px solid #ccc;

    }
}
.hello{
    align-content: center;
    color: chartreuse;
}
</style>
<!--==================================================-->