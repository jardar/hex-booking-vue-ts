<script setup lang="ts">
import LoadingBox from '@/components/LoadingBox.vue'
import usePost from '@/composables/usePost'
import useUser from '@/composables/apiservice/useUser'

import { onMounted, ref, watch } from 'vue'
// Import our inner modal component

// const { error, isFetching, posts, fetchAll, post, fetchOne } = usePost('posts')
// const {
//   isFetching: isFetching2,
//   posts: posts2,
//   fetchAll: fetchAll2,
//   post: user,
//   fetchOne: fetchOne2
// } = usePost('users')

const { isLoading, error, user, login } = useUser()
onMounted(() => {
  // fetchAll()
  // fetchAll2()
  // //
  // ;(async () => {
  //   await fetchOne(20)
  //   if (post.value) {
  //     await fetchOne2(post.value.userId)
  //   }
  // })()
  // login({
  //   email: 'bear@example.com',
  //   password: 'bear1234'
  // })
})

function handleLogin() {
  login({
    email: 'bear@example.com',
    password: 'bear1234'
  }).then((res) => {
    if (res.ok) {
      console.log('res=', res.data)
    } else {
      console.log('err=', res.msg)
    }
  })
}

// Import store
import { useDlgStore } from '@/stores/useDlgStore'

import router from '@/router'

// Initialize store
const store = useDlgStore()

store.openMenuWindow((payload) => {
  console.log('payload=', payload)
  router.push('/' + payload.action)
})

// Make a function that opens modal with our inner component
function openInfoModal() {
  // store.openProgressModal('正在處理你的預訂')
  store.openAlertModal('錯誤，請重試', (payload) => {
    console.log('payload=', payload)
  })
  // store.openInfoModal('Gotcha!')
}

// watch(
//   isLoading,
//   (newValA) => {
//     // console.log('newVal=', newValA, newValB)
//     if (newValA) {
//       openInfoModal()
//     } else {
//       store.closeModal()
//     }
//   }
//   // { immediate: true }
// )
</script>

<template>
  <div>
    <button @click="handleLogin">Login</button>
    <button @click="openInfoModal">Open info modal</button>
    <p>Error: {{ error }}</p>
    <p>isFetching = {{ isLoading }}</p>
    <!-- <p>isFetching2 = {{ isFetching2 }}</p> -->
    <h2>Post</h2>
    <!-- <pre>
      {{ JSON.stringify(post, null, 2) }}
    </pre> -->
    <h2>User</h2>
    <pre>
      {{ JSON.stringify(user, null, 2) }}
    </pre>
    <h2>All Posts 2</h2>
    <!-- <pre>
      {{ posts2.length }}
    </pre>
    <h2>All Posts</h2>
    <pre>
      {{ posts.length }}
    </pre> -->

    <!-- <LoadingBox title="登入中...請稍候" :show="isFetching || isFetching2" /> -->
    <!-- <LoadingBox title="錯誤...請重試" :show="!!error.loadOne" confirm /> -->
  </div>
</template>
