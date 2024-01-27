<script setup lang="ts">
//https://itnext.io/how-to-build-a-reusable-modal-component-in-vuejs-f1799ab9b3e
import useModalStore from '../../stores/useModalStore'
import { onMounted, onUnmounted } from 'vue'

const store = useModalStore()
// Make a function that will trigger on keydown
function keydownListener(event: KeyboardEvent) {
  // Assert the key is escape
  if (event.key === 'Escape') store.closeModal()
}

// Attach event listener on mount
onMounted(() => {
  document.addEventListener('keydown', keydownListener)
})

// Clean up on unmount
onUnmounted(() => {
  document.removeEventListener('keydown', keydownListener)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="store.modalState?.component"
        class="modal-wrapper"
        @click.self="store.closeModal"
        aria-modal="true"
        role="dialog"
        tabindex="-1"
      >
        <!-- avoid [Vue warn]: Vue received a Component that was made a reactive object. -->
        <!-- :is use decomposite -->
        <component :is="{ ...store.modalState?.component }" v-bind="store.modalState?.props" />
      </div>
    </Transition>
  </Teleport>
</template>
<style scoped lang="scss">
.modal-wrapper {
  position: fixed;
  left: 0;
  top: 0;

  z-index: 500;

  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);

  display: grid;
  place-items: center;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: 0.25s ease all;
}
</style>
