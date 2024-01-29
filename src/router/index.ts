import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppLayout from '../layouts/AppLayout.vue'
import NotFound from '@/components/NotFound.vue'
import { useAuthStore } from '@/stores/useAuth'
import { storeToRefs } from 'pinia'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: 'member',
          name: 'member-view',

          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/MemberView.vue')
          // component: () => import('../views/PokemonView.vue')
        },
        {
          path: 'product-detail/:id',
          name: 'product-detail',
          props: true,
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/ProductDetail.vue')
        },
        {
          path: '/make-order',
          name: 'make-order',

          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/MakeOrder1.vue'),
          meta: { auth: true }
        },
        {
          path: '/order-complete',
          name: 'order-complete',

          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/OrderComplete.vue'),
          meta: { auth: true }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },

    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegisterView.vue')
    },

    {
      path: '/products',
      name: 'products',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProductList.vue')
    },

    {
      path: '/test-view',
      name: 'test-view',

      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TestView.vue')
      // component: () => import('../views/PokemonView.vue')
    },
    // last route rule
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

router.beforeEach(async function (to) {
  // console.log(`router to=${to.path}`)
  // console.log(`router,query=${to.query.q}`)
  if (to.path === '/999') {
    return false
  }

  //TODO: 加上 token 逾期檢查

  // const store = useAuthStore();
  // console.log(store.isLogout);
  // if (to.meta.auth && store.isLogout) {

  if (to.meta.auth) {
    // const res = await checkLogin() // cannot do this since pinia store is not ready
    // if (!res.ok) {
    //   return { path: '/login', query: { redirect: to.path, ...to.query } }
    // } else {
    //   // update token
    //   userStorage.value.token = res.data?.token || ''
    //   return true
    // }
    const authStore = useAuthStore()
    // const { isLogin } = storeToRefs(authStore)
    if (authStore.isLogin) {
      return true
    } else {
      return { path: '/login', query: { redirect: to.path, ...to.query } }
    }
  }

  return true
})

export default router
