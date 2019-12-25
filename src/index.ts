import { AxiosRequestConfig, AxiosPromise } from './types/index';
import xhr from './xhr';
import { buildURL } from './helpers/url';
import { transformRequest } from './helpers/data';
import { precessHeaders } from './helpers/headers';

/**
 * Create a new instance of Axios
 * @param {Object} config The default config for the instance 
 */
function Axios(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config);
  return xhr(config);
}

// 统一处理config
function processConfig(config: AxiosRequestConfig) {
  const { headers={}, url='', params, data } = config;
  config.url = buildURL(url, params);
  config.data = transformRequest(data);
  config.headers = precessHeaders(headers, data);
}

export * from  './types';

export default Axios;