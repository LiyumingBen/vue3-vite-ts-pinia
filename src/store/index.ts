/*
 * @Author: LYM
 * @Date: 2022-04-12 11:12:09
 * @LastEditors: LYM
 * @LastEditTime: 2022-04-12 16:17:42
 * @Description: 公共数据仓库
 */

import { defineStore } from 'pinia'

export const useIndxStore = defineStore({
  id: 'index',
  state: () => ({
    name: '超级管理员',
  }),
  getters: {
    nameLength: (state) => state.name.length,
  },
  actions: {
    async insertPost(data: string) {
      // 可以做异步
      // await doAjaxRequest(data);
      this.name = data
    },
  },
})
