import axios from 'axios'

const apiUrl = 'https://api.mapbox.com'

const instance = axios.create({
  baseURL: apiUrl,
})

export default instance
