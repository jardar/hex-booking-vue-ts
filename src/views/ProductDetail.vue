<script setup lang="ts">
import RoomInfo from '../components/RoomInfo.vue'
defineProps(['id'])
</script>
<template>
  <h1 class="h1 text-primary">TBD 產品詳細頁</h1>
  <!-- 照片牆 -->
  <main class="bg-primary-10">
    <div class="d-flex gap-1 justify-content-between p-lg-5">
      <div class="productDetail__limg" style="">
        <img
          class="img-fluid rounded-start-3"
          src="../assets/images/desktop/room2-1.png"
          alt="room 2-1"
        />
      </div>
      <div class="productDetail__rimg">
        <div class="d-flex flex-wrap gap-1">
          <div style="width: 49.55%">
            <img
              class="img-fluid rounded-start-3"
              src="../assets/images/desktop/room_detail1.png"
              alt=""
            />
          </div>
          <div style="width: 49.55%">
            <img
              class="img-fluid rounded-start-3"
              src="../assets/images/desktop/room_detail2.png"
              alt=""
            />
          </div>

          <div style="width: 49.55%">
            <img
              class="img-fluid rounded-start-3"
              src="../assets/images/desktop/room_detail3.png"
              alt="3"
            />
          </div>
          <div style="width: 49.55%">
            <img
              class="img-fluid rounded-start-3"
              src="../assets/images/desktop/room_detail4.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <!-- info -->
    <div class="productDetail__info container">
      <div class="row">
        <div class="col-lg-7">
          <h2 class="h1 text-primary">尊爵雙人房</h2>
          <p>享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
          <RoomInfo />
        </div>
        <div class="col-lg-5 productDetail__section">
          <div class="ms-lg-5 p-4 rounded-3 bg-white">
            <p>預訂房型</p>
            <hr class="text-primary" />
            <h2 class="h2">尊爵雙人房</h2>
            <p>享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
            <p class="text-primary">NT$ 10,000</p>
            <button class="btn btn-primary w-100" @click="$router.push('/make-order')">
              立即預訂
            </button>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="d-flex align-items-center mb-4">
            <div class="dline"></div>
            <h5 class="h5 mb-0">訂房須知</h5>
          </div>
          <ol>
            <li>入住時間為下午3點，退房時間為上午12點。</li>
            <li>如需延遲退房，請提前與櫃檯人員聯繫，視當日房況可能會產生額外費用。</li>
            <li>請勿在房間內抽煙，若有抽煙需求，可以使用設在酒店各樓層的專用吸煙區。</li>
            <li>若發現房間內的設施有損壞或遺失，將會按照價值收取賠償金。</li>
            <li>請愛惜我們的房間與公共空間，並保持整潔。</li>
            <li>如需額外的毛巾、盥洗用品或其他物品，請聯繫櫃檯。</li>
            <li>我們提供免費的Wi-Fi，密碼可以在櫃檯或是房間內的資訊卡上找到。</li>
            <li>請勿帶走酒店房內的物品，如有需要購買，請與我們的櫃檯人員聯繫。</li>
            <li>我們提供24小時櫃檯服務，若有任何需求或疑問，歡迎隨時詢問。</li>
            <li>為了確保所有客人的安全，請勿在走廊或公共區域大聲喧嘩，並遵守酒店的其他規定。</li>
          </ol>
        </div>
      </div>
    </div>
  </main>
</template>
