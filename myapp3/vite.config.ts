import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'
 
export default defineConfig({
  plugins: [vue(), electron({
    // main: {
      // 配置 Electron 入口文件
      entry: "electron/main.ts"
    // }
  })]
})