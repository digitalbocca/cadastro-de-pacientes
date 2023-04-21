import { createApp } from 'vue'
import router from '@/router'
import AppComponent from '@/components/app'
import '@/sass/styles.sass'

const app = createApp(AppComponent)

app.use(router)

app.mount('#app')
