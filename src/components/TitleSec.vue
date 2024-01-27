<script setup lang="ts">
defineProps({
  title: String,
  classStr: {
    type: String,
    default: 'h5'
  }
})
</script>

<template>
  <div class="d-flex align-items-center">
    <div class="dline"></div>
    <h5 class="mb-0" :class="classStr">{{ title }}</h5>
  </div>
</template>

<style scoped></style>
