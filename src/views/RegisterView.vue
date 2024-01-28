<template>
  <HeaderView />
  <Transition name="modal-fade">
    <div v-if="currentView" class="modal-wrapper" tabindex="-1">
      <!-- avoid [Vue warn]: Vue received a Component that was made a reactive object. -->
      <!-- :is use decomposite -->
      <component :is="{ ...currentView }" @next="handleNext" @goto="handleGoto" />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { VueComponent } from '@/types/vueComponent'
import { useRouter } from 'vue-router'

import HeaderView from './HeaderView.vue'
import Register1View from './Register1View.vue'
import Register2View from './Register2View.vue'

import { useSignUpStore } from '@/stores/signUpData'
import { storeToRefs } from 'pinia'
import useUser from '@/composables/apiservice/useUser'
import { useDlgStore } from '@/stores/useDlgStore'

import { useLoginDataStore } from '@/stores/loginData'

const loginDataStore = useLoginDataStore()
const { save: saveLoginData } = loginDataStore

const router = useRouter()

const { isLoading, signup } = useUser()
const modalStore = useDlgStore()
modalStore.toggleProgressModal(isLoading, '註冊中')

const signUpStore = useSignUpStore()
const { empty } = signUpStore
const { signUpInfo } = storeToRefs(signUpStore)

const currentView = ref<VueComponent>(Register1View)

function handleNext(payload: string) {
  if (payload === 'step1') {
    currentView.value = Register2View
  }
  if (payload === 'step2') {
    // get store data
    // console.log(signUpInfo.value)
    // do sign up via api
    signup({
      name: signUpInfo.value.name,
      email: signUpInfo.value.email,
      password: signUpInfo.value.password,
      phone: signUpInfo.value.phone,
      birthday: signUpInfo.value.birthday,
      address: signUpInfo.value.address
    }).then((res) => {
      if (res.ok) {
        // console.log('res=', res.data)
        // clear sign up data
        empty()
        // store token,email to local storage
        saveLoginData({
          username: res.data?.result.name || '',
          email: res.data?.result.email || '',
          token: res.data?.token || ''
        })
        // go to member page
        router.replace('/member')
      } else {
        modalStore.openAlertModal('錯誤：' + res.msg, () => {})
      }
    })
  }
}

/**
 * 跳頁
 * @param payload step1 or step2
 * TODO: 在想出更好的狀態控管前，暫時不用
 */
function handleGoto(payload: string) {
  if (payload === 'step1') {
    // currentView.value = Register1View
    return
  }
  if (payload === 'step2') {
    // currentView.value = Register2View
    return
  }
}
</script>
