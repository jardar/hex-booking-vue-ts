<script setup lang="ts">
import RoomGadget from './RoomGadget.vue'
defineProps({
  classStr: {
    type: String,
    default: 'h5'
  }
})
</script>

<template>
  <div class="bg-primary-10">
    <!-- room info -->
    <div class="productDetail__section container">
      <h6 class="h6 mb-4">房間資訊</h6>
      <div class="d-flex align-items-center mb-4">
        <div class="dline"></div>
        <h5 class="mb-0" :class="classStr">房型基本資訊</h5>
      </div>
      <div class="d-flex justify-content-start justify-content-lg-start gap-3 mb-5">
        <RoomGadget title="24 坪" icon="size" />
        <RoomGadget title="1 張大床" icon="bed" />
        <RoomGadget title="2-4 人" icon="person" />
      </div>
    </div>
    <div class="productDetail__section container">
      <div class="d-flex align-items-center mb-4">
        <div class="dline"></div>
        <h5 class="mb-0" :class="classStr">房間格局</h5>
      </div>
      <div>
        <div class="p-4 bg-white border border-neutral-40-1 rounded">
          <ul class="row row-cols-3 row-cols-lg-5 g-4">
            <li class="">
              <img class="me-1" src="../assets/images/ic_check.png" alt="" />
              市景
            </li>
            <li class="">
              <img class="me-1" src="../assets/images/ic_check.png" alt="" />
              獨立衛浴
            </li>
            <li class="">
              <img class="me-1" src="../assets/images/ic_check.png" alt="" />
              客廳
            </li>
            <li class="">
              <img class="me-1" src="../assets/images/ic_check.png" alt="" />
              書房
            </li>
            <li class="">
              <img class="me-1" src="../assets/images/ic_check.png" alt="" />
              樓層電梯
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="productDetail__section container">
      <div class="d-flex align-items-center mb-4">
        <div class="dline"></div>
        <h5 class="mb-0" :class="classStr">房內設備</h5>
      </div>
      <div>
        <div class="p-4 bg-white border border-neutral-40-1 rounded">
          <ul class="row row-cols-2 row-cols-lg-5 g-2 mb-2">
            <li class="">
              <img class="me-1" src="../assets/images/ic_check.png" alt="" />
              平面電視
            </li>
            <li class="">
              <img class="me-1" src="../assets/images/ic_check.png" alt="" />
              吹風機
            </li>
            <li class="">
              <img class="me-1" src="../assets/images/ic_check.png" alt="" />
              冰箱
            </li>
            <li class="">
              <img class="me-1" src="../assets/images/ic_check.png" alt="" />
              熱水壺
            </li>
            <li class="">
              <img class="me-1" src="../assets/images/ic_check.png" alt="" />
              檯燈
            </li>

            <li class="">
              <img class="me-1" src="../assets/images/ic_check.png" alt="" />
              衣櫃
            </li>
            <li class="">
              <img class="me-1" src="../assets/images/ic_check.png" alt="" />
              除濕機
            </li>

            <li class="">
              <img class="me-1" src="../assets/images/ic_check.png" alt="" />
              浴缸
            </li>
            <li class="">
              <img class="me-1" src="../assets/images/ic_check.png" alt="" />
              書桌
            </li>
            <li class="">
              <img class="me-1" src="../assets/images/ic_check.png" alt="" />
              音響
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="productDetail__section container">
      <div class="d-flex align-items-center mb-4">
        <div class="dline"></div>
        <h5 class="mb-0" :class="classStr">備品提供</h5>
      </div>
      <div>
        <div class="p-4 bg-white border border-neutral-40-1 rounded">
          <ul class="row row-cols-2 row-cols-lg-5 g-2 mb-3">
            <li class="">
              <img class="me-1" src="../assets/images/ic_check.png" alt="" />
              衞生紙
            </li>
            <li class="">
              <img class="me-1" src="../assets/images/ic_check.png" alt="" />
              拖鞋
            </li>
            <li class="">
              <img class="me-1" src="../assets/images/ic_check.png" alt="" />
              沐浴用品
            </li>
            <li class="">
              <img class="me-1" src="../assets/images/ic_check.png" alt="" />
              清潔用品
            </li>
            <li class="">
              <img class="me-1" src="../assets/images/ic_check.png" alt="" />
              刮鬍刀
            </li>

            <li class="">
              <img class="me-1" src="../assets/images/ic_check.png" alt="" />
              吊衣架
            </li>
            <li class="">
              <img class="me-1" src="../assets/images/ic_check.png" alt="" />
              浴巾
            </li>

            <li class="">
              <img class="me-1" src="../assets/images/ic_check.png" alt="" />
              刷牙用品
            </li>
            <li class="">
              <img class="me-1" src="../assets/images/ic_check.png" alt="" />
              罐裝水
            </li>
            <li class="">
              <img class="me-1" src="../assets/images/ic_check.png" alt="" />
              梳子
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
