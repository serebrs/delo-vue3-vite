import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { defineAsyncComponent } from 'vue'

import App from './App.vue'
import router from './router'

import HintBox from "./components/utils/HintBox.vue"
import "./assets/app.css"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('HintBox', HintBox)
app.component('DialogBox', defineAsyncComponent(() => import('@/components/utils/DialogBox.vue')))

app.mount('#app')
