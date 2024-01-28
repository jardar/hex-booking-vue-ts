import { defineStore } from 'pinia'

import InfoModalWindow from '@/components/modals/InfoModalWindow.vue'
import LoadingDlg from '@/components/modals/LoadingDlg.vue'
import AlertDlg from '@/components/modals/AlertDlg.vue'
import ForgetPassDlg from '@/components/modals/ForgetPassDlg.vue'
import { watch, type Ref, ref } from 'vue'
import MenuWindow from '@/components/modals/MenuWindow.vue'
import type { VueComponent } from '@/types/vueComponent'

interface ModalProps {
  component: null | VueComponent
  props?: object
  callback?: (payload: any) => void
}

const basicState = { component: null, callback: () => {} }

export const useDlgStore = defineStore('dlgStore', () => {
  const modalState = ref<ModalProps>(basicState)

  function emitPayload(payload: any) {
    // Get the callback from our state
    const { callback } = modalState.value
    if (callback) callback(payload)
  }

  function openModal(payload: ModalProps) {
    // Get props and component from payload passed to function
    const { props, component, callback } = payload
    // Get the body element
    const body = document.body

    // If its there, prevent scroll from happening
    if (body) body.style.overflow = 'hidden'
    // Assign them to our state
    modalState.value = { component, props: props || {}, callback: callback }
  }

  function closeModal() {
    // Reset our state
    modalState.value = basicState
    // Get the body element
    const body = document.body
    // If its there, reset overflow style
    if (body) body.style.overflow = 'auto'
  }

  // 有按鈕的訊息框 sample
  function openInfoModal(info: string, callback: (payload: any) => void) {
    openModal({ component: InfoModalWindow, props: { text: info }, callback: callback })
  }
  // 進度條
  function openProgressModal(title: string) {
    openModal({ component: LoadingDlg, props: { title: title } })
  }
  // Alert 有按鈕
  function openAlertModal(title: string, callback: (payload: any) => void) {
    openModal({ component: AlertDlg, props: { title: title }, callback: callback })
  }

  function openForgetPassModal(title: string, callback: (payload: any) => void) {
    openModal({ component: ForgetPassDlg, props: { title: title }, callback: callback })
  }
  function openMenuWindow(callback: (payload: any) => void) {
    openModal({ component: MenuWindow, callback: callback })
  }
  function toggleProgressModal(flag: Ref<boolean>, title: string) {
    watch(flag, (newVal) => {
      if (newVal) {
        openProgressModal(title)
      } else {
        closeModal()
      }
    })
  }

  return {
    modalState,
    //action
    emitPayload,
    closeModal,
    openInfoModal,
    openAlertModal,
    openForgetPassModal,
    openMenuWindow,
    toggleProgressModal
  }
})
