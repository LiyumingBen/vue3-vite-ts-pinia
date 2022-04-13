/*
 * @Author: LYM
 * @Date: 2022-04-12 11:12:09
 * @LastEditors: LYM
 * @LastEditTime: 2022-04-12 16:58:23
 * @Description: Please set Description
 */
//login.ts
import http from '@/services/http'
import * as T from './types'

const loginApi: T.ILoginApi = {
  login(params) {
    return http.post('/login', params)
  },
}

export default loginApi
