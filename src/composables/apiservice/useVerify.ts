import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import { ROOM_BOOKING_API, emptyAPIError, newErrorReply, newMaySuccessReply } from '.'
import type { APIError, EmailRes } from '@/types/api'

import { postData } from '@/utils/fetchUtil'

const BaseURL = `${ROOM_BOOKING_API}/verify`

export default function useVerify() {
  const isLoading = ref(false)
  const error: Ref<APIError> = ref(emptyAPIError)

  /**
   * 檢查 email 是否存在？若存在則發送驗證碼
   * @param payload email
   */
  const verifyEmailAndSendCode = async (email: string) => {
    isLoading.value = true
    error.value = emptyAPIError
    try {
      const reply = await postData(`${BaseURL}/email`, { email: email })

      if (reply.status && reply.result.isEmailExists) {
        const reply2 = await postData(`${BaseURL}/generateEmailCode`, { email: email })
        return newMaySuccessReply<EmailRes>(reply2)
      } else {
        throw new Error('email not exists')
      }
    } catch (err: any) {
      error.value = err
      return newErrorReply<EmailRes>(err)
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
