<template>
  <div class="inner text-center">
    <div class="spinners mb-5">
      <div class="spinner-grow text-primary me-4" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-grow text-primary-60 me-4" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-grow text-primary-40" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <img class="mb-3" src="../../assets/images/logo_goldx1.png" alt="logo" />
    <h5 class="h5 fw-bold">{{ title }}</h5>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<style scoped>
.inner {
  background-color: white;
  padding: 2rem 5rem;
  border-radius: 1rem;

  position: relative;
}
</style>
