import axios from 'axios'

// create an axios instance
console.log(process.env)
const service = axios.create({
  baseURL: process.env.VUE_APP_URL,
  timeout: 5000,
})

// request interceptor
service.interceptors.request.use(
  config => {
    /* if (store.getters.token) {
      config.headers['X-Token'] = ''
    } */
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => response,
  error => {
    // const { data } = error.response
    return Promise.reject(error)
  }
)

export default service
