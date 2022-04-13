/*
 * @Author: LYM
 * @Date: 2022-04-12 11:12:09
 * @LastEditors: LYM
 * @LastEditTime: 2022-04-12 20:39:03
 * @Description: vite配置
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
//@ts-ignore
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', //打包路径
  plugins: [
    vue(),
    // gzip压缩 生产环境生成 .gz 文件
    // viteCompression({
    //   verbose: true,
    //   disable: false,
    //   threshold: 10240,
    //   algorithm: 'gzip',
    //   ext: '.gz',
    // }),
  ],
  // 配置别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/index.scss";',
        charset: false, // 去掉打包警告 warning: "@charset" must be the first rule in the file
      },
    },
  },
  //启动服务配置
  server: {
    host: '0.0.0.0',
    port: 8000,
    open: true,
    https: false,
    proxy: {},
  },
  // 生产环境打包配置
  //去除 console debugger
  build: {
    assetsDir: 'static',
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'),
      output: {
        entryFileNames: `static/app.js`,
        chunkFileNames: `static/[name].js`,
        assetFileNames: `static/[name].[ext]`,
      },
    },
    cssCodeSplit: false,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})
