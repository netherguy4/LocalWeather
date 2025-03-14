<script setup>
import { useWeather } from '@/stores/useWeather'
import AsyncImage from '../AsyncImage.vue'

const props = defineProps({
  city: String,
  lat: String,
  lon: String,
})

const weather = useWeather()
const data = await weather.getWeather(props.lat, props.lon)
await new Promise((resolve) => {
  setTimeout(resolve, 300)
})
</script>

<template>
  <li class="city">
    <div class="city__name">
      {{ props.city.split(',')[0] }}
    </div>
    <div class="city__temp">
      <div>{{ Math.round(data.current.temp) }}°C</div>
      <div class="city__feels-like">feels like {{ Math.round(data.current.feels_like) }}°C</div>
    </div>
    <AsyncImage
      :src="`https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`"
      :alt="data.current.weather[0].description"
    />
  </li>
</template>

<style lang="scss" scoped>
.city {
  display: grid;
  align-items: center;
  justify-items: center;
  background: rgba($color: #000000, $alpha: 0.3);
  border-radius: 30px;
  min-height: 100px;
  @media (min-width: toem(600)) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1em;
  }
  &__name {
    font-weight: 500;
    font-size: 1.5em;
    margin: 1em 0 0.5em 0;
    @media (min-width: toem(600)) {
      margin: 0;
    }
  }
  &__temp {
    font-weight: 500;
    font-size: 1.2em;
    display: flex;
    flex-direction: column;
    gap: 0.2em;
    text-align: center;
  }
  &__feels-like {
    opacity: 0.8;
  }
}
</style>
