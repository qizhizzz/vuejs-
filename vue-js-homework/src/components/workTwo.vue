<template>
  <div style="height: 200px; width: 200px; background-color: skyblue">
    这是个组件
    <p :title="pTitle">{{pTitle}}</p>
    <label>
    <input type="radio" v-model="gender" name="gender" value=" 0"> 男
  </label>
  <label>
    <input type="radio" v-model="gender" value="1"> 女
  </label>
  <div v-if="gender==0">
    你是个男生
  </div>
  <div v-else-if="gender==1">
    你是个女生
  </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const pTitle="vbind"
var gender=ref()

</script>

