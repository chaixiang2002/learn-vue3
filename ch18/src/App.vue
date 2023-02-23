<template>
    <!-- <div>hello</div> -->
    <Suspense>
       
      <template #default>
        <SyncVue></SyncVue>
      </template>

      <template #fallback>
        <skeleton></skeleton>
      </template>
    </Suspense>
</template>


<script setup lang='ts'>
import {ref,reactive, defineAsyncComponent} from 'vue'
import skeleton from './components/skeleton.vue';
const SyncVue=defineAsyncComponent(()=>import('./components/sync.vue')) //失败了！！！！！！！！没有转跳
// const SyncVue=defineAsyncComponent({
//   loadingComponent:()=>import ('@/components/sync.vue'),
//   errorComponent:,
//   timeout:,
// })

</script>


<style lang="less" scoped>

</style>
<!-- A vue3 template from SnowChar -->