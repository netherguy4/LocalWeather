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
      meta: {
        title: 'Home',
        enterClass: 'animate__animated animate__fadeIn',
        leaveClass: 'animate__animated animate__fadeOut',
      },
    },
    {
      path: '/weather/:city',
      name: 'weather',
      component: CityView,
      meta: {
        title: 'Weather',
        enterClass: 'animate__animated animate__fadeIn',
        leaveClass: 'animate__animated animate__fadeOut',
      },
    },
  ],
})

router.beforeEach((to) => {
  to.meta.title ? (document.title = `${to.meta.title} | The Local Weather`) : null
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
