import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import HttpRequests from './HttpRequestInterface'

class CustomAxiosInstance implements HttpRequests {
  private axiosInstance: AxiosInstance

  constructor() {
    this.axiosInstance = axios.create()
  }

  setAxiosInstance = (axiosIns: AxiosInstance) => {
    this.axiosInstance = axiosIns
  }

  setBaseUrl = (baseUrl: string) => {
    this.axiosInstance.defaults.baseURL = baseUrl;
  }

  get = (url: string, config?: AxiosRequestConfig) => {
    return this.axiosInstance
      .get(url, config)
      .then(response => response.data)
      .catch(e => {
        throw e
      })
  }

  post = (url: string, data: any, config?: AxiosRequestConfig) => {
    return this.axiosInstance
      .post(url, data, config)
      .then(response => response.data)
      .catch(e => {
        throw e
      })
  }

  put = (url: string, data: any, config?: AxiosRequestConfig) => {
    return this.axiosInstance
      .put(url, data, config)
      .then(response => response.data)
      .catch(e => {
        throw e
      })
  }

  patch = (url: string, data: any, config?: AxiosRequestConfig) => {
    return this.axiosInstance
      .patch(url, data, config)
      .then(response => response.data)
      .catch(e => {
        throw e
      })
  }

  delete = (url: string, config?: AxiosRequestConfig) => {
    return this.axiosInstance
      .delete(url, config)
      .then(response => response.data)
      .catch(e => {
        throw e
      })
  }
}

export default CustomAxiosInstance
