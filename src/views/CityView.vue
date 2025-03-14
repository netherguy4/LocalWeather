<script setup>
import { defineAsyncComponent } from 'vue'
import CityWeatherSkeleton from '@/components/Weather/CityWeatherSkeleton.vue'

const CityWeather = defineAsyncComponent(() => import('@/components/Weather/CityWeather.vue'))
</script>

<template>
  <div class="container">
    <transition
      enter-active-class="animate__animated animate__fadeIn weather-enter-leave"
      leave-active-class="animate__animated animate__fadeOut weather-enter-leave"
    >
      <suspense>
        <template #default>
          <CityWeather />
        </template>
        <template #fallback>
          <CityWeatherSkeleton />
        </template>
      </suspense>
    </transition>
  </div>
</template>
