import type { APIError, Reply } from '@/types/api'

export const ROOM_BOOKING_API = 'https://freyia.onrender.com/api/v1' //https://freyia.onrender.com/swagger/#/
export const emptyAPIError: APIError = {
  name: '',
  message: ''
}
// interface Reply<T> {
//   ok: boolean
//   msg: string
//   data: T | null
// }
export function newMaySuccessReply<T extends { status: boolean; message?: string }>(
  reply: T
): Reply<T> {
  if (!reply.status) {
    throw new Error(reply.message)
  }
  return {
    ok: true,
    msg: 'success',
    data: reply
  }
}
export function newErrorReply<T>(err: Error): Reply<T> {
  return {
    ok: false,
    msg: err.message || 'error occurred',
    data: null
  }
}
