<script setup lang="ts">
import { computed, ref } from 'vue'
import useUser from '@/composables/apiservice/useUser'
import useVerify from '@/composables/apiservice/useVerify'
import useModalStore from '@/stores/useModalStore'
import { useLoginDataStore } from '@/stores/loginData'
import { useRoute, useRouter } from 'vue-router'

const loginDataStore = useLoginDataStore()
const { save: saveLoginData } = loginDataStore
// const {  } = storeToRefs(loginDataStore)

const route = useRoute()
const router = useRouter()

const { isLoading, login } = useUser()
const { isLoading: verifyLoading, verifyEmailAndSendCode } = useVerify()
const modalStore = useModalStore()
modalStore.toggleProgressModal(isLoading, '登入中')
modalStore.toggleProgressModal(verifyLoading, '驗證電子郵件中')
// 記住帳號：下次自動填入
const formEmail = ref(localStorage.getItem('remember') || '')
const formPassword = ref('')
const inputEmpty = computed(() => {
  return formEmail.value === '' || formPassword.value === ''
})

const onSubmit = (values: any) => {
  // 記住帳號：記錄登入帳號，下次自動填入。不記密碼。
  if (values.remember) {
    //note: remember is a string or undefined
    localStorage.setItem('remember', values.email)
  } else {
    localStorage.removeItem('remember')
  }

  login({
    email: values.email,
    password: values.password
  }).then((res) => {
    if (res.ok) {
      if (!Array.isArray(res.data)) {
        saveLoginData({
          username: res.data?.result.name || '',
          email: res.data?.result.email || '',
          token: res.data?.token || ''
        })

        const nextUrl = (route.query.redirect || '/') as string
        router.replace({ path: nextUrl, query: route.query })
      }
    } else {
      modalStore.openAlertModal('錯誤：' + res.msg, () => {})
    }
  })
}

const handleForget = () => {
  modalStore.openForgetPassModal('請聯絡客服人員', (payload) => {
    // check email exist
    // send reset code via email
    verifyEmailAndSendCode(payload.email).then((res) => {
      if (res.ok) {
        modalStore.openAlertModal('密碼回復信件已寄出，請依信件內容重置密碼', () => {})
      } else {
        modalStore.openAlertModal('錯誤：' + res.msg, () => {})
      }
    })
  })
}
</script>

<template>
  <div class="v-100 bg-neutral-bg">
    <header class="login__header bg-neutral-bg">
      <a href="/">
        <img class="login__logo" src="../assets/images/desktop/logo.png" alt="logo" />
      </a>
    </header>
    <main class="login container-fluid gx-0 bg-neutral-bg position-relative">
      <img
        src="../assets/images/desktop/line2.png"
        alt="Line2"
        height="54"
        class="login__line2 img-fluid d-lg-none"
      />
      <img
        src="../assets/images/desktop/line3.png"
        alt="Line3"
        height="187"
        class="login__line3 position-absolute top-0 end-0 d-none d-lg-block"
      />

      <div class="row gx-0 position-relative z-1">
        <div class="col col-lg-6 d-none d-lg-block">
          <img class="img-fluid" src="../assets/images/desktop/register.png" alt="banner" />
        </div>
        <div class="col col-lg-6 d-flex justify-content-center align-items-center">
          <div class="">
            <p class="text-primary fs-0">享樂酒店，誠摯歡迎</p>
            <h2 class="h1 text-white">立即開始旅程</h2>

            <!-- form -->
            <VForm
              novalidate
              v-slot="{ errors }"
              class="login__form text-white fs-0"
              @submit="onSubmit"
            >
              <div class="mb-3">
                <label for="email" class="form-label">電子信箱 必填</label>
                <VField
                  v-model="formEmail"
                  id="email"
                  name="email"
                  label="電子信箱"
                  type="email"
                  class="form-control"
                  :class="{ 'is-invalid': errors['email'] }"
                  placeholder="請輸入 Email"
                  rules="email|required"
                />
                <error-message name="email" class="invalid-feedback"></error-message>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">密碼 必填</label>
                <VField
                  v-model="formPassword"
                  id="password"
                  name="password"
                  type="password"
                  label="密碼"
                  class="form-control"
                  :class="{ 'is-invalid': errors['password'] }"
                  rules="required|min:8"
                />
                <error-message name="password" class="invalid-feedback"></error-message>
              </div>
              <div class="d-flex justify-content-between">
                <div class="mb-3 form-check">
                  <VField
                    id="remember"
                    name="remember"
                    type="checkbox"
                    class="form-check-input"
                    value="on"
                  />
                  <label class="form-check-label text-white fs-0" for="remember">記住帳號</label>
                </div>
                <a
                  @click.prevent="handleForget"
                  href="#"
                  class="text-primary fs-0 text-decoration-none"
                  >忘記密碼？</a
                >
              </div>
              <button
                :disabled="Object.keys(errors).length > 0 || inputEmpty"
                type="submit"
                class="btn btn-primary w-100"
              >
                會員登入
              </button>
            </VForm>
            <p class="text-white fs-0">
              沒有會員嗎？
              <a href="/register" class="text-primary fs-0 text-decoration-none">前往註冊</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
