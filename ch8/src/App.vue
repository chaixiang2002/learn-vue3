<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import p1 from './components/p1.vue'
import p2 from './components/p2.vue'

</script>

<template>
<!-- <HelloWorld msg="000">HelloWorld</HelloWorld> -->
<p1></p1>
<!-- <p2></p2> -->

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
