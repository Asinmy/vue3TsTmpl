import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import hyRequest from './service'

import './assets/css'

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

hyRequest
  .get<DataType>({
    url: '/home/multidata'
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })
