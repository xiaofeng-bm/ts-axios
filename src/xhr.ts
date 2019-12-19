import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types/index';
import { parseHeaders } from './helpers/headers';
import { parseData } from './helpers/data';

function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const { data = null, url, method = 'get', headers, responseType } = config;

    const request = new XMLHttpRequest();

    request.open(method.toUpperCase(), url, true);

    // https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/setRequestHeader
    // 注：必须在open和send之间调用
    Object.keys(headers).forEach(name => {
      request.setRequestHeader(name, headers[name]);
    })

    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      const responseHeaders = parseHeaders(request.getAllResponseHeaders());
      const responseData = responseType && responseType !== 'text' ? request.response : request.responseText;

      const response: AxiosResponse = {
        data: parseData(responseData),
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      }

      resolve(response);
    }

    request.send(data);
  })
}

export default xhr;