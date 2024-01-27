import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { SignUpReq } from '@/types/user'

const emptySignUpReq = {
  name: '',
  email: '',
  password: '',
  phone: '',
  birthday: '',
  address: {
    detail: '',
    county: '',
    city: ''
  }
}
export const useSignUpStore = defineStore('signUp', () => {
  const signUpInfo = ref<SignUpReq>({ ...emptySignUpReq })

  // const doubleCount = computed(() => count.value * 2) // getters

  function empty() {
    signUpInfo.value = { ...emptySignUpReq }
  }

  return { signUpInfo, empty }
})
