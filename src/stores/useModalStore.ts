import { defineStore } from 'pinia'

import InfoModalWindow from '@/components/modals/InfoModalWindow.vue'
import LoadingDlg from '@/components/modals/LoadingDlg.vue'
import AlertDlg from '@/components/modals/AlertDlg.vue'
import ForgetPassDlg from '@/components/modals/ForgetPassDlg.vue'
import { watch, type Ref } from 'vue'
import MenuWindow from '@/components/modals/MenuWindow.vue'
import type { VueComponent } from '@/types/vueComponent'

export interface IModalProps {
  component: null | VueComponent
  props?: object
  callback?: (payload: any) => void
}

export interface IModalState {
  modalState: IModalProps
}

const basicState = { component: null }

export default defineStore('modal-store', {
  state: (): IModalState => ({
    modalState: basicState
  }),
  actions: {
    emitPayload(payload: any) {
      // Get the callback from our state
      const { callback } = this.modalState
      // If its there, call it with the payload
      // console.log('emitPayload', payload)
      // console.log('callback', callback)
      if (callback) callback(payload)
      // Close the modal
      // this.closeModal()
    },
    openModal(payload: IModalProps) {
      // Get props and component from payload passed to function
      const { props, component, callback } = payload
      // Get the body element
      const body = document.body

      // If its there, prevent scroll from happening
      if (body) body.style.overflow = 'hidden'
      // Assign them to our state
      this.modalState = { component, props: props || {}, callback: callback }
    },

    closeModal() {
      // Reset our state
      this.modalState = basicState
      // Get the body element
      const body = document.body
      // If its there, reset overflow style
      if (body) body.style.overflow = 'auto'
    },
    // 有按鈕的訊息框 sample
    openInfoModal(info: string, callback: (payload: any) => void) {
      this.openModal({ component: InfoModalWindow, props: { text: info }, callback: callback })
    },
    // 進度條
    openProgressModal(title: string) {
      this.openModal({ component: LoadingDlg, props: { title: title } })
    },
    // Alert 有按鈕
    openAlertModal(title: string, callback: (payload: any) => void) {
      this.openModal({ component: AlertDlg, props: { title: title }, callback: callback })
    },

    openForgetPassModal(title: string, callback: (payload: any) => void) {
      this.openModal({ component: ForgetPassDlg, props: { title: title }, callback: callback })
    },
    openMenuWindow(callback: (payload: any) => void) {
      this.openModal({ component: MenuWindow, callback: callback })
    },

    toggleProgressModal(flag: Ref<boolean>, title: string) {
      watch(flag, (newVal) => {
        if (newVal) {
          this.openProgressModal(title)
        } else {
          this.closeModal()
        }
      })
    }
  },
  getters: {}
})
