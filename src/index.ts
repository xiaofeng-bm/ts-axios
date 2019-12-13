import { AxiosRequestConfig } from './types/index';
import xhr from './xhr';

/**
 * Create a new instance of Axios
 * @param {Object} config The default config for the instance 
 */
function Axios(config: AxiosRequestConfig) {
    xhr(config);
}

export default Axios;