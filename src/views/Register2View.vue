<script setup lang="ts">
import { useRegisterStore } from '@/stores/useRegisterStore'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { parseBirth } from '@/utils/dateUtil'
import cityCountyData from '../assets/cityCountyData.json'

const emit = defineEmits(['next', 'goto'])

const registerStore = useRegisterStore()
const { registerData } = storeToRefs(registerStore)

// 在未註冊完成前回到這頁時，除了密碼之外，回復其它已填寫資料
const formName = ref(registerData.value?.name || '')
const formPhone = ref(registerData.value?.phone || '')
const { year, month, day } = parseBirth(registerData.value?.birthday || '1921/1/1')
const formBirthYear = ref(year)
const formBirthMonth = ref(month)
const formBirthDay = ref(day)
const formCity = ref(registerData.value?.address?.city || '')
const formCounty = ref(registerData.value?.address?.county || '')
const formAddress = ref(registerData.value?.address?.detail || '')
const formAgree = ref(false)
// load city and county options
const cityOptions = ref<string[]>([])
const countyOptions = ref<string[]>([])
cityOptions.value = cityCountyData.map((city) => {
  return city.CityName
})
pairCityAndCounty(formCity.value)

function handleCitySelect(e: any) {
  const selectedCity = e.target.value
  pairCityAndCounty(selectedCity)
}
//
const onSubmit = (values: any) => {
  // console.log(values)
  // save values to pinia
  registerStore.registerPhaseTwo(
    values.username,
    values.phone,
    `${values.birthYear}/${values.birthMonth}/${values.birthDay}`,
    {
      city: values.city,
      county: values.county,
      detail: values.address,
      zipcode: 100
    }
  )

  // switch to next page
  emit('next', 'step2')
}
//
function pairCityAndCounty(wantCity: string) {
  const selectedCityIndex = cityCountyData.findIndex((city) => {
    return city.CityName === wantCity
  })
  if (selectedCityIndex === -1) {
    return
  }
  countyOptions.value = cityCountyData[selectedCityIndex].AreaList.map((county) => {
    return county.AreaName
  })
}
</script>

