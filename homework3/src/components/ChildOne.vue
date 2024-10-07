<template>
  {{ props.message }}
  <button @click="sendData">向父组件发出数据</button>
</template>

<script setup>
import { defineProps,defineEmits } from 'vue';
const props=defineProps({
    message:{
        type:String
    }
})
const emit=defineEmits(['reply'])
function sendData(){
    emit('reply','来自子组件的信息')
}
</script>

<style>

</style>