import axios from 'axios'
export const base_url=process.env.REACT_APP_BASE_URL

export const myAxios=axios.create({
    baseURL:base_url
})