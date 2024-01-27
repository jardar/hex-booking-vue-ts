<script setup lang="ts">
import TitleSec from '@/components/TitleSec.vue'

import RoomInfo from '@/components/RoomInfo.vue'
import ClientForm from '@/components/ClientForm.vue'
</script>

<template>
  <h1 class="h1 text-primary">TBD 下訂單</h1>
  <div class="container bg-primary-10">
    <!-- content -->
    <div class="d-flex align-items-center mb-5">
      <span class="material-symbols-outlined me-2"> arrow_back_ios_new </span>
      <h5 class="h5 mb-0">確認訂房資訊</h5>
    </div>
    <div class="container pb-5 bg-primary-10">
      <div class="row">
        <!-- 訂房資訊 -->
        <div class="col-lg-7">
          <h6 class="h6 mb-4">訂房資訊</h6>
          <div class="d-flex justify-content-between align-items-center mb-4">
            <div>
              <TitleSec title="選擇房型" class="mb-3" classStr="fs-0" />
              <p>尊爵雙人房</p>
            </div>
            <a href="#">編輯</a>
          </div>

          <div class="d-flex justify-content-between align-items-center mb-4">
            <div>
              <TitleSec title="房客人數" class="mb-3" classStr="fs-0" />
              <p>2 人</p>
            </div>
            <a href="#">編輯</a>
          </div>
          <!-- 分隔 -->
          <div class="border-bottom border-2 border-primary mb-5"></div>

          <!-- 訂房人資訊 -->
          <ClientForm class="mb-4" />
          <!-- 分隔 -->
          <div class="border-bottom border-2 border-primary mb-5"></div>
          <!-- 房間資訊 -->
          <RoomInfo classStr="fs-0" />
        </div>
        <!-- room card -->
        <div class="col-lg-5 align-self-start">
          <div class="container">
            <div class="card">
              <div class="card-body">
                <img
                  src="../assets/images/mobile/room2-1.png"
                  class="card-img-top mb-3"
                  alt="..."
                />
                <div class="border-bottom border-primary-2 pb-4 mb-4">
                  <h5 class="card-title h6 mb-4">價格詳情</h5>
                  <div class="d-flex justify-content-between align-items-center mb-3">
                    <p class="card-text">NT$ 10,0002 晚</p>
                    <p class="card-text">NT$ 20,000</p>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <p class="card-text">住宿折扣</p>
                    <p class="card-text text-primary">-NT$ 1,000</p>
                  </div>
                </div>
                <div class="d-flex justify-content-between align-items-center mb-4">
                  <p class="card-text">總價</p>
                  <p class="card-text text-primary">NT$ 19,000</p>
                </div>

                <a
                  href="#"
                  @click.prevent="$router.replace('/order-complete')"
                  class="btn btn-primary w-100"
                  >確認訂房</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
