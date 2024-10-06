import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add a request interceptor
api.interceptors.request.use((config) => {
  // You can add common headers or authentication tokens here
  return config
})

// Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common error scenarios here
    return Promise.reject(error)
  },
)
