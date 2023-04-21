import { createApp } from 'vue'
import '@/sass/styles.sass'

import AppComponent from '@/components/app'

const app = createApp(AppComponent)

app.mount('#app')
