<script setup lang="ts">
import HeaderView from './HeaderView.vue'
</script>

<template>
  <div class="banner">
    <div class="banner__bg d-flex justify-content-center align-items-center">
      <div class="banner__header">
        <HeaderView bgWhite />
      </div>
      <div class="banner__content d-flex justify-content-between align-items-center w-50">
        <div class="text-primary border-bottom border-primary pb-4">
          <h2 class="h2">享樂酒店</h2>
          <h5 class="h5">Enjoyment Luxury Hotel</h5>
        </div>
        <h1 class="h1 text-white">客房旅宿</h1>
      </div>
    </div>
  </div>
</template>
