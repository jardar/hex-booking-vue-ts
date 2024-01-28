<template>
  <div class="inner text-center">
    <img class="mb-3" src="../../assets/images/logo_goldx1.png" alt="logo" />
    <h5 class="h5 fw-bold mb-5">{{ title }}</h5>
    <button @click="handleClick" type="button" class="btn btn-warning w-100">確定</button>
  </div>
</template>

<script setup lang="ts">
import { useDlgStore } from '../../stores/useDlgStore'
defineProps<{ title: string }>()

const store = useDlgStore()
function handleClick() {
  // Pass payload to callback
  store.emitPayload({ message: 'OK' })
  store.closeModal()
}
</script>

<style scoped>
.inner {
  background-color: white;
  padding: 2rem 5rem;
  border-radius: 1rem;
  position: relative;
}
</style>
