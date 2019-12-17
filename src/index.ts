import { AxiosRequestConfig } from './types/index';
import xhr from './xhr';
import { buildURL } from './helpers/url';

/**
 * Create a new instance of Axios
 * @param {Object} config The default config for the instance 
 */
function Axios(config: AxiosRequestConfig): void {
  config.url = buildURL(config.url, config.params)
  xhr(config);
}

function handleParams(config: AxiosRequestConfig) {
  const { url, params } = config;
  let str = '';

}
export default Axios;