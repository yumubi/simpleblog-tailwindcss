import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import router from "@/router/index.js";
import {createPinia} from "pinia";
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

const pinia = createPinia();

const app = createApp(App)
app.use(router)
    .use(pinia)
    .use(mavonEditor)

app.mount('#app');
