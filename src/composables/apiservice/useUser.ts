import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import type { SignUpReq, SignUpRes, LoginReq, LoginRes, CheckRes } from '../../types/user'

import { postData, getData } from '../../utils/fetchUtil'

interface APIError {
  lastErr: Error | null
}
interface Reply<T> {
  ok: boolean
  msg: string
  data: T | null
}

const BaseURL = 'https://freyia.onrender.com/api/v1/user'

export default function useUser() {
  const user = ref<LoginRes | null>(null)
  const isLoading = ref(false)
  const error: Ref<APIError> = ref({ lastErr: null })

  const signup = async (payload: SignUpReq) => {
    isLoading.value = true

    try {
      user.value = await postData(`${BaseURL}/signup`, payload)
      error.value.lastErr = null
      return {
        ok: true,
        msg: 'success',
        data: user.value
      } as Reply<SignUpRes>
    } catch (err: any) {
      // console.log('login=', err.message)
      error.value.lastErr = err as Error
      return {
        ok: false,
        msg: err.message,
        data: null
      } as Reply<SignUpRes>
    } finally {
      isLoading.value = false
    }
  }
  const login = async (payload: LoginReq) => {
    isLoading.value = true
    error.value.lastErr = null
    try {
      user.value = await postData(`${BaseURL}/login`, payload)
      // TODO: check status

      return {
        ok: true,
        msg: 'success',
        data: user.value
      } as Reply<LoginRes>
    } catch (err: any) {
      // console.log('login=', err.message)
      error.value.lastErr = err as Error
      return {
        ok: false,
        msg: err.message,
        data: null
      } as Reply<LoginRes>
    } finally {
      isLoading.value = false
    }
  }

  const checkLogin = async () => {
    isLoading.value = true

    try {
      user.value = await getData(`${BaseURL}/check`, true)
      error.value.lastErr = null
      return {
        ok: user.value?.status || false,
        msg: 'success',
        data: user.value
      } as Reply<CheckRes>
    } catch (err: any) {
      // console.log('login=', err.message)
      error.value.lastErr = err as Error
      return {
        ok: false,
        msg: err.message,
        data: null
      } as Reply<CheckRes>
    } finally {
      isLoading.value = false
    }
  }

  const getUserInfo = async () => {
    isLoading.value = true
    error.value.lastErr = null
    try {
      user.value = await getData(`${BaseURL}/`, true)
      if (user.value?.status) {
        return {
          ok: true,
          msg: 'success',
          data: user.value
        } as Reply<LoginRes>
      } else {
        throw new Error('user not login')
      }
    } catch (err: any) {
      error.value.lastErr = err as Error
      return {
        ok: false,
        msg: err.message,
        data: null
      } as Reply<CheckRes>
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    user,
    signup,
    login,
    checkLogin,
    getUserInfo,
    // 用不用 computed 的差別在哪？
    error: computed(() => error.value)
    // error
  }
}
