// 管理使用者登入後相關的狀態

import type { AuthData } from '@/types/authData'
import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { computed } from 'vue'

const emptyAuthData: AuthData = {
  username: '',
  email: '',
  token: ''
}

const userStorage = useStorage('user', emptyAuthData) // save into localStorage

export const useAuthStore = defineStore('authStore', () => {
  // getters
  const loginUser = computed(() => (isLogin.value ? userStorage.value.username : '')) // getters
  const loginEmail = computed(() => (isLogin.value ? userStorage.value.email : '')) // getters
  const loginToken = computed(() => (isLogin.value ? userStorage.value.token : '')) // getters

  const isLogin = computed(() => {
    // 檢查 token 是否存在 並 檢查時間戳記是否過期
    if (!userStorage.value.token) {
      return false
    }
    // 檢查時間戳記是否過期
    // TODO: 最好是從 JWT token 的 payload 中取得時間來檢查
    const exp = getTimestampFromToken(userStorage.value.token)

    return exp - 10 * 60 > Date.now() / 1000
  })

  // actions
  const logout = () => {
    userStorage.value = emptyAuthData
  }

  const login = (data: AuthData) => {
    userStorage.value = data
  }

  return {
    loginUser,
    loginEmail,
    loginToken,
    isLogin,
    login,
    logout
  }
})

/**
 *
 * @param token JWT token
 * @returns timestamp in seconds
 */
function getTimestampFromToken(token: string): number {
  // Split the JWT string into three parts (header, payload, signature)
  const tokenParts = token.split('.')

  // Base64 decode the payload
  const payloadString = atob(tokenParts[1])

  // Parse the payload
  const payload = JSON.parse(payloadString)

  // Return the timestamp
  return payload.exp || 0 // or payload.iat, depending on what you need
}
