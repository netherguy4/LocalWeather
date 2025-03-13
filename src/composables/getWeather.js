import axios from 'axios'

export function getWeather(lat, lon, debug) {
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY
  const request = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,alerts&appid=${apiKey}`
  const results = async () => {
    let resp
    try {
      const { data } = await axios.get(request)
      resp = data
    } catch (err) {
      console.error(err)
    } finally {
      if (debug) console.log(resp)
      return resp
    }
  }
  return results
}
