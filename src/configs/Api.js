import axios from 'axios'

export const API_BASE = 'http://172.16.13.215/myshop/api/v1/'
axios.defaults.baseURL = API_BASE
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
export const API_LOGIN = 'auth/login'
export const API_REGISTER = 'auth/register'