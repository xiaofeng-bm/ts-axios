import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types/index';
import { parseHeaders } from './helpers/headers';
import { parseData } from './helpers/data';

function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const { 
      data = null, 
      url, 
      method = 'get', 
      headers, 
      responseType,
      timeout,
    } = config;

    const request = new XMLHttpRequest();

    if(responseType) {
      request.responseType = responseType;
    }

    if(timeout) {
      request.timeout = timeout;
    }

    request.open(method.toUpperCase(), url!, true);

    // https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/setRequestHeader
    // 注：必须在open和send之间调用
    Object.keys(headers).forEach(name => {
      request.setRequestHeader(name, headers[name]);
    })

    request.onreadystatechange = function handleLoad() {
      if (request.readyState !== 4) {
        return;
      }

      if(request.status === 0) {
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

      handleResponse(response);
    }
    // 处理请求错误
    request.onerror = function handleError() {
      reject(new Error('Network Error'));
    }
    // 处理超时
    request.ontimeout = function handleTimeout() {
      reject(new Error(`timeout of ${timeout} ms exceeded`))
    }
    // 处理非200-300状态码
    function handleResponse(response: AxiosResponse) {
      if(response.status >= 200 && response.status < 300) {
        resolve(response)
      } else {
        reject(new Error(`Request failed with status code ${response.status}`))
      }
    }

    request.send(data);
  })
}

export default xhr;