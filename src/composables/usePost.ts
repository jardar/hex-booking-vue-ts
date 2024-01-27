import { ref, computed } from 'vue'
import type { Ref } from 'vue'

import type { ErrorRecord } from '../types/errorRecord'
import { errorsFactory } from '../types/errorRecord'
const BaseURL = 'https://jsonplaceholder.typicode.com'

function status(res: Response) {
  //   console.log('status res ok=', res.ok)
  if (res.status >= 200 && res.status < 300) {
    return Promise.resolve(res)
  } else {
    return Promise.reject(new Error(`${res.status} ${res.statusText}`))
  }
}

export default function usePost(resource: string = '') {
  const posts = ref([])
  const post = ref(null)
  const isFetching = ref(false)
  const error: Ref<ErrorRecord> = ref(errorsFactory())

  const fetchAll = async () => {
    isFetching.value = true
    try {
      const res = await fetch(`${BaseURL}/${resource}`)
      const resOk = await status(res)
      posts.value = await resOk.json()
      error.value.loadAll = null
    } catch (err: any) {
      console.log('fetch all=', err.message)
      error.value.loadAll = err as Error
    } finally {
      console.log('fetchAll finally')
      isFetching.value = false
    }
  }

  const fetchOne = async (id: number) => {
    isFetching.value = true
    try {
      const res = await fetch(`${BaseURL}/${resource}/${id}`)
      const resOk = await status(res)
      //   if (!res.ok) {
      //     console.log('fetchOne res=', res)
      //     throw new Error(`${res.status} ${res.statusText}`)
      //   }
      post.value = await resOk.json()
      error.value.loadOne = null
    } catch (err: any) {
      console.log('fetchOne err=', err.message)
      error.value.loadOne = err as Error
    } finally {
      console.log('fetchOne finally')
      isFetching.value = false
    }
  }

  return {
    isFetching,
    posts,
    fetchAll,
    post,
    fetchOne,
    // 用不用 computed 的差別在哪？
    error: computed(() => error.value)
    // error
  }
}
