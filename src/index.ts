import { AxiosRequestConfig } from './types/index';
import xhr from './xhr';
import { buildURL } from './helpers/url';
import { transformRequest } from './helpers/data';
import { precessHeaders } from './helpers/headers';

/**
 * Create a new instance of Axios
 * @param {Object} config The default config for the instance 
 */
function Axios(config: AxiosRequestConfig): void {
  processConfig(config);
  xhr(config);
}

// 统一处理config
function processConfig(config: AxiosRequestConfig) {
  const { headers={}, url, params, data } = config;
  config.url = buildURL(url, params);
  config.data = transformRequest(data);
  config.headers = precessHeaders(headers, data);
}

export default Axios;