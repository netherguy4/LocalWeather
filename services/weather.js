import axios from 'axios'

const apiUrl = 'https://api.openweathermap.org'

const instance = axios.create({
  baseURL: apiUrl,
})

export default instance
