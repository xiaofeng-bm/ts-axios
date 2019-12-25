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

export interface AxiosPromise  extends Promise<AxiosResponse> {}

export interface AxiosError extends Error {
  config: AxiosRequestConfig,
  code?: string
  request?: any
  responst?: AxiosResponse
  isAxiosError: boolean
}
