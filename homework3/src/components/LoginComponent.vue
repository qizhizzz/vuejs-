<template>
  <div>
    <h1>登录页面</h1>
    <button @click="login">登录</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router =useRouter()
function login() {
      localStorage.setItem('isLoggedIn', 'true');
      router.push('/');
    }
</script>