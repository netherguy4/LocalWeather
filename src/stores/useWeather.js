import axios from '/services/weather'
import { defineStore } from 'pinia'

export const useWeather = defineStore('weather', () => {
  async function getWeather(lat, lon) {
    return await axios({
      url: '/data/3.0/onecall',
      method: 'get',
      params: {
        lat,
        lon,
        units: 'metric',
        exclude: 'minutely, alerts',
        appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
      },
    })
      .then((res) => {
        return res.data
      })
      .catch((err) => console.error(err))
  }
  return { getWeather }
})
