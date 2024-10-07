<template>
  <!-- 将组件添加 -->
  <workTwo></workTwo>
  <!-- 双向绑定inputData -->
  <input type="text" v-model="inputData" placeholder="请输入">
  <div >{{ inputData }}</div>
  
</template>

<script setup>
// 引入组件
import workTwo from './components/workTwo.vue';
import {ref} from 'vue'
// 创建变量
var inputData= ref()
</script>


