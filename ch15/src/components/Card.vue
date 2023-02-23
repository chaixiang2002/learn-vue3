<template>
    <div class="card">
        <header>
            <div>标题</div>     <div>副标题</div>
        </header>
        <section>
            内容
        </section>
    </div>
</template>


<script setup lang='ts'>
import {ref,reactive} from 'vue'

</script>


<style lang="less" scoped>//内容(content)、内边距(padding)、边框(border)和外边距(margin)
@border:#ccc;// less 变量
.card{
    border: 1px solid @border;//solid 实线边框
    padding: 0px;//不写默认2rm 2字体长度
    width: 400px;
    header{
        display: flex;//浮动
        justify-content: space-between;//在行之间显示带有间隔的弹性项目：
        padding: 5px;
        border-bottom: 1px solid @border;//设置下边框的样式：
    }
    section{
        padding: 5px;
        min-height:300px;
    }
}
</style>
<!-- A vue3 template from SnowChar -->