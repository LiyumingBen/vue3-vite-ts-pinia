/*
 * @Author: LYM
 * @Date: 2022-04-12 11:12:09
 * @LastEditors: LYM
 * @LastEditTime: 2022-04-12 20:04:01
 * @Description: 路由配置
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '@/views/login/Login.vue'
import Home from '@/views/home/Home.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
