import axios, { AxiosRequestConfig } from 'axios';
import { ResponseType } from '../types/apis'
const instance = axios.create({
  baseURL: 'http://127.0.0.1:8888'
})

const request = async <T = any>(config: AxiosRequestConfig): Promise<ResponseType<T>> => {
  try {
    const { data } = await instance.request<ResponseType<T>>(config)
    console.log(data)
    return data
  } catch (err: any) {
    const message = err.message || '请求失败'
    console.error(message)
    alert(message)
    return {
      message: message,
      data: null as any
    }
  }
}

export default request