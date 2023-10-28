import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import Component from 'unplugin-vue-components/vite'
import RadixVueResolver from 'radix-vue/resolver'
import { fileURLToPath, URL } from "node:url";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173, // 自定义端口，默认为5173
    open: true, // 服务启动后，自动在浏览器中打开，默认是不打开的
    hmr: true, // 为开发服务启用热更新，默认是不启用热更新的
    proxy: {
      "/api/v1/": {
        // target: "http://localhost:8090/",
        target: "https://api.vvhan.com/api/",
        changeOrigin: true,
      },
    }
  },

  base: "./",


  plugins: [
    VueDevTools(),  // <-- here
    vue(),
    Component({
      dts: true,
      resolvers: [
        RadixVueResolver()

        // RadixVueResolver({
        //   prefix: '' // use the prefix option to add Prefix to the imported components
        // })
      ],
    }),
  ],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"]
  },
})
