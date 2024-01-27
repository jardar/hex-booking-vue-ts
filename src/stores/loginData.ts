import { computed } from 'vue'
import { defineStore } from 'pinia'
import type { UserStorageInfo } from '@/types/user'
import { useStorage } from '@vueuse/core'

const emptyUserStorageInfo = {
  username: '',
  email: '',
  token: ''
}
const store = useStorage('user', emptyUserStorageInfo)

export const useLoginDataStore = defineStore('loginData', () => {
  const loginUser = computed(() => store.value.username) // getters
  const loginEmail = computed(() => store.value.email) // getters
  const loginToken = computed(() => store.value.token) // getters

  function save(data: UserStorageInfo) {
    store.value.username = data.username || ''
    store.value.email = data.email || ''
    store.value.token = data.token || ''
  }
  function clear() {
    store.value = emptyUserStorageInfo
  }

  return { loginUser, loginEmail, loginToken, save, clear }
})
