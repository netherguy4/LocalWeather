<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useWeather } from '@/composables/useWeather'
import { useAddedCities } from '@/stores/addedCities'
import { useToast } from 'vue-toastification'

import WeatherGraph from './WeatherGraph.vue'
import WindVector from './WindVector.vue'
import DailyWeather from './DailyWeather.vue'
import AsyncImage from '../AsyncImage.vue'

import trashCan from '@/assets/svg/trash.svg'

const toast = useToast()
const route = useRoute()
const router = useRouter()
const weather = useWeather(route.query.lat, route.query.lon)
const data = await weather()
await new Promise((resolve) => {
  setTimeout(resolve, 300)
})
const clickHandler = () => {
  router.push('/')
  toast.success('Removed city from tracking list', { timeout: 1500, toastClassName: 'my-toast' })
  useAddedCities().removeCity(route.query.index)
}

const timeNow = new Date(Date.now())
const dateFormat = timeNow.toLocaleDateString('en', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
})
const timeFormat = timeNow.toLocaleTimeString('en', {
  timeStyle: 'short',
})

const labels = data.hourly.slice(0, 8).map((hour) => {
  return new Date(hour.dt * 1000).toLocaleTimeString('en', {
    hour: 'numeric',
  })
})
let dataset = data.hourly.slice(0, 8).map((hour) => {
  return Math.round(hour.temp)
})
</script>

<template>
  <div class="weather" v-auto-animate>
    <div class="weather__current">
      <time class="weather__time" :datetime="timeNow">{{ dateFormat }}, {{ timeFormat }}</time>
      <h2 class="weather__title">{{ route.params.city }}</h2>
      <h3 class="weather__temp">{{ Math.round(data.current.temp) }}°C</h3>
      <AsyncImage
        class="weather__image"
        :src="`https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`"
        :alt="data.current.weather[0].description"
      />
      <p class="weather__description">
        Feels like {{ Math.round(data.current.feels_like) }}°C,
        {{ data.current.weather[0].description }}
      </p>
      <WindVector
        class="weather__wind"
        :speed="data.current.wind_speed"
        :degree="data.current.wind_deg"
      />
      <div class="weather__graph-wrapper">
        <WeatherGraph
          class="weather__graph"
          :title="'Hourly forecast'"
          :labels="labels"
          :datasets="[
            {
              label: 'Temperature',
              backgroundColor: '#fff',
              borderColor: '#fff',
              data: dataset,
              borderWidth: 2,
              normalized: true,
              clip: 10,
            },
          ]"
        />
      </div>
    </div>
    <h2 class="weather__title">8-day forecast</h2>
    <DailyWeather class="weather__daily" :weather="data.daily" />
    <a
      href=""
      target="_top"
      v-if="useAddedCities().isAdded"
      @click="clickHandler"
      class="weather__button"
    >
      <Component class="weather__button-image" :is="trashCan" />
      Remove city
    </a>
  </div>
</template>

<style lang="scss" scoped>
.weather {
  text-align: center;
  &__current {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__time {
    opacity: 0.7;
    font-weight: 300;
  }
  &__title {
    font-size: 2em;
    margin: 0 0 0.5em 0;
  }
  &__temp {
    font-size: 3em;
    font-weight: 500;
  }
  &__image {
    width: 100px;
    height: 100px;
  }
  &__description {
    margin: 0 0 1em 0;
  }
  &__wind {
    margin: 0 0 1em 0;
  }
  &__graph {
    height: toem(250);
  }
  &__graph-wrapper {
    background: rgba($color: #000000, $alpha: 0.3);
    padding: 1em 1em 1em 0;
    border-radius: 30px;
    margin: 0 0 3em 0;
    box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.1);
    width: 100%;
  }
  &__daily {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(toem(190), 1fr));
    gap: 1em;
    padding: 1em 0;
  }
  &__button {
    color: inherit;
    font-size: 1.2em;
    margin: 0 auto 0;
    padding: 0.5em;
    display: inline-flex;
    align-items: center;
    gap: 0.3em;
    &-image {
      height: 1em;
      width: 1em;
      fill: currentColor;
    }
    @include hover {
      color: rgb(244, 41, 41);
    }
  }
}
</style>
