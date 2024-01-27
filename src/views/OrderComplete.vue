<script setup lang="ts">
import CardDone from '@/components/CardDone.vue'
</script>

<template>
  <h1 class="h1 text-primary">TBD 訂單成功</h1>
  <div class="container text-white">
    <div class="row">
      <div class="col-lg-7">
        <div class="d-flex align-items-center mb-5">
          <img
            class="me-5"
            src="../assets/images/frame-success.png"
            alt="success"
            width="40"
            height="40"
          />

          <p class="h3 fw-bold">恭喜，Jessica！<br />您已預訂成功</p>
        </div>
        <p>我們已發送訂房資訊及詳細內容至你的電子信箱，入住時需向櫃檯人員出示訂房人證件。</p>
        <div class="col-lg-3 py-5 border-top border-bottom border-neutral-40">
          <p class="mb-4">立即查看你的訂單紀錄</p>
          <button class="btn btn-primary w-100">查看訂單</button>
        </div>
        <div>
          <h5 class="h5 fw-bold mb-4">訂房人資訊</h5>
          <div class="mb-4">
            <p class="text-neutal-40 mb-2">姓名</p>
            <p>Jessica Ｗang</p>
          </div>
          <div class="mb-4">
            <p class="text-neutal-40 mb-2">手機號碼</p>
            <p>+886 912 345 678</p>
          </div>
          <div class="mb-4">
            <p class="text-neutal-40 mb-2">電子信箱</p>
            <p>jessica@sample.com</p>
          </div>
        </div>
      </div>
      <div class="col-lg-5">
        <CardDone />
      </div>
    </div>
  </div>
</template>