<template>
  <!-- main -->
  <main class="login container-fluid gx-0 bg-neutral-bg position-relative v-100">
    <img
      src="../assets/images/desktop/line2.png"
      alt="Line2"
      height="54"
      class="login__line2 img-fluid d-lg-none"
    />
    <img
      src="../assets/images/desktop/line3.png"
      alt="Line3"
      height="187"
      class="login__line3 position-absolute top-0 end-0 d-none d-lg-block"
    />

    <div class="row gx-0 position-relative z-1">
      <div class="col col-lg-6 d-none d-lg-block">
        <img class="img-fluid" src="../assets/images/desktop/register.png" alt="banner" />
      </div>
      <div class="col col-lg-6 d-flex flex-column justify-content-center align-items-center">
        <div class="px-4">
          <p class="text-primary fs-0">享樂酒店，誠摯歡迎</p>
          <h2 class="h1 text-white mb-3">立即註冊</h2>

          <!-- process bar -->
          <div class="d-flex justify-content-between align-items-center mb-5">
            <div class="text-center">
              <button
                @click="emit('goto', 'step1')"
                type="button"
                class="btn btn-sm btn-primary rounded-pill"
                style="width: 2rem; height: 2rem"
              >
                1
              </button>
              <p class="text-white fs-0 mb-0">輸入信箱及密碼</p>
            </div>
            <div class="progress" style="height: 1px">
              <div
                class="progress-bar"
                role="progressbar"
                aria-label="Progress"
                style="width: 150px"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div class="text-center">
              <button
                @click="emit('goto', 'step2')"
                type="button"
                class="btn btn-sm btn-primary rounded-pill"
                style="width: 2rem; height: 2rem"
              >
                2
              </button>
              <p class="text-white fs-0 mb-0">填寫基本資料</p>
            </div>
          </div>

          <VForm novalidate v-slot="{ errors }" class="text-white fs-0 mb-5" @submit="onSubmit">
            <div class="mb-3">
              <label for="username" class="form-label">姓名 必填</label>
              <VField
                v-model="formName"
                id="username"
                name="username"
                label="姓名"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['username'] }"
                placeholder="請輸入 姓名"
                rules="required"
              />
              <error-message name="username" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">手機 必填</label>
              <VField
                v-model="formPhone"
                id="phone"
                name="phone"
                label="手機"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['phone'] }"
                placeholder="請輸入 台灣地區手機號碼"
                rules="phonetw|required"
              />
              <error-message name="phone" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3">
              <label for="birthYear" class="form-label">生日 必填</label>
              <div class="d-flex gap-1 justify-content-between">
                <VField
                  v-model="formBirthYear"
                  id="birthYear"
                  name="birthYear"
                  class="form-select"
                  :class="{ 'is-invalid': errors['birthYear'] }"
                  rules="required"
                  as="select"
                >
                  <option value="" selected disabled>年</option>
                  <option v-for="y in 100" :key="y + 1920" :value="y + 1920">{{ y + 1920 }}</option>
                </VField>

                <VField
                  v-model="formBirthMonth"
                  id="birthMonth"
                  name="birthMonth"
                  class="form-select"
                  :class="{ 'is-invalid': errors['birthMonth'] }"
                  rules="required"
                  as="select"
                >
                  <option value="" selected disabled>月</option>
                  <option v-for="m in 12" :key="m" :value="m">{{ m }}</option>
                </VField>

                <VField
                  v-model="formBirthDay"
                  id="birthDay"
                  name="birthDay"
                  class="form-select"
                  :class="{ 'is-invalid': errors['birthDay'] }"
                  rules="required"
                  as="select"
                >
                  <option value="" selected disabled>日</option>
                  <option v-for="d in 31" :key="d" :value="d">{{ d }}</option>
                </VField>
              </div>
              <error-message name="birthYear" class="invalid-feedback"></error-message>
              <error-message name="birthMonth" class="invalid-feedback"></error-message>
              <error-message name="birthDay" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3">
              <label for="city" class="form-label">地址 必填</label>
              <div class="d-flex gap-1 justify-content-between mb-3">
                <VField
                  v-model="formCity"
                  @change="handleCitySelect"
                  id="city"
                  name="city"
                  class="form-select"
                  :class="{ 'is-invalid': errors['city'] }"
                  rules="required"
                  as="select"
                >
                  <option value="" selected disabled>請選城市</option>
                  <option v-for="c in cityOptions" :key="c" :value="c">{{ c }}</option>
                </VField>

                <VField
                  v-model="formCounty"
                  id="county"
                  name="county"
                  aria-label="select county"
                  class="form-select"
                  :class="{ 'is-invalid': errors['county'] }"
                  rules="required"
                  as="select"
                >
                  <option value="" selected disabled>請選區域</option>
                  <option v-for="c in countyOptions" :key="c" :value="c">{{ c }}</option>
                </VField>
              </div>

              <VField
                v-model="formAddress"
                id="address"
                name="address"
                label="地址"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['address'] }"
                placeholder="請輸入詳細地址"
                rules="required"
              />
              <error-message name="city" class="invalid-feedback"></error-message>
              <error-message name="county" class="invalid-feedback"></error-message>
              <error-message name="address" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3 form-check">
              <input v-model="formAgree" type="checkbox" class="form-check-input" id="agree" />
              <label class="form-check-label text-white fs-0" for="agree"
                >我已閱讀並同意本網站個資使用規範</label
              >
            </div>

            <button
              :disabled="!formAgree || Object.keys(errors).length > 0"
              type="submit"
              class="btn btn-primary w-100"
            >
              完成註冊
            </button>
          </VForm>
          <p class="text-white fs-0">
            已經有會員了嗎？
            <a href="/login" class="text-primary fs-0 text-decoration-none">立即登入</a>
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped lang="scss"></style>
