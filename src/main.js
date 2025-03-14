import '@/assets/nullstyle.css'
import '@/assets/base.scss'
import '@/assets/utils.scss'
import '@/assets/vendors/animate-css.scss'
import '@/assets/vendors/vue-toastifications.scss'
import 'vue-toastification/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { plugin, defaultConfig } from '@formkit/vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(autoAnimatePlugin)
app.use(plugin, defaultConfig())
app.use(Toast)

app.mount('#app')
