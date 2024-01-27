<template>
  <div class="inner text-center">
    <div class="text-end">
      <button
        @click="store.closeModal()"
        type="button"
        class="btn-close bg-white"
        aria-label="Close"
      ></button>
    </div>
    <div class="d-flex flex-column justify-content-center align-items-center gap-3 h-100">
      <button
        @click.prevent="handleClick('products')"
        type="button"
        class="btn btn-black w-100 text-white"
      >
        客房旅宿
      </button>
      <button
        v-if="!loginUser"
        @click.prevent="handleClick('login')"
        type="button"
        class="btn btn-black w-100 text-white"
      >
        會員登入
      </button>
      <button
        v-if="loginUser"
        @click.prevent="handleClick('member')"
        type="button"
        class="btn btn-black w-100 text-white"
      >
        我的帳戶
      </button>
      <button
        @click.prevent="handleClick('products')"
        type="button"
        class="btn btn-primary w-100 text-white"
      >
        立刻訂房
      </button>
      <button
        v-if="loginUser"
        @click.prevent="handleClick('logout')"
        type="button"
        class="btn btn-black w-100 text-white"
      >
        登出
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import useModalStore from '@/stores/useModalStore'
import { useLoginDataStore } from '@/stores/loginData'
import { storeToRefs } from 'pinia'

const loginDataStore = useLoginDataStore()
const { loginUser } = storeToRefs(loginDataStore)

const store = useModalStore()
function handleClick(action: string) {
  // Pass payload to callback
  store.emitPayload({ action: action })
  store.closeModal()
}
</script>

<style scoped>
.inner {
  background-color: black;
  padding: 20px;
  position: relative;
  width: 100vw;
  height: 100vh;
}
</style>
