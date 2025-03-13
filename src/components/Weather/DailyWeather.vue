<script setup>
import WindVector from './WindVector.vue'
import AsyncImage from '../AsyncImage.vue'
const props = defineProps({
  weather: Array,
})
const dateFormat = (time) => {
  const date = new Date(time * 1000)
  const t = date.toLocaleDateString('en', {
    weekday: 'long',
  })
  return t
}
</script>

<template>
  <div>
    <div class="card" v-for="day in weather" :key="day.dt">
      <div class="card__container">
        <h4 class="card__title">{{ dateFormat(day.dt) }}</h4>
        <AsyncImage
          class="card__image"
          :src="`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`"
          :alt="day.weather[0].description"
        />
        <WindVector class="card__wind" :speed="day.wind_speed" :degree="day.wind_deg" />
        <h5 class="card__subtitle">
          <span class="card__subtitle-span">{{ Math.round(day.temp.max) }}°C</span>
          <span class="card__subtitle-span">{{ Math.round(day.temp.min) }}°C</span>
        </h5>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  background: rgba($color: #000000, $alpha: 0.3);
  box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.1);
  border-radius: 30px;
  &__image {
    display: block;
    margin: 0 auto;
    height: 100px;
  }
  &__container {
    padding: 1.5em;
  }
  &__title {
    font-weight: 500;
    font-size: 1.1em;
  }
  &__subtitle {
    display: flex;
    gap: 1.5em;
    justify-content: center;
  }
  &__subtitle-span:last-child {
    opacity: 0.7;
    font-weight: 300;
  }
  &__wind {
    font-weight: 300;
    font-size: 0.8em;
    margin: 0 0 1em 0;
  }
}
</style>
