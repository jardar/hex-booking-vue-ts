<script setup lang="ts">
import { defineEmits, ref } from 'vue'
import { useSignUpStore } from '@/stores/signUpData'
import { storeToRefs } from 'pinia'

const emit = defineEmits(['next', 'goto'])

const signUpStore = useSignUpStore()

const { signUpInfo } = storeToRefs(signUpStore)

// 在未註冊完成前回到這頁時，除了密碼之外，回復其它已填寫資料
const formEmail = ref(signUpInfo.value?.email || 'bear@example.com')

const onSubmit = (values: any) => {
  // console.log(values)
  // save values to pinia
  signUpInfo.value.email = values.email
  signUpInfo.value.password = values.password
  // switch to next page
  emit('next', 'step1')
}
</script>

<template>
  <!-- main -->
  <main class="login container-fluid gx-0 bg-neutral-bg position-relative v-100">
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
          <h2 class="h1 text-white mb-3">立即註冊</h2>

          <!-- process bar -->
          <div class="d-flex justify-content-between align-items-center">
            <div class="text-center">
              <button
                @click="emit('goto', 'step1')"
                type="button"
                class="btn btn-sm btn-primary rounded-pill"
                style="width: 2rem; height: 2rem"
              >
                1
              </button>
              <p class="text-white fs-0 mb-0">輸入信箱及密碼</p>
            </div>
            <div class="progress" style="height: 1px">
              <div
                class="progress-bar"
                role="progressbar"
                aria-label="Progress"
                style="width: 188px"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div class="text-center">
              <button
                @click="emit('goto', 'step2')"
                type="button"
                class="btn btn-sm btn-outline-neutral-60 rounded-pill"
                style="width: 2rem; height: 2rem"
              >
                2
              </button>
              <p class="text-neutral-60 fs-0 mb-0">填寫基本資料</p>
            </div>
          </div>

          <VForm
            novalidate
            v-slot="{ errors }"
            class="login__form text-white fs-0"
            @submit="onSubmit"
          >
            <div class="mb-3">
              <label for="email" class="form-label">電子信箱 必填</label>
              <VField
                id="email"
                name="email"
                label="電子信箱"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email"
                rules="email|required"
                v-model="formEmail"
              />
              <error-message name="email" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">密碼 必填</label>
              <VField
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
            <div class="mb-3">
              <label for="confirmation" class="form-label">確認密碼 必填</label>
              <VField
                id="confirmation"
                name="confirmation"
                type="password"
                class="form-control"
                :class="{ 'is-invalid': errors['confirmation'] }"
                label="確認密碼"
                rules="confirmed:@password"
              />
              <error-message name="confirmation" class="invalid-feedback"></error-message>
            </div>

            <button
              :disabled="Object.keys(errors).length > 0"
              type="submit"
              class="btn btn-neutral-40 w-100"
            >
              下一步
            </button>
          </VForm>

          <p class="text-white fs-0">
            已經有會員了嗎？
            <a href="/login" class="text-primary fs-0 text-decoration-none">立即登入</a>
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
