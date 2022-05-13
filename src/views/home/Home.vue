<!--
 * @Author: LYM
 * @Date: 2022-04-12 20:01:54
 * @LastEditors: LYM
 * @LastEditTime: 2022-05-13 20:49:44
 * @Description: Home
-->
<template>
  <div class="home-wrap">home-{{ home }}-pinia</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const home = ref("page")
</script>

<style lang="scss" scoped>
.home-wrap {
  color: $font-color;
}
</style>
