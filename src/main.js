import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import router from "@/router/index.js";
import {createPinia} from "pinia";
const pinia = createPinia();
const app = createApp(App)
app.use(router)
    .use(pinia)

app.mount('#app');
