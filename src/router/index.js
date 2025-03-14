import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import CityView from '../views/CityView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/weather/:city',
      name: 'weather',
      component: CityView,
      meta: {
        title: 'Weather',
      },
    },
  ],
})

router.beforeEach((to) => {
  to.meta.title ? (document.title = `${to.meta.title} | The Local Weather`) : null
})

export default router
