<script setup lang="ts">
import useModalStore from '@/stores/useModalStore'

import { useLoginDataStore } from '@/stores/loginData'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const router = useRouter()

const loginDataStore = useLoginDataStore()
const { loginUser } = storeToRefs(loginDataStore)

const store = useModalStore()

defineProps({
  bgWhite: {
    type: Boolean,
    default: false
  }
})

function showMenu() {
  store.openMenuWindow((payload) => {
    if (payload.action === 'logout') {
      handleLogout()
      return
    }
    router.push('/' + payload.action)
  })
}
function handleLogout() {
  loginDataStore.clear()
  router.replace('/login')
}
</script>
<template>
  <header
    class="d-flex justify-content-between align-items-center px-3 py-3 px-lg-5 py-lg-4"
    :style="{ 'background-color': bgWhite ? 'transparent' : 'black' }"
  >
    <a href="/">
      <img class="header__logo" src="../assets/images/desktop/logo.png" alt="logo" />
    </a>
    <ul class="header__menu d-none d-lg-flex gap-3 align-items-center">
      <li><a href="/products">客房旅宿</a></li>
      <li v-if="!loginUser"><router-link to="/login">會員登入</router-link></li>

      <li v-else class="text-white">
        <a
          href="#"
          class="d-flex align-items-center gap-1"
          @click.prevent="$router.push('/member')"
        >
          <span class="material-symbols-outlined"> account_circle </span>
          {{ loginUser }}
        </a>
      </li>
      <li v-if="loginUser"><a href="#" @click.prevent="handleLogout">登出</a></li>
      <li><router-link to="/products" class="btn btn-primary px-4">立刻訂房</router-link></li>
    </ul>
    <span class="d-lg-none material-symbols-outlined text-white p-2" @click="showMenu()">menu</span>
  </header>
</template>
