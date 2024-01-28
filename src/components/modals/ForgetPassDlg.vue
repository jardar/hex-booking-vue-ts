<template>
  <div class="inner text-center">
    <img class="mb-2" src="../../assets/images/logo_goldx1.png" alt="logo" />
    <h6 class="h6 fw-bold mb-3">忘記密碼</h6>
    <VForm novalidate v-slot="{ errors }" class="" @submit="handleVerify">
      <div class="mb-3">
        <VField
          id="email"
          type="email"
          name="email"
          label="電子信箱"
          class="form-control"
          :class="{ 'is-invalid': errors['email'] }"
          placeholder="請輸入已註冊的電子郵件"
          rules="email|required"
        />
        <error-message name="email" class="invalid-feedback"></error-message>
      </div>
      <div class="d-flex justify-content-between w-100">
        <button @click="store.closeModal" type="button" class="btn btn-outline-black">取消</button>
        <button type="submit" class="btn btn-primary">驗證</button>
      </div>
    </VForm>
  </div>
</template>

<script setup lang="ts">
import { useDlgStore } from '../../stores/useDlgStore'
defineProps<{ title: string }>()

const store = useDlgStore()
function handleVerify(values: any) {
  // console.log(values)
  // Pass payload to callback
  store.emitPayload({ email: values.email })
  store.closeModal()
}
</script>

<style scoped>
.inner {
  background-color: white;
  padding: 1rem 5rem;
  border-radius: 1rem;
  position: relative;
}
</style>
