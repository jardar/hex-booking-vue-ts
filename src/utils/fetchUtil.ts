import { useAuthStore } from '@/stores/useAuth'
import { storeToRefs } from 'pinia'

const authStore = useAuthStore()
const { loginToken } = storeToRefs(authStore)

export async function postData(url = '', data = {}, auth = false) {
  return fetchData('POST', url, data, auth)
}
export async function getData(url = '', auth = false) {
  return fetchData('GET', url, {}, auth)
}

export async function fetchData(
  method: string = 'GET',
  url: string = '',
  data: object = {},
  auth: boolean = false
) {
  // Request
  const reqOption: RequestInit = {
    // method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    headers: {
      'Content-Type': 'application/json'
    }
    // body: JSON.stringify(data)
  }
  reqOption.method = method //'POST'

  if (auth) {
    const token = loginToken.value
    if (!token) {
      return Promise.reject(new Error('no token'))
    }
    reqOption.headers = {
      ...reqOption.headers,
      // Authorization: `Bearer ${localStorage.getItem('token')}`
      Authorization: `Bearer ${token}`
    }
  }
  if (method === 'POST' || method === 'PUT') {
    reqOption.body = JSON.stringify(data)
  }

  // Default options are marked with *
  const response = await fetch(url, reqOption)

  const resOk = await status(response)

  return resOk.json() // parses JSON response into native JavaScript objects
}

/**
 * check if response status code is between 200-299 inclusive.<br>
 * and make sure response content is json
 * @param res
 */
async function status(res: Response) {
  //   console.log('status res ok=', res.ok)
  // if (res.status >= 200 && res.status < 300) {
  if (!res.ok) {
    const json = await res.json()
    return Promise.reject(new Error(`${res.status} ${res.statusText} ${json.message}`))
  }
  // check if response content is json
  const contentType = res.headers.get('content-type')
  if (!contentType || !contentType!.includes('application/json')) {
    return Promise.reject(new TypeError("Oops, we haven't got JSON!"))
  }

  return Promise.resolve(res)
}
