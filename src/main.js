import { createApp } from 'vue'
import router from '@/router'
import store from '@/stores'
import AppComponent from '@/components/app'
import '@/sass/styles.sass'

const app = createApp(AppComponent)

app.use(router)
app.use(store)

app.mount('#app')
