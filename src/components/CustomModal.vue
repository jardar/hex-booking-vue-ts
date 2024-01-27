<template>
  <div v-if="visible" class="dialog-overlay">
    <div class="dialog">
      <h1>{{ title }}</h1>
      <p>{{ message }}</p>
      <button @click="confirm">Confirm</button>
      <button @click="cancel">Cancel</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ['title', 'message'],
  data() {
    return {
      visible: false
    }
  },
  methods: {
    open() {
      this.visible = true
    },
    close() {
      this.visible = false
    },
    confirm() {
      this.close()
      this.$emit('dialog-result', { action: 'confirm' })
    },
    cancel() {
      this.close()
      this.$emit('dialog-result', { action: 'cancel' })
    }
  }
}
</script>

<style>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog {
  background-color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 50%;
}
</style>
