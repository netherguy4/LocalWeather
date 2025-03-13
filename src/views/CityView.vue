<script setup>
import { defineAsyncComponent } from 'vue'
import CityWeatherSkeleton from '@/components/Weather/CityWeatherSkeleton.vue'

const CityWeather = defineAsyncComponent(() => import('@/components/Weather/CityWeather.vue'))
</script>

<template>
  <div class="view">
    <suspense>
      <template #default>
        <CityWeather />
      </template>
      <template #fallback>
        <CityWeatherSkeleton />
      </template>
    </suspense>
  </div>
</template>

<style lang="scss" scoped>
.view {
  position: absolute;
  top: 1.5em;
  left: 1.5em;
  right: 1.5em;
  bottom: 1.5em;
}
</style>
