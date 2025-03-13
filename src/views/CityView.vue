<script setup>
import { defineAsyncComponent } from 'vue'
import CityWeatherSkeleton from '@/components/Weather/CityWeatherSkeleton.vue'

const CityWeather = defineAsyncComponent(() => import('@/components/Weather/CityWeather.vue'))
</script>

<template>
  <suspense>
    <template #default>
      <CityWeather />
    </template>
    <template #fallback>
      <CityWeatherSkeleton />
    </template>
  </suspense>
</template>

<style lang="scss" scoped></style>
