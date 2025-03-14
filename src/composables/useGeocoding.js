import axios from '/services/geocoding'
import { unref } from 'vue'

export function useGeocoding() {
  function fetchResults(query) {
    query = unref(query)
    if (query === '') {
      return 0
    } else {
      return axios({
        url: '/geocoding/v5/mapbox.places/' + query + '.json',
        method: 'get',
        params: {
          access_token: import.meta.env.VITE_MAPBOX_API_KEY,
          types: 'place',
        },
      })
        .then((res) => {
          return res.data.features
        })
        .catch((err) => console.error(err))
    }
  }
  return { fetchResults }
}
