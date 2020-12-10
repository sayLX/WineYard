import { createApp } from 'vue'
import App from './App.vue'

import router from './router/permission'
import store from './store'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)

app
  .use(store)
  .use(router)
  .use(Antd)
  .use(ElementPlus)
  .mount('#app')
