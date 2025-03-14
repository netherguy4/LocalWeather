import axios from 'axios'

export function useWeather(lat, lon, debug) {
  const results = async () => {
    let response
    try {
      const { data } = await axios({
        url: 'https://api.openweathermap.org/data/3.0/onecall',
        method: 'get',
        params: {
          lat,
          lon,
          units: 'metric',
          exclude: 'minutely, alerts',
          appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
        },
      })
      response = data
    } catch (err) {
      console.error(err)
    } finally {
      return response
    }
  }
  return results
}
