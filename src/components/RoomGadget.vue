<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '標題'
  },
  icon: {
    type: String,
    default: 'size'
  }
})

const url = computed(() => {
  //../assets/images/ic_size.png
  return new URL(`../assets/images/ic_${props.icon}.png`, import.meta.url).href
})
</script>

<template>
  <!-- room gadget -->
  <div class="gadget border border-primary-40 rounded p-3 bg-white">
    <img class="mb-2" :src="url" :alt="icon" />
    <p class="fs-0 text-neutral-80 mb-0">{{ title }}</p>
  </div>
</template>
<style scoped lang="scss">
.gadget {
  width: 97px;
  height: 97px;
}
</style>
