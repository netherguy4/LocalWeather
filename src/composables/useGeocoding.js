import { watch, computed } from 'vue'
import { useDebounce, computedAsync } from '@vueuse/core'
import axios from 'axios'

export function useGeocoding(searchQuery, debounce, debug) {
  const searchQueryDebouced = useDebounce(searchQuery, debounce ? debounce : 500)
  const apiKey = import.meta.env.VITE_MAPBOX_API_KEY
  const request = computed(() => {
    return `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQueryDebouced.value}.json?access_token=${apiKey}&types=place`
  })
  const results = computedAsync(async () => {
    if (searchQueryDebouced.value === '') {
      return 0
    } else {
      let resp
      try {
        const { data } = await axios.get(request.value)
        resp = data
      } catch (err) {
        console.error(err)
      } finally {
        return resp.features
      }
    }
  })
  if (debug) {
    watch(results, () => {
      console.log(results.value)
    })
  }
  return results
}
