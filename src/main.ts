import './assets/scss/all.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
import { localize } from '@vee-validate/i18n'
import { required, email, min, confirmed } from '@vee-validate/rules'

import zh_TW from './assets/zh_TW.json'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// VeeValidate
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)
// 規則
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('confirmed', confirmed)
defineRule('phonetw', (value: string) => {
  // Field is empty, should pass
  if (!value || !value.length) {
    return true
  }
  const phoneNumber = /^(09)[0-9]{8}$/
  return phoneNumber.test(value) ? true : '需要正確的電話號碼'
})
//加入中文語系
// 讀取外部的資源
localize('zh_TW', zh_TW)
// Activate the locale
configure({
  generateMessage: localize('zh_TW'),
  validateOnInput: true // 調整為：輸入文字時，就立即進行驗證
})

app.mount('#app')

// enable bootstrap js
import 'bootstrap/dist/js/bootstrap.js'
