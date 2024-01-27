<script setup lang="ts">
import BannerView from './BannerView.vue'
import FooterView from './FooterView.vue'
</script>

<template>
  <BannerView />
  <h1 class="h1 text-primary">TBD 產品列表</h1>
  <main>
    <div class="container my-5">
      <p class="mb-0">房型選擇</p>
      <h2 class="h1 text-primary mb-5">各種房型，任您挑選</h2>
      <div class="card mb-5 overflow-hidden">
        <div class="row g-0">
          <div class="col-lg-7">
            <img src="../assets/images/desktop/room2-1.png" class="img-fluid" alt="room 1" />
          </div>
          <div class="col-lg-5">
            <div class="card-body">
              <h5 class="card-title">尊爵雙人房</h5>
              <p class="card-text mb-5">
                享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
              </p>
              <div class="d-flex justify-content-between justify-content-lg-start gap-3 mb-5">
                <div class="products__gym border border-primary-40 p-3">
                  <img class="mb-2" src="../assets/images/ic_Size.png" alt="" />
                  <p class="fs-0 text-neutral-80 mb-0">24 坪</p>
                </div>
                <div class="products__gym border border-primary-40 p-3">
                  <img class="mb-2" src="../assets/images/ic_car.png" alt="" />
                  <p class="fs-0 text-neutral-80 mb-0">1 張大床</p>
                </div>
                <div class="products__gym border border-primary-40 p-3">
                  <img class="mb-2" src="../assets/images/ic_car.png" alt="" />
                  <p class="fs-0 text-neutral-80 mb-0">2-4 人</p>
                </div>
              </div>
              <div class="progress mb-5" style="height: 2px">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-label="Progress"
                  style="width: 100%"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>

              <div class="d-flex justify-content-between">
                <h5 class="h5 text-primary">NT$ 10,000</h5>
                <a href="/product-detail/1" class="">
                  <img src="../assets/images/ic_ArrowRight.png" alt="arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-5 overflow-hidden">
        <div class="row g-0">
          <div class="col-lg-7">
            <img src="../assets/images/desktop/room3-1.png" class="img-fluid" alt="room 1" />
          </div>
          <div class="col-lg-5">
            <div class="card-body">
              <h5 class="card-title">尊爵雙人房</h5>
              <p class="card-text mb-5">
                享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
              </p>
              <div class="d-flex justify-content-between justify-content-lg-start gap-3 mb-5">
                <div class="products__gym border border-primary-40 p-3">
                  <img class="mb-2" src="../assets/images/ic_Size.png" alt="" />
                  <p class="fs-0 text-neutral-80 mb-0">24 坪</p>
                </div>
                <div class="products__gym border border-primary-40 p-3">
                  <img class="mb-2" src="../assets/images/ic_car.png" alt="" />
                  <p class="fs-0 text-neutral-80 mb-0">1 張大床</p>
                </div>
                <div class="products__gym border border-primary-40 p-3">
                  <img class="mb-2" src="../assets/images/ic_car.png" alt="" />
                  <p class="fs-0 text-neutral-80 mb-0">2-4 人</p>
                </div>
              </div>
              <div class="progress mb-5" style="height: 2px">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-label="Progress"
                  style="width: 100%"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>

              <div class="d-flex justify-content-between">
                <h5 class="h5 text-primary">NT$ 10,000</h5>
                <a href="/product-detail/1" class="">
                  <img src="../assets/images/ic_ArrowRight.png" alt="arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <FooterView />
</template>
