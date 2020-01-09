export type Method = 'get' | 'GET'
  | 'delete' | 'Delete'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'


export interface AxiosRequestConfig {
  url?: string,
  method?: Method,
  headers?: any,
  data?: any,
  params?: any,
  responseType?: XMLHttpRequestResponseType,
  timeout?: number
}


export interface AxiosResponse {
  data: any,
  status: number,
  statusText: string,
  headers: any,
  config: AxiosRequestConfig,
  request: any
}

export interface AxiosPromise extends Promise<AxiosResponse> { }

export interface AxiosError extends Error {
  config: AxiosRequestConfig,
  code?: string
  request?: any
  responst?: AxiosResponse
  isAxiosError: boolean
}


export interface Axios {
  request(config: AxiosRequestConfig): AxiosPromise

  get(url: string, config?: AxiosRequestConfig): AxiosPromise
  post(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise
}

export interface AxiosInstance extends Axios {
  (config: AxiosRequestConfig): AxiosPromise

  (url: string, config?: AxiosRequestConfig): AxiosPromise
}