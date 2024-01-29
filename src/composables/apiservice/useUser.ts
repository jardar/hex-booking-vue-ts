import { ref, computed } from 'vue'
import type { Ref } from 'vue'

import { ROOM_BOOKING_API, emptyAPIError, newErrorReply, newMaySuccessReply } from '.'
import type {
  APIError,
  UserRes,
  SignUpReq,
  SignUpRes,
  LoginReq,
  LoginRes,
  CheckRes
} from '@/types/api'

import { postData, getData } from '@/utils/fetchUtil'

const BaseURL = `${ROOM_BOOKING_API}/user`

/**
 * 呼叫使用者相關 API 的 composable
 */
export default function useUser() {
  const user = ref<UserRes | null>(null)
  const isLoading = ref(false)
  const error: Ref<APIError> = ref(emptyAPIError)

  /**
   * 註冊
   * @param payload SignUpReq
   */
  const signup = async (payload: SignUpReq) => {
    isLoading.value = true
    error.value = emptyAPIError
    try {
      const reply = await postData(`${BaseURL}/signup`, payload)

      return newMaySuccessReply<SignUpRes>(reply)
    } catch (err: any) {
      // console.log('login=', err.message)
      error.value = err

      return newErrorReply<SignUpRes>(err)
    } finally {
      isLoading.value = false
    }
  }
  /**
   * 登入
   * @param payload LoginReq
   */
  const login = async (payload: LoginReq) => {
    isLoading.value = true
    error.value = emptyAPIError
    try {
      const reply = await postData(`${BaseURL}/login`, payload)

      return newMaySuccessReply<LoginRes>(reply)
    } catch (err: any) {
      // console.log('login=', err.message)
      error.value = err
      return newErrorReply<LoginRes>(err)
    } finally {
      isLoading.value = false
    }
  }
  /**
   * 從後端檢查是否登入
   */
  const checkLogin = async () => {
    isLoading.value = true
    error.value = emptyAPIError
    try {
      const reply = await getData(`${BaseURL}/check`, true)

      return newMaySuccessReply<CheckRes>(reply)
    } catch (err: any) {
      // console.log('login=', err.message)
      error.value = err
      return newErrorReply<CheckRes>(err)
    } finally {
      isLoading.value = false
    }
  }

  /**
   * 取得使用者資訊
   */
  const getUserInfo = async () => {
    isLoading.value = true
    error.value = emptyAPIError
    user.value = null
    try {
      const reply = await getData(`${BaseURL}/`, true)
      user.value = reply
      return newMaySuccessReply<UserRes>(reply)
    } catch (err: any) {
      error.value = err
      user.value = null
      return newErrorReply<UserRes>(err)
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
