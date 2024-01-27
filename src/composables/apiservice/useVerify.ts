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

interface EmailRes {
  status: boolean
  // result: {
  //   isEmailExists: boolean
  // }
  message?: string
}

const BaseURL = 'https://freyia.onrender.com/api/v1/verify'

export default function useVerify() {
  const isLoading = ref(false)
  const error: Ref<APIError> = ref({ lastErr: null })

  const verifyEmailAndSendCode = async (payload: string) => {
    isLoading.value = true
    error.value.lastErr = null
    try {
      const reply = await postData(`${BaseURL}/email`, { email: payload })
      if (reply.status && reply.result.isEmailExists) {
        const reply2 = await postData(`${BaseURL}/generateEmailCode`, { email: payload })
        if (reply2.status) {
          return {
            ok: true,
            msg: 'success',
            data: reply2
          } as Reply<EmailRes>
        } else {
          throw new Error('fail to send reset code')
        }
      } else {
        throw new Error('email not exists')
      }
    } catch (err: any) {
      error.value.lastErr = err as Error
      return {
        ok: false,
        msg: err.message,
        data: null
      } as Reply<EmailRes>
    } finally {
      // console.log('verify email finally')
      isLoading.value = false
    }
  }

  return {
    isLoading,
    verifyEmailAndSendCode,

    // 用不用 computed 的差別在哪？
    error: computed(() => error.value)
    // error
  }
}
