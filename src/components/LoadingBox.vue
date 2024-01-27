<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { Modal } from 'bootstrap'

const props = defineProps({
  title: {
    type: String,
    default: '請稍候...'
  },
  confirm: {
    type: Boolean,
    default: false
  },
  show: {
    type: Boolean,
    default: false
  }
})

const myModalRef = ref<HTMLElement | null>(null) // ref to modal html element
const myModalObj = ref<Modal | null>(null) // ref to modal object created on onmounted()

// create modal on mounted
onMounted(() => {
  const aModal = new Modal(myModalRef.value!)
  myModalObj.value = aModal
  myModalObj.value.hide()
  console.log('modal created')
})

// show modal when show prop is true
watch(
  () => props.show,
  () => {
    console.log('props changed=', props.show, 'myModalObj.value=', myModalObj.value)
    if (myModalObj.value) {
      if (props.show) {
        console.log('modal show')
        myModalObj.value.show()
      } else {
        console.log('modal hide')
        myModalObj.value.hide()
      }
    }
  }
  //   { immediate: true }
)
</script>

<template>
  <div class="modal fade" tabindex="-1" ref="myModalRef" data-bs-backdrop="static">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h6>{{ title }}</h6>
        </div>
        <div class="modal-body d-flex justify-content-center">
          <div v-if="!confirm" class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div v-if="confirm" class="spinner-border text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div v-if="confirm" class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">確定</button>
        </div>
      </div>
    </div>
  </div>
</template>
