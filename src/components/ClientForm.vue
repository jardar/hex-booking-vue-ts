<script setup lang="ts"></script>

<template>
  <!-- 訂房人 Form -->
  <VForm class="row g-3" v-slot="{ errors }">
    <h6 class="h6 mb-4">訂房人資訊</h6>
    <div class="col-md-12">
      <label for="userName" class="form-label">姓名</label>
      <VField
        name="userName"
        type="text"
        class="form-control"
        :class="{ 'is-invalid': errors['userName'] }"
        rules="required"
        id="userName"
        placeholder="請輸入姓名"
      />
    </div>
    <div class="col-md-12">
      <label for="telNum" class="form-label">手機號碼</label>
      <VField
        name="telNum"
        type="text"
        class="form-control"
        :class="{ 'is-invalid': errors['telNum'] }"
        rules="required|phonetw"
        id="telNum"
        placeholder="請輸入手機號碼"
      />
    </div>
    <div class="col-md-12">
      <label for="email" class="form-label">電子信箱</label>
      <VField
        name="email"
        type="email"
        class="form-control"
        :class="{ 'is-invalid': errors['email'] }"
        rules="required|email"
        id="email"
        placeholder="請輸入電子信箱"
      />
    </div>
    <div class="col-md-12">
      <label for="city" class="form-label">地址</label>
      <div class="row">
        <div class="col-md-6 mb-3">
          <VField
            name="city"
            id="city"
            class="form-select"
            :class="{ 'is-invalid': errors['city'] }"
            rules="required"
            as="select"
          >
            <option selected>請選擇縣市</option>
            <option>台北市</option>
            <option>高雄市</option>
          </VField>
        </div>
        <div class="col-md-6 mb-3">
          <VField
            name="region"
            id="region"
            class="form-select"
            :class="{ 'is-invalid': errors['region'] }"
            rules="required"
            as="select"
          >
            <option selected>請選擇地區</option>
            <option>文山區</option>
            <option>新興區</option>
          </VField>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <VField
            name="address"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['address'] }"
            rules="required"
            id="inputAddress"
            placeholder="請輸入詳細地址"
          />
        </div>
      </div>
    </div>
  </VForm>
</template>
