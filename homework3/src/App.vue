<template>
  <div>
    <h1>父组件</h1>
    <router-link to="/1">
      <button>查看组件一</button>
    </router-link>
    <router-link to="/2">
      <button>查看组件二</button>
    </router-link>
    <router-view></router-view>
    <br>
    -------------
    <!-- 下面是props传递数据和父组件监听子组件发出的数据 -->
    <br>
    <childOne :message="message" @reply="handleReply" />
    <br>
    <childTwo />
  </div>
</template>

<script setup>
import ChildOne from './components/ChildOne.vue';
import ChildTwo from './components/ChildTwo.vue';
const message="这是父组件的信息"
function handleReply(reply){
console.log('子组件传来信息',reply);
}
</script>