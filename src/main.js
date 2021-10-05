import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
if (!localStorage.tasks) {
  localStorage.tasks = JSON.stringify([])
}
createApp(App).use(store).mount('#app')
