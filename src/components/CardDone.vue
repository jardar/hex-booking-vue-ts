<script setup lang="ts">
import RoomInfoVue from '@/components/RoomInfo.vue'
import TitleSec from '@/components/TitleSec.vue'
</script>

<template>
  <div class="card">
    <div class="card-body">
      <p class="small mb-2 text-neutral-80">預訂參考編號： HH2302183151222</p>
      <h2 class="h5 fw-bold mb-5">即將來的行程</h2>
      <img src="../assets/images/mobile/room2-1.png" class="card-img-top" alt="room" />

      <div class="border-bottom border-primary-1 py-5">
        <h6 class="card-title h6">尊爵雙人房，1 晚 住宿人數：2 位</h6>
        <TitleSec class="mb-2" title="入住：6 月 10 日星期二，15:00 可入住" classStr="fs-0" />
        <TitleSec class="mb-4" title="退房：6 月 11 日星期三，12:00 前退房" classStr="fs-0" />
        <p class="card-text">NT$ 10,000</p>
      </div>
      <div class="my-5">
        <RoomInfoVue class="bg-white" />
      </div>
    </div>
  </div>
</template>
