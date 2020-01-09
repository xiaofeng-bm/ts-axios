import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types/index';
import xhr from './xhr';
import { buildURL } from '../helpers/url';
import { transformRequest } from '../helpers/data';
import { precessHeaders } from '../helpers/headers';

// 统一处理config
function processConfig(config: AxiosRequestConfig): void {
  const { headers={}, url='', params, data } = config;
  config.url = buildURL(url, params);
  config.data = transformRequest(data);
  config.headers = precessHeaders(headers, data);
}


export default function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config);
  return xhr(config)
}