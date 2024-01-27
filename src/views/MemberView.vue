<template>
  <h1 class="h1 text-primary">TBD 我的帳戶</h1>
  <div class="text-white">
    <h1>我的帳戶</h1>
    <button type="button" class="btn btn-outline-danger" @click="handleLogout">登出</button>

    <pre v-if="error">{{ error }}</pre>
    <pre>{{ user }}</pre>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import useUser from '@/composables/apiservice/useUser'
import useModalStore from '@/stores/useModalStore'
import { useLoginDataStore } from '@/stores/loginData'
import { useRouter } from 'vue-router'

const router = useRouter()

const { isLoading, user, getUserInfo, error } = useUser()
const modalStore = useModalStore()
modalStore.toggleProgressModal(isLoading, '資料讀取中')

const loginDataStore = useLoginDataStore()

function handleLogout() {
  loginDataStore.clear()
  router.replace('/login')
}

onMounted(() => {
  getUserInfo()
})
</script>
