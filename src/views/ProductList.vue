<template>
  <BannerView />
  <h1 class="h1 text-primary">TBD 產品列表</h1>
  <main>
    <div class="container my-5">
      <p class="mb-0">房型選擇</p>
      <h2 class="h1 text-primary mb-5">各種房型，任您挑選</h2>

      <div v-if="rooms && Array.isArray(rooms?.result)">
        <div v-for="room in rooms.result" :key="room._id" class="card mb-5 overflow-hidden">
          <div class="row g-0">
            <div class="col-lg-7">
              <img :src="room.imageUrl" class="img-fluid" alt="room" />
            </div>
            <div class="col-lg-5">
              <div class="card-body">
                <h5 class="card-title">{{ room.name }}</h5>
                <p class="card-text mb-5">
                  {{ room.description }}
                </p>
                <div class="d-flex justify-content-between justify-content-lg-start gap-3 mb-5">
                  <div class="products__gym border border-primary-40 p-3">
                    <img class="mb-2" src="../assets/images/ic_Size.png" alt="" />
                    <p class="fs-0 text-neutral-80 mb-0">{{ room.areaInfo }}</p>
                  </div>
                  <div class="products__gym border border-primary-40 p-3">
                    <img class="mb-2" src="../assets/images/ic_car.png" alt="" />
                    <p class="fs-0 text-neutral-80 mb-0">{{ room.bedInfo }}</p>
                  </div>
                  <div class="products__gym border border-primary-40 p-3">
                    <img class="mb-2" src="../assets/images/ic_car.png" alt="" />
                    <p class="fs-0 text-neutral-80 mb-0">1~{{ room.maxPeople }} 人</p>
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
                  <h5 class="h5 text-primary">NT$ {{ room.price }}</h5>
                  <a :href="`/product-detail/${room._id}`" class="">
                    <img src="../assets/images/ic_ArrowRight.png" alt="arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="text-white">
        {{ error }}
      </div>
    </div>
  </main>
  <FooterView />
</template>

<script setup lang="ts">
import BannerView from './BannerView.vue'
import FooterView from './FooterView.vue'
import { onMounted } from 'vue'
import useRoom from '@/composables/apiservice/useRoom'
import { useDlgStore } from '@/stores/useDlgStore'

const { isLoading, rooms, getAllRooms, error } = useRoom()
const dlgStore = useDlgStore()
dlgStore.toggleProgressModal(isLoading, '讀取中')

onMounted(() => {
  getAllRooms()
})
</script>
