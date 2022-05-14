<!--
 * @Author: LYM
 * @Date: 2022-04-12 11:12:09
 * @LastEditors: LYM
 * @LastEditTime: 2022-05-14 10:49:46
 * @Description: Login
-->
<template>
  <div class="login-wrap">
    <div class="login-user">用户名:{{ indexStore.name }}</div>
    <div class="login-btn">
      <n-button dashed type="primary" @click="updateName">身份切换</n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useIndxStore } from '@/store'
import { NButton } from 'naive-ui'
import { ref } from 'vue'

const indexStore = useIndxStore()
const userIdentity = ref<Boolean>(false)
const updateName = () => {
  userIdentity.value = !userIdentity.value
  indexStore.$patch({
    name: !userIdentity.value ? '游客模式' : '超级管理员',
  })
}
</script>

<style lang="scss" scoped>
.login-wrap {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
  .login-user {
    color: $font-color;
  }
  .login-btn {
    margin-top: 10px;
  }
}
</style>
