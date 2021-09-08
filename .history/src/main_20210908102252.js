import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'

//导入样式
//把样式模块当做模块加载
//将来编译/打包的时候,会把当前的样式模块,注入到 index.html
import './assets/CSS/bootstrap.css'

const app = createApp(App)
// app.use(store)
app.use(router)
app.mount('#app')
