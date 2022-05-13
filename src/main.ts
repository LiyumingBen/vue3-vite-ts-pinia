/*
 * @Author: LYM
 * @Date: 2022-05-12 08:53:30
 * @LastEditors: LYM
 * @LastEditTime: 2022-05-12 09:02:02
 * @Description: Please set Description
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(router)

app.use(createPinia())

app.mount('#app')
