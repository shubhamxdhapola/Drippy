import axios from 'axios'

const baseURL = import.meta.env.VITE_BACKEND_URL

export const apiClient = axios.create({
    baseURL,
    withCredentials : true
})