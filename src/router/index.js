import { createRouter, createWebHashHistory } from 'vue-router'
import { useAddedCities } from '@/stores/addedCities'
import { useAnimation } from '@/stores/animation'

import HomeView from '../views/HomeView.vue'
import CityView from '../views/CityView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/weather/:city',
      name: 'weather',
      component: CityView,
    },
  ],
})

router.afterEach((to) => {
  if (to.name === 'home') {
    useAnimation().hideButton()
  } else if (useAddedCities().isAdded !== true) {
    useAnimation().showButton()
  } else {
    useAnimation().hideButton()
  }
  return
})

export default router
