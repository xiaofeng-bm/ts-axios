import { AxiosRequestConfig } from './types/index';
import xhr from './xhr';
import { buildURL } from './helpers/url';
import { transformRequest } from './helpers/data';

/**
 * Create a new instance of Axios
 * @param {Object} config The default config for the instance 
 */
function Axios(config: AxiosRequestConfig): void {
  config.url = buildURL(config.url, config.params);
  config.data = transformRequest(config.data)
  xhr(config);
}

export default Axios;