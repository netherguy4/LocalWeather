import { computed } from 'vue'
import { defineStore } from 'pinia'
import { useRoute } from 'vue-router'
import { useStorage } from '@vueuse/core'

export const useAddedCities = defineStore('addedCities', () => {
  const cities = useStorage('savedCities', new Map())
  const route = useRoute()
  function addCity(city, lat, lon, id) {
    cities.value.set(id, {
      city: city,
      lat: lat,
      lon: lon,
    })
  }
  function removeCity(id) {
    cities.value.delete(id)
  }
  const isAdded = computed(() => {
    return cities.value.has(route.query.index)
  })

  return { cities, addCity, removeCity, isAdded }
})
