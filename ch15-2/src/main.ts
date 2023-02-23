import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import CardVue from './components/Card.vue'
// import * as vues from './components/vues'
// createApp(App).mount('#app')
export const app=createApp(App)
app.component('CardVue',CardVue)
app.mount('#app')
