<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderView from '../views/HeaderView.vue'
import FooterView from '../views/FooterView.vue'
</script>

<template>
  <HeaderView />
  <RouterView />
  <FooterView />
</template>
