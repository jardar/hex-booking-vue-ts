import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import { ROOM_BOOKING_API, emptyAPIError, newErrorReply, newMaySuccessReply } from '.'
import type { APIError, RoomsRes } from '@/types/api'

import { getData } from '@/utils/fetchUtil'

const BaseURL = `${ROOM_BOOKING_API}/rooms`

export default function useRoom() {
  const isLoading = ref(false)
  const error: Ref<APIError> = ref(emptyAPIError)
  const rooms = ref<RoomsRes | null>(null)

  /**
   * 取得房型列表
   * @param none
   */
  const getAllRooms = async () => {
    isLoading.value = true
    error.value = emptyAPIError
    rooms.value = null
    try {
      const reply = await getData(`${BaseURL}/`)
      rooms.value = reply
      return newMaySuccessReply<RoomsRes>(reply)
    } catch (err: any) {
      error.value = err
      rooms.value = null
      return newErrorReply<RoomsRes>(err)
    } finally {
      // console.log('verify email finally')
      isLoading.value = false
    }
  }

  /**
   * 取得房型詳細資料
   * @param none
   */
  const getOneRoom = async (roomId: string) => {
    isLoading.value = true
    error.value = emptyAPIError
    try {
      const reply = await getData(`${BaseURL}/${roomId}`)
      rooms.value = reply
      return newMaySuccessReply<RoomsRes>(reply)
    } catch (err: any) {
      error.value = err
      rooms.value = null
      return newErrorReply<RoomsRes>(err)
    } finally {
      // console.log('verify email finally')
      isLoading.value = false
    }
  }

  return {
    isLoading,
    rooms,
    getAllRooms,
    getOneRoom,
    // 用不用 computed 的差別在哪？
    error: computed(() => error.value)
    // error
  }
}
