<template>
  <div class="inner">
    <h2>This is a modal window!</h2>
    <p>{{ text }}</p>
    <ModalCloseButton class="btn__close" />
    <button type="button" class="btn btn-warning" @click="handleClick">
      Feed payload to callback
    </button>
  </div>
</template>

<script setup lang="ts">
import { useDlgStore } from '../../stores/useDlgStore'
import ModalCloseButton from './ModalCloseButton.vue'

defineProps<{ text: string }>()

const store = useDlgStore()

function handleClick() {
  // Pass payload to callback
  store.emitPayload({ message: 'Hello from modal!' })
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.inner {
  background-color: white;
  padding: 1rem;
  padding-top: 3rem;

  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  position: relative;
}

.inner > h2 {
  font-size: 3rem;
  font-weight: bold;
}

.inner > p {
  font-size: 1.8rem;
  font-weight: 300;
}

.btn__close {
  position: absolute;
  top: 3%;
  right: 2%;
  cursor: pointer;
}
</style>
